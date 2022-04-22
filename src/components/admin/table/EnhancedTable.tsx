import {
  EmailType,
  MusicalTimePlan,
  SeatsType,
  TableDataType,
} from "@/types/types";
import React, { useCallback, useEffect, useMemo } from "react";
import MaterialTable, { Column } from "@material-table/core";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { increment, off, ref, update } from "firebase/database";
import { db } from "@/firebase/firestore";
import {
  collectionNames,
  completedEmailString,
  completedEmailTitle,
  DISCOUNTED_SEAT_PRICE,
  MATINEE_SEAT_PRICE,
  NOMAL_SEAT_PRICE,
} from "@/constants/constants";
import StatusBanner from "@/components/check/StatusBanner";
import { realtime } from "@/firebase/realtime";

interface EnhancedTableProps {
  data: TableDataType[];
  selectedDate: MusicalTimePlan;
  updateData: (id: string, field: string, value: string) => void;
}

const EnhancedTable = ({
  data,
  selectedDate,
  updateData,
}: EnhancedTableProps) => {
  const makeLocaleDate = (sec: number) =>
    new Date(sec * 1000).toLocaleString().slice(5, -3);

  const day = selectedDate.slice(0, 2);
  const hour = selectedDate.slice(2, 4);
  const min = selectedDate.slice(-2);

  const columns: Column<TableDataType>[] = useMemo(
    () => [
      { title: "id", field: "id" },
      { title: "name", field: "name" },
      { title: "contact", field: "contact" },
      { title: "email", field: "email" },
      {
        title: "totalSeats",
        field: "seats",
        render: ({ seats }: TableDataType) =>
          `n${seats.normal}/w${seats.wheelChair}/b${seats.barrierFree}`,
      },
      { title: "seatCode", field: "seatCode", emptyValue: "미정" },
      {
        title: "limitedAt",
        field: "limitedAt",
        render: ({ limitedAt }: TableDataType) =>
          makeLocaleDate(limitedAt.seconds),
        customFilterAndSearch: (term: string, { limitedAt }: TableDataType) =>
          makeLocaleDate(limitedAt.seconds).indexOf(term) !== -1,
      },
      {
        title: "totalPrice",
        field: "price",
        render: ({ price }: TableDataType) =>
          (
            price.normal * NOMAL_SEAT_PRICE +
            (price.local + price.other) * DISCOUNTED_SEAT_PRICE +
            (price?.matinee ?? 0) * MATINEE_SEAT_PRICE
          ).toLocaleString(),
      },
      {
        title: "status",
        field: "status",
        lookup: {
          waiting: "입금대기",
          checking: "입금 확인 중",
          confirmed: "예매확정",
          cancelRequest: "취소신청",
          cancelled: "취소완료",
          expired: "입금 기한 만료",
          unknown: "알 수 없음",
        },
        render: ({ status }: TableDataType) => <StatusBanner status={status} />,
      },
    ],
    []
  );

  const sendCompletedEmail = useCallback(
    async (name: string, email: string, seats: SeatsType) => {
      try {
        const musicalDate = `5월 ${day}일 ${hour}시 ${min}분`;
        const tickets = seats.normal + seats.wheelChair + seats.barrierFree;

        const emailContent: EmailType = {
          to: [email],
          message: {
            subject: completedEmailTitle,
            html: completedEmailString({
              username: name,
              email,
              musicalDate,
              tickets,
            }),
          },
        };

        await addDoc(collection(db, collectionNames.EMAIL), emailContent);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          const errorMessage = `예매 완료 이메일 보내기 오류 발생 ${error.name} - ${error.message}`;
          alert(errorMessage);
          throw new Error(errorMessage);
        }
      }
    },
    [day, hour, min]
  );

  const onChangeStatus = useCallback(
    async (
      rowData: TableDataType,
      field: string,
      value: string,
      oldValue: string
    ) => {
      const { id, seats, name, email } = rowData;
      try {
        if (!value) return;
        await updateDoc(doc(db, collectionNames.TICKETS, id), {
          [field]: value,
        });

        if (
          ["cancelled", "expired", "unknown"].includes(value) &&
          !["취소완료", "입금 기한 만료", "알 수 없음"].includes(oldValue)
        ) {
          const { normal, wheelChair, barrierFree } = seats;
          await update(ref(realtime, selectedDate), {
            normal: increment(-normal ?? 0),
            wheelChair: increment(-wheelChair ?? 0),
            barrierFree: increment(-barrierFree ?? 0),
          });
        }

        if (
          ["waiting", "checking", "confirmed", "cancelRequest"].includes(
            value
          ) &&
          !["입금대기", "입금 확인 중", "예매확정", "취소신청"].includes(
            oldValue
          )
        ) {
          const { normal, wheelChair, barrierFree } = seats;
          await update(ref(realtime, selectedDate), {
            normal: increment(normal ?? 0),
            wheelChair: increment(wheelChair ?? 0),
            barrierFree: increment(barrierFree ?? 0),
          });
        }

        updateData(id, field, value);

        if (value === "confirmed") {
          await sendCompletedEmail(name, email, seats);
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          throw new Error(
            `어드민 - 유저의 스테이터스 변경 중 오류 발생 ${error.name} - ${error.message}`
          );
        }
      }
    },
    [selectedDate, updateData, sendCompletedEmail]
  );

  useEffect(() => {
    return () => {
      off(ref(realtime));
    };
  }, []);

  return (
    <MaterialTable
      title={`5월 ${day}일 ${hour}시 ${min}분 공연 티켓 데이터`}
      columns={columns}
      data={data}
      options={{
        sorting: true,
        filtering: true,
        paging: false,
        search: true,
      }}
      cellEditable={{
        isCellEditable: (_, columnDef: Column<TableDataType>) =>
          columnDef.title === "status" || columnDef.title === "seatCode"
            ? true
            : false,
        onCellEditApproved: async (
          newValue: string,
          oldValue: string,
          rowData: TableDataType,
          columnDef: Column<TableDataType>
        ) =>
          onChangeStatus(
            rowData,
            columnDef.title as string,
            newValue,
            oldValue
          ),
      }}
    />
  );
};

export default EnhancedTable;
