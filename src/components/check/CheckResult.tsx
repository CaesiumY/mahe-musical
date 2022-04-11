import {
  ACCOUNT_NUMBER,
  DISCOUNTED_SEAT_PRICE,
  makeContactRegex,
  NOMAL_SEAT_PRICE,
} from "@/constants/constants";
import React from "react";
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
    (price.local ?? 0) * NOMAL_SEAT_PRICE +
    (price.local ?? 0) * DISCOUNTED_SEAT_PRICE +
    (price.local ?? 0) * DISCOUNTED_SEAT_PRICE;

  return (
    <div className="bg-pink-bg w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full my-11 py-5 border-ivory-bg border-t-4 border-b-4">
        <article className="flex flex-col justify-center items-center gap-6 h-4/5 w-full max-w-md">
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">예매자명</span>
            <span className="basis-1/2 font-normal">{name}</span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">휴대폰 번호</span>
            <span className="basis-1/2 font-normal">
              {makeContactRegex(contact)}
            </span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">이용일</span>
            <span className="basis-1/2 font-normal">
              {`2022-05-${musicalDate.slice(0, 2)} ${musicalDate.slice(
                2,
                4
              )}:${musicalDate.slice(-2)}`}
            </span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">매수</span>
            <span className="basis-1/2 font-normal">
              일반 {seats.normal ?? 0}매, 휠체어 {seats.wheelChair ?? 0}매,
              배리어프리(자막) {seats.barrierFree ?? 0}매
            </span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">좌석</span>
            <span className="basis-1/2 font-normal">
              {seatCode?.toUpperCase() ?? "미정"}
            </span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">티켓 금액</span>
            <span className="basis-1/2 font-normal">총 {totalPrice}원</span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">입금 계좌번호</span>
            <span className="basis-1/2 font-normal">{ACCOUNT_NUMBER}</span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">취소 가능일</span>
            <span className="basis-1/2 font-normal">
              {new Date(limitedAt.seconds * 1000 - 1).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-row w-full px-8">
            <span className="basis-1/2 font-semibold">예매 현황</span>
            <StatusBanner status={status} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default CheckResult;
