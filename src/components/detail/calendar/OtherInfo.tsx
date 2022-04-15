import React, { useEffect, useMemo, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firestore";
import {
  BARRIER_FREE_SEAT_COUNT,
  castingTable,
  collectionNames,
  NORMAL_SEAT_COUNT,
  WHEEL_CHARIR_SEAT_COUNT,
} from "@/constants/constants";
import { MusicalInfoType } from "@/types/types";

interface OtherInfoProps {
  timeId: keyof typeof castingTable;
}

interface MusicalDataType {
  [key: string]: MusicalInfoType;
}

const OtherInfo = ({ timeId }: OtherInfoProps) => {
  const [musicalData, setMusicalData] = useState<MusicalDataType>({});

  useEffect(() => {
    // TODO - 리얼타임 데이터 베이스 변경
    const getMusicalData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, collectionNames.MUSICAL_INFO)
        );

        const nextData: MusicalDataType = {};

        querySnapshot.forEach((doc) => {
          nextData[doc.id] = doc.data() as MusicalInfoType;
        });

        setMusicalData(nextData);
      } catch (error) {
        console.error(error);
      }
    };

    getMusicalData();
  }, []);

  const remainedSeats = useMemo(
    () => ({
      normal: NORMAL_SEAT_COUNT - musicalData[timeId]?.normal,
      wheelChair: WHEEL_CHARIR_SEAT_COUNT - musicalData[timeId]?.wheelChair,
      barrierFree: BARRIER_FREE_SEAT_COUNT - musicalData[timeId]?.barrierFree,
    }),
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
