import { SeatsType } from "@/types/types";
import {
  BARRIER_FREE_SEAT_COUNT,
  castingTable,
  MAX_TICKETS_PER_PERSON,
  NORMAL_SEAT_COUNT,
  WHEEL_CHARIR_SEAT_COUNT,
} from "@/constants/constants";
import React, { useState } from "react";
import TabButton from "./common/TabButton";
import TabCounter from "./common/TabCounter";
import TabHeader from "./common/TabHeader";
import { onValue, ref } from "firebase/database";
import { realtime } from "@/firebase/realtime";

interface SeatTypeSelectProps {
  onChangeSeatCount: (ticketCount: SeatsType) => void;
  musicalDate: keyof typeof castingTable;
}

const SeatTypeSelect = ({
  onChangeSeatCount,
  musicalDate,
}: SeatTypeSelectProps) => {
  const [normal, setNomal] = useState(0);
  const [wheelChair, setWheelChair] = useState(0);
  const [barrierFree, setBarrierFree] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const makeAlert = (seat: string, remained: number) =>
    alert(
      `${seat}은 현재 ${remained}석 남았습니다! ${remained}장 이하로 수량을 변경해주세요.`
    );

  const onClickTabButton = () => {
    if (normal + wheelChair + barrierFree === 0)
      return alert("1개 이상의 티켓을 넣어주세요!");

    try {
      setIsLoading(true);
      const starCountRef = ref(realtime, musicalDate);
      onValue(starCountRef, (snapshot) => {
        const data: SeatsType = snapshot.val();

        if (data.normal + normal > NORMAL_SEAT_COUNT)
          return makeAlert("일반석", NORMAL_SEAT_COUNT - data.normal);
        if (data.wheelChair + wheelChair > WHEEL_CHARIR_SEAT_COUNT)
          return makeAlert(
            "장애인석",
            WHEEL_CHARIR_SEAT_COUNT - data.wheelChair
          );
        if (data.barrierFree + barrierFree > BARRIER_FREE_SEAT_COUNT)
          return makeAlert(
            "배리어프리석",
            BARRIER_FREE_SEAT_COUNT - data.barrierFree
          );
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    onChangeSeatCount({
      normal,
      wheelChair,
      barrierFree,
    });
  };

  const onPlusCount = (value: number) =>
    value === MAX_TICKETS_PER_PERSON ? value : value + 1;
  const onMinusCount = (value: number) => (value === 0 ? value : value - 1);

  return (
    <div className="p-8 flex flex-col w-full max-w-md">
      <TabHeader>좌석 종류 선택</TabHeader>
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
        <TabButton onClick={onClickTabButton} disabled={isLoading} />
      </div>
    </div>
  );
};

export default SeatTypeSelect;
