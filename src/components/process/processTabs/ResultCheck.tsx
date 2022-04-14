import {
  castingTable,
  collectionNames,
  DISCOUNTED_SEAT_PRICE,
  LIMIT_TICKET_DATE,
  NOMAL_SEAT_PRICE,
} from "@/constants/constants";
import { db } from "@/firebase/firestore";
import { PriceType, SeatsType, TicketsType, UserInfoType } from "@/types/types";
import {
  addDoc,
  collection,
  doc,
  increment,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useMemo, useState } from "react";
import TabButton from "./common/TabButton";
import TabHeader from "./common/TabHeader";

interface LineItemProps {
  title: string;
  children: React.ReactNode;
}

const LineItem = ({ title, children }: LineItemProps) => {
  return (
    <div className="flex flex-row w-full">
      <span className="basis-1/4 font-semibold">{title}</span>
      <span className="basis-3/4 font-normal">{children}</span>
    </div>
  );
};

interface ResultCheckProps {
  toNextTab: () => void;
  bookResult: {
    musicalDate: keyof typeof castingTable;
    seats: SeatsType;
    price: PriceType;
    userInfo: UserInfoType;
  };
}

const ResultCheck = ({ toNextTab, bookResult }: ResultCheckProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { musicalDate, price, seats, userInfo } = bookResult;
  const { normal, wheelChair, barrierFree } = seats;
  const { name, contact, email } = userInfo;

  const totalPrice = useMemo(
    () =>
      price.normal * NOMAL_SEAT_PRICE +
      (price.local + price.other) * DISCOUNTED_SEAT_PRICE,
    [price]
  );

  const day = musicalDate.slice(0, 2);
  const hour = musicalDate.slice(2, 4);
  const minute = musicalDate.slice(-2);

  const onClickMakeBook = async () => {
    try {
      setIsLoading(true);
      const today = new Date().toLocaleDateString();
      const ticket: TicketsType = {
        ...userInfo,
        musicalDate,
        price,
        seats,
        status: "waiting",
        createdAt: new Timestamp(Math.floor(new Date().getTime() / 1000), 0),
        limitedAt: new Timestamp(
          Math.floor(
            (new Date(today).setDate(
              new Date(today).getDate() + LIMIT_TICKET_DATE
            ) -
              1) /
              1000
          ),
          0
        ),
      };
      const docRef = await addDoc(
        collection(db, collectionNames.TICKETS),
        ticket
      );
      const musicalRef = await updateDoc(
        doc(db, collectionNames.MUSICAL_INFO, musicalDate),
        {
          normal: increment(seats.normal),
          wheelChair: increment(seats.wheelChair),
          barrierFree: increment(seats.barrierFree),
        }
      );
    } catch (error) {
    } finally {
      setIsLoading(false);
      toNextTab();
    }
  };

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
