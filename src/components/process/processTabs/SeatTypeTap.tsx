import { MAX_TICKETS_PER_PERSON } from "@/constants/constants";
import React, { useState } from "react";
import { TicketCountType } from "../types/types";
import TabButton from "./common/TabButton";
import TabCounter from "./common/TabCounter";
import TabHeader from "./common/TabHeader";

interface SeatTypeTapProps {
  onChangeTicketCount: (ticketCount: TicketCountType) => void;
}

const SeatTypeTap = ({ onChangeTicketCount }: SeatTypeTapProps) => {
  const [normal, setNomal] = useState(0);
  const [wheelChair, setWheelChair] = useState(0);
  const [barrierFree, setBarrierFree] = useState(0);

  const onClickTabButton = () => {
    const totalTicketCount = {
      normal,
      wheelChair,
      barrierFree,
    };

    onChangeTicketCount(totalTicketCount);
    // TODO - 현재 탭 변경
  };

  const onPlusCount = (value: number) =>
    value === MAX_TICKETS_PER_PERSON ? value : value + 1;
  const onMinusCount = (value: number) => (value === 0 ? value : value - 1);

  return (
    <div className="p-8 flex flex-col w-full max-w-md">
      <TabHeader title="좌석 종류 선택" />
      <TabCounter
        value={normal}
        onClickPlus={() => setNomal(onPlusCount)}
        onClickMinus={() => setNomal(onMinusCount)}
      >
        <p>일반석</p>
      </TabCounter>
      <TabCounter
        value={wheelChair}
        onClickPlus={() => setWheelChair(onPlusCount)}
        onClickMinus={() => setWheelChair(onMinusCount)}
      >
        <p>휠체어석</p>
      </TabCounter>
      <TabCounter
        value={barrierFree}
        onClickPlus={() => setBarrierFree(onPlusCount)}
        onClickMinus={() => setBarrierFree(onMinusCount)}
      >
        <p>배리어프리석</p>
      </TabCounter>

      <div className="text-center mt-14">
        <TabButton onClick={onClickTabButton} />
      </div>
    </div>
  );
};

export default SeatTypeTap;
