import React, { useEffect, useMemo, useState } from "react";
import { off, onValue, ref } from "firebase/database";
import {
  BARRIER_FREE_SEAT_COUNT,
  castingTable,
  NORMAL_SEAT_COUNT,
  WHEEL_CHARIR_SEAT_COUNT,
} from "@/constants/constants";
import { SeatsType } from "@/types/types";
import { realtime } from "@/firebase/realtime";

type CastingTableType = keyof typeof castingTable;

type MusicalDataType = {
  [key in CastingTableType]: SeatsType;
};

interface OtherInfoProps {
  timeId: CastingTableType;
}

const OtherInfo = ({ timeId }: OtherInfoProps) => {
  const [musicalData, setMusicalData] = useState<MusicalDataType>();

  useEffect(() => {
    const getMusicalData = async () => {
      try {
        const ticketCountRef = ref(realtime);
        onValue(ticketCountRef, (snapshot) => {
          const data: MusicalDataType = snapshot.val();
          setMusicalData(data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    getMusicalData();

    return () => {
      off(ref(realtime));
    };
  }, []);

  const remainedSeats = useMemo(
    () =>
      musicalData
        ? {
            normal: NORMAL_SEAT_COUNT - musicalData[timeId]?.normal,
            wheelChair:
              WHEEL_CHARIR_SEAT_COUNT - musicalData[timeId]?.wheelChair,
            barrierFree:
              BARRIER_FREE_SEAT_COUNT - musicalData[timeId]?.barrierFree,
          }
        : {},
    [musicalData, timeId]
  );
  const currentCasting = useMemo(() => castingTable[timeId], [timeId]);

  return (
    <article>
      <div className="flex flex-row text-xs mb-2">
        <span className="font-bold basis-1/4">잔여좌석</span>
        <span className="basis-3/4">
          {remainedSeats.normal
            ? `일반석 ${remainedSeats.normal} | 휠체어석 ${remainedSeats.wheelChair} | 배리어프리석(자막) ${remainedSeats.barrierFree}`
            : "불러오는 중..."}
        </span>
      </div>
      <div className="flex flex-row text-xs">
        <span className="font-bold basis-1/4">캐스팅</span>
        <span>{currentCasting}</span>
      </div>
    </article>
  );
};

export default OtherInfo;
