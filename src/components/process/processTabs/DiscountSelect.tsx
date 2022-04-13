import { PriceType } from "@/types/types";
import { DISCOUNTED_SEAT_PRICE, NOMAL_SEAT_PRICE } from "@/constants/constants";
import React, { useState } from "react";
import TabButton from "./common/TabButton";
import TabCounter from "./common/TabCounter";
import TabHeader from "./common/TabHeader";

interface DiscountSelectProps {
  totalTickets: number;
  onChangePriceCount: (payload: PriceType) => void;
}

const DiscountSelect = ({
  totalTickets,
  onChangePriceCount,
}: DiscountSelectProps) => {
  const [normal, setNomal] = useState(0);
  const [local, setLocal] = useState(0);
  const [other, setOther] = useState(0);

  const onClickTabButton = () => {
    const totalSeatsCount: PriceType = {
      normal,
      local,
      other,
    };

    // TODO - 현재 탭 변경
    onChangePriceCount(totalSeatsCount);
  };

  const onPlusCount = (value: number) =>
    normal + local + other === totalTickets ? value : value + 1;
  const onMinusCount = (value: number) => (value === 0 ? value : value - 1);

  const totalPrice =
    normal * NOMAL_SEAT_PRICE + (local + other) * DISCOUNTED_SEAT_PRICE;

  return (
    <div className="p-8 flex flex-col w-full max-w-md">
      <TabHeader>
        <p className="flex flex-row">
          <span>할인 선택</span>
          <span className="font-normal ml-7">총 {totalTickets}매</span>
          <span className="font-normal ml-auto">{totalPrice}원</span>
        </p>
      </TabHeader>
      <TabCounter
        value={normal}
        onClickPlus={() => setNomal(onPlusCount)}
        onClickMinus={() => setNomal(onMinusCount)}
      >
        <div className="flex flex-col gap-3">
          <p>일반</p>
          <p>{NOMAL_SEAT_PRICE}원</p>
        </div>
      </TabCounter>
      <TabCounter
        value={local}
        onClickPlus={() => setLocal(onPlusCount)}
        onClickMinus={() => setLocal(onMinusCount)}
      >
        <div className="flex flex-col gap-3">
          <p>지역 할인</p>
          <p>{DISCOUNTED_SEAT_PRICE}원</p>
        </div>
      </TabCounter>
      <TabCounter
        value={other}
        onClickPlus={() => setOther(onPlusCount)}
        onClickMinus={() => setOther(onMinusCount)}
      >
        <div className="flex flex-col gap-3">
          <p>
            장애인/국가유공자 할인
            <br />
            (동반 1인 가능)
          </p>
          <p>{DISCOUNTED_SEAT_PRICE}원</p>
        </div>
      </TabCounter>

      <div className="text-center mt-14">
        <TabButton onClick={onClickTabButton} />
      </div>
    </div>
  );
};

export default DiscountSelect;