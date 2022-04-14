import {
  castingTable,
  DISCOUNTED_SEAT_PRICE,
  NOMAL_SEAT_PRICE,
} from "@/constants/constants";
import { PriceType, SeatsType, UserInfoType } from "@/types/types";
import React, { useMemo } from "react";
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
  onClickTabButton: () => void;
  bookResult: {
    musicalDate: keyof typeof castingTable;
    seats: SeatsType;
    price: PriceType;
    userInfo: UserInfoType;
  };
}

const ResultCheck = ({ onClickTabButton, bookResult }: ResultCheckProps) => {
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
        <TabButton customTitle="예매하기" onClick={onClickTabButton} />
      </div>
    </div>
  );
};

export default ResultCheck;
