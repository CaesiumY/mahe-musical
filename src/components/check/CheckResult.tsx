import {
  ACCOUNT_NUMBER,
  DISCOUNTED_SEAT_PRICE,
  makeContactRegex,
  NOMAL_SEAT_PRICE,
} from "@/constants/constants";
import React from "react";
import LineItem from "../common/LineItem";
import StatusBanner from "./StatusBanner";
import { TicketsType } from "./types/types";

interface CheckResultProps {
  data: TicketsType;
}

const CheckResult = ({ data }: CheckResultProps) => {
  const {
    name,
    contact,
    musicalDate,
    seats,
    seatCode,
    price,
    limitedAt,
    status,
  } = data;

  const totalPrice =
    (price.normal ?? 0) * NOMAL_SEAT_PRICE +
    (price.local ?? 0) * DISCOUNTED_SEAT_PRICE +
    (price.other ?? 0) * DISCOUNTED_SEAT_PRICE;

  return (
    <div className="bg-pink-bg w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full my-11 py-5 border-ivory-bg border-t-4 border-b-4">
        <article className="flex flex-col justify-center items-center gap-6 h-4/5 w-full max-w-md">
          <LineItem title="예매자명">{name}</LineItem>
          <LineItem title="휴대폰 번호">{makeContactRegex(contact)}</LineItem>
          <LineItem title="이용일">{`2022-05-${musicalDate.slice(
            0,
            2
          )} ${musicalDate.slice(2, 4)}:${musicalDate.slice(-2)}`}</LineItem>
          <LineItem title="매수">
            일반 {seats.normal ?? 0}매, 휠체어 {seats.wheelChair ?? 0}매,
            배리어프리(자막) {seats.barrierFree ?? 0}매
          </LineItem>
          <LineItem title="좌석">
            {seatCode?.map((s) => s.toUpperCase()) ?? "미정"}
          </LineItem>
          <LineItem title="티켓 금액">총 {totalPrice}원</LineItem>
          <LineItem title="입금 계좌번호">{ACCOUNT_NUMBER}</LineItem>
          <LineItem title="취소 가능일">
            {new Date(limitedAt.seconds * 1000 - 1).toLocaleString()}
          </LineItem>
          <LineItem title="예매 현황">
            <StatusBanner status={status} />
          </LineItem>
        </article>
      </div>
    </div>
  );
};

export default CheckResult;
