import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  ACCOUNT_NUMBER,
  DISCOUNTED_SEAT_PRICE,
  makeContactRegex,
  MATINEE_SEAT_PRICE,
  NOMAL_SEAT_PRICE,
} from "@/constants/constants";
import { TicketsType } from "../../types/types";
import LineItem from "../common/LineItem";
const StatusBanner = dynamic(() => import("./StatusBanner"));

interface CheckResultProps {
  data: TicketsType[];
}

const CheckResult = ({ data }: CheckResultProps) => {
  const [dataIndex, setDataIndex] = useState(0);

  const {
    name,
    contact,
    musicalDate,
    seats,
    seatCode,
    price,
    limitedAt,
    status,
  } = data[dataIndex];

  const totalPrice =
    (price.normal ?? 0) * NOMAL_SEAT_PRICE +
    (price.local ?? 0) * DISCOUNTED_SEAT_PRICE +
    (price.other ?? 0) * DISCOUNTED_SEAT_PRICE +
    (price.matinee ?? 0) * MATINEE_SEAT_PRICE;

  return (
    <div className="bg-pink-bg w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full my-11 py-5 border-ivory-bg border-t-4 border-b-4">
        <article className="flex flex-col justify-center items-center gap-6 h-4/5 w-full max-w-md px-8">
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
            {seatCode ? seatCode.toUpperCase() : "좌석 배정 전"}
          </LineItem>
          <LineItem title="티켓 금액">
            총 {totalPrice.toLocaleString()}원
          </LineItem>
          <LineItem title="입금 계좌번호">{ACCOUNT_NUMBER}</LineItem>
          <LineItem title="취소 가능일">
            {new Date(limitedAt.seconds * 1000 - 1)
              .toLocaleString()
              .slice(0, -3)}
          </LineItem>
          <LineItem title="예매 현황">
            <StatusBanner status={status} />
          </LineItem>
          {data.length > 1 && (
            <div className="flex flex-row w-full mt-4 gap-4 text-white ">
              <button
                className="basis-1/2 border rounded-lg py-2 bg-pink hover:bg-red-400 disabled:bg-lightGray"
                disabled={dataIndex === 0}
                onClick={() => setDataIndex((value) => value - 1)}
              >
                &lt;&lt; 이전 티켓
              </button>
              <button
                className="basis-1/2 border rounded-lg py-2 bg-pink hover:bg-red-400 disabled:bg-lightGray"
                disabled={dataIndex === data.length - 1}
                onClick={() => setDataIndex((value) => value + 1)}
              >
                다음 티켓 &gt;&gt;
              </button>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default CheckResult;
