import React, { useState } from "react";
import { MusicalTimePlan, SeatsType } from "@/types/types";
import {
  BARRIER_FREE_SEAT_COUNT,
  MAX_TICKETS_PER_PERSON,
  NORMAL_SEAT_COUNT,
  NO_BARRIER_FREE_TOTAL_SEAT_COUNT,
  WHEEL_CHARIR_SEAT_COUNT,
} from "@/constants/constants";
import TabButton from "./common/TabButton";
import TabCounter from "./common/TabCounter";
import TabHeader from "./common/TabHeader";

interface SeatTypeSelectProps {
  onChangeSeatCount: (ticketCount: SeatsType) => void;
  data: SeatsType;
  musicalDate: MusicalTimePlan;
}

const SeatTypeSelect = ({
  onChangeSeatCount,
  data,
  musicalDate,
}: SeatTypeSelectProps) => {
  const [normal, setNomal] = useState(0);
  const [wheelChair, setWheelChair] = useState(0);
  const [barrierFree, setBarrierFree] = useState(0);
  const [error, setError] = useState({
    isError: false,
    seat: "",
    remained: 0,
  });

  const onClickTabButton = () => {
    if (normal + wheelChair + barrierFree === 0)
      return alert("1개 이상의 티켓을 넣어주세요!");

    if (
      ["11", "12"].includes(musicalDate.slice(0, 2)) &&
      data.normal + normal > NO_BARRIER_FREE_TOTAL_SEAT_COUNT
    ) {
      const remained = NO_BARRIER_FREE_TOTAL_SEAT_COUNT - data.normal;
      setError((value) => ({
        ...value,
        isError: true,
        seat: "일반석",
        remained,
      }));
      setNomal(remained);
      return;
    }
    if (data.normal + normal > NORMAL_SEAT_COUNT) {
      const remained = NORMAL_SEAT_COUNT - data.normal;
      setError((value) => ({
        ...value,
        isError: true,
        seat: "일반석",
        remained,
      }));
      setNomal(remained);
      return;
    }
    if (data.wheelChair + wheelChair > WHEEL_CHARIR_SEAT_COUNT) {
      const remained = WHEEL_CHARIR_SEAT_COUNT - data.wheelChair;
      setError((value) => ({
        ...value,
        isError: true,
        seat: "휠체어석",
        remained,
      }));
      setWheelChair(remained);
      return;
    }
    if (data.barrierFree + barrierFree > BARRIER_FREE_SEAT_COUNT) {
      const remained = BARRIER_FREE_SEAT_COUNT - data.barrierFree;
      setError((value) => ({
        ...value,
        isError: true,
        seat: "배리어프리석",
        remained,
      }));
      setBarrierFree(remained);
      return;
    }

    setError((value) => ({
      ...value,
      isError: false,
    }));

    onChangeSeatCount({
      normal,
      wheelChair,
      barrierFree,
    });
  };

  const onPlusCount = (value: number) =>
    value === MAX_TICKETS_PER_PERSON ? value : value + 1;
  const onMinusCount = (value: number) => (value === 0 ? value : value - 1);

  const { isError, seat, remained } = error;

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
      {isError && (
        <h4 className="mt-4 text-red-500 text-center">
          {seat}은 현재 {remained}석 남았습니다! <br /> {remained}장 이하로
          수량을 변경해주세요.
        </h4>
      )}

      <div className="text-center mt-14">
        <TabButton onClick={onClickTabButton} />
      </div>
    </div>
  );
};

export default SeatTypeSelect;
