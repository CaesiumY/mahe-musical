import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import {
  BARRIER_FREE_SEAT_COUNT,
  castingTable,
  collectionNames,
  DISCOUNTED_SEAT_PRICE,
  LIMIT_TICKET_DATE,
  MATINEE_SEAT_PRICE,
  NOMAL_SEAT_PRICE,
  NORMAL_SEAT_COUNT,
  NO_BARRIER_FREE_TOTAL_SEAT_COUNT,
  WHEEL_CHARIR_SEAT_COUNT,
} from "@/constants/constants";
import { db } from "@/firebase/firestore";
import {
  MusicalTimePlan,
  PriceType,
  SeatsType,
  TicketsType,
  UserInfoType,
} from "@/types/types";
import TabButton from "./common/TabButton";
import TabHeader from "./common/TabHeader";
import { increment, off, ref, update } from "firebase/database";
import { realtime } from "@/firebase/realtime";

interface LineItemProps {
  title: string;
  children: React.ReactNode;
}

const LineItem = ({ title, children }: LineItemProps) => {
  return (
    <div className="flex flex-row w-full">
      <span className="basis-1/3 font-semibold">{title}</span>
      <span className="basis-2/3 font-normal">{children}</span>
    </div>
  );
};

interface ResultCheckProps {
  toNextTab: (toFirst?: boolean) => void;
  bookResult: {
    musicalDate: MusicalTimePlan;
    seats: SeatsType;
    price: PriceType;
    userInfo: UserInfoType;
  };
  data: SeatsType;
}

const ResultCheck = ({ toNextTab, bookResult, data }: ResultCheckProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { musicalDate, price, seats, userInfo } = bookResult;
  const { normal, wheelChair, barrierFree } = seats;
  const { name, contact, email } = userInfo;

  const totalPrice = useMemo(
    () =>
      (
        price.normal * NOMAL_SEAT_PRICE +
        (price.local + price.other) * DISCOUNTED_SEAT_PRICE +
        price.matinee * MATINEE_SEAT_PRICE
      ).toLocaleString(),
    [price]
  );

  const day = musicalDate.slice(0, 2);
  const hour = musicalDate.slice(2, 4);
  const minute = musicalDate.slice(-2);

  const makeAlert = (seat: string, userTickets: number, remained: number) =>
    alert(
      `${seat}석의 수량이 부족합니다. 다시 예매해주세요.
예매 신청 수량 ${userTickets}석 / 남은 수량 ${remained}석`
    );

  const makeDateObject = () => {
    const nowTimestamp = Timestamp.now();
    const limitDay =
      new Date(
        2022,
        new Date().getMonth(),
        new Date().getDate() + LIMIT_TICKET_DATE
      ).getTime() - 1;
    const limitTimestamp = Timestamp.fromDate(new Date(limitDay));

    return { nowTimestamp, limitTimestamp };
  };

  const onClickMakeBook = async () => {
    try {
      setIsLoading(true);

      if (
        ["11", "12"].includes(day) &&
        data.normal + normal > NO_BARRIER_FREE_TOTAL_SEAT_COUNT
      ) {
        makeAlert(
          "일반",
          normal,
          NO_BARRIER_FREE_TOTAL_SEAT_COUNT - data.normal
        );
        return toNextTab(true);
      }
      if (data.normal + normal > NORMAL_SEAT_COUNT) {
        makeAlert("일반", normal, NORMAL_SEAT_COUNT - data.normal);
        return toNextTab(true);
      }
      if (data.wheelChair + wheelChair > WHEEL_CHARIR_SEAT_COUNT) {
        makeAlert(
          "휠체어",
          wheelChair,
          WHEEL_CHARIR_SEAT_COUNT - data.wheelChair
        );
        return toNextTab(true);
      }
      if (data.barrierFree + barrierFree > BARRIER_FREE_SEAT_COUNT) {
        makeAlert(
          "배리어프리",
          barrierFree,
          BARRIER_FREE_SEAT_COUNT - data.barrierFree
        );
        return toNextTab(true);
      }

      const { nowTimestamp: createdAt, limitTimestamp: limitedAt } =
        makeDateObject();

      const ticket: TicketsType = {
        ...userInfo,
        musicalDate,
        price,
        seats,
        status: "waiting",
        createdAt,
        limitedAt,
      };
      await addDoc(collection(db, collectionNames.TICKETS), ticket);
      await update(ref(realtime, musicalDate), {
        normal: increment(normal),
        wheelChair: increment(wheelChair),
        barrierFree: increment(barrierFree),
      });
      setIsLoading(false);
      toNextTab();
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        throw new Error(
          `ResultCheck 티켓 발행 오류 발생 ${error.name} - ${error.message}`
        );
      }
      alert(
        "티켓 발행 오류 발생! 오류가 지속된다면 카톡 채널로 문의 바랍니다!"
      );
    }
  };

  useEffect(() => {
    return () => {
      off(ref(realtime, musicalDate));
    };
  }, [musicalDate]);

  return (
    <div className="p-8 flex flex-col w-full max-w-md gap-6">
      <TabHeader>예매 정보 확인</TabHeader>
      <div className="flex flex-col gap-4">
        <LineItem title="날짜">2022-05-{day}</LineItem>
        <LineItem title="회차">
          {hour === "14" || minute === "30" ? "1회" : "2회"} {hour}:{minute}
        </LineItem>
        <LineItem title="캐스팅">{castingTable[musicalDate]}</LineItem>
        <LineItem title="좌석">
          {normal ? `일반석 ${normal}매` : ""}
          {normal && wheelChair ? `, ` : ""}
          {wheelChair ? `휠체어석 ${wheelChair}매` : ""}
          {(normal || wheelChair) && barrierFree ? `, ` : ""}
          {barrierFree ? `배리어프리석 ${barrierFree}매` : ""}
        </LineItem>
        <LineItem title="할인">
          {price.normal ? `일반 ${price.normal}매` : ""}
          {price.normal && price.local ? `, ` : ""}
          {price.local ? `지역 할인 ${price.local}매` : ""}
          {(price.normal || price.local) && price.other ? `, ` : ""}
          {(price.normal || price.local) && price.other ? <br /> : ""}
          {price.other ? `장애인/국가유공자 할인 ${price.other}매` : ""}
        </LineItem>
        <LineItem title="최종 금액">{totalPrice}원</LineItem>

        <div className="h-px bg-lightGray" />
        <LineItem title="이름">{name}</LineItem>
        <LineItem title="휴대폰 번호">{contact}</LineItem>
        <LineItem title="이메일">{email}</LineItem>
      </div>
      <div className="text-center mt-8">
        <TabButton
          customTitle="예매하기"
          disabled={isLoading}
          onClick={onClickMakeBook}
        />
      </div>
    </div>
  );
};

export default ResultCheck;
