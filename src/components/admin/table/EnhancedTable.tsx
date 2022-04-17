import { MusicalTimePlan, TableDataType } from "@/types/types";
import React, { useMemo } from "react";
import MaterialTable, { Column } from "@material-table/core";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firestore";
import { collectionNames } from "@/constants/constants";
import StatusBanner from "@/components/check/StatusBanner";

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
      { title: "seatCode", field: "seatCode", emptyValue: "미정" },
      {
        title: "limitedAt",
        field: "limitedAt",
        render: (rowData: TableDataType) =>
          makeLocaleDate(rowData.limitedAt.seconds),
        customFilterAndSearch: (term: string, rowData: TableDataType) =>
          makeLocaleDate(rowData.limitedAt.seconds).indexOf(term) !== -1,
      },
      {
        title: "status",
        field: "status",
        lookup: {
          waiting: "waiting",
          confirmed: "confirmed",
          cancelRequest: "cancelRequest",
          cancelled: "cancelled",
          unknown: "unknown",
        },
        render: (rowData: TableDataType) => (
          <StatusBanner status={rowData.status} />
        ),
      },
    ],
    []
  );

  const onChangeStatus = async (id: string, field: string, value: string) => {
    try {
      await updateDoc(doc(db, collectionNames.TICKETS, id), {
        [field]: value,
      });
      updateData(id, field, value);
    } catch (error) {
      console.error(error);
    }
  };

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
          _,
          rowData: TableDataType,
          columnDef: Column<TableDataType>
        ) => onChangeStatus(rowData.id, columnDef.title as string, newValue),
      }}
    />
  );
};

export default EnhancedTable;
