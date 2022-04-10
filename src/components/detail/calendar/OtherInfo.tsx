import React, { useEffect, useMemo, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firestore";
import {
  castingTable,
  collectionNames,
  SEAT_COUNT,
} from "@/constants/constants";
import { MusicalInfoType } from "../types/types";

interface OtherInfoProps {
  timeId: keyof typeof castingTable;
}

interface MusicalDataType {
  [key: string]: MusicalInfoType;
}

const OtherInfo = ({ timeId }: OtherInfoProps) => {
  const musicalInfoRef = useRef(collection(db, collectionNames.MUSICAL_INFO));
  const [musicalData, setMusicalData] = useState<MusicalDataType>({});

  useEffect(() => {
    const getMusicalData = async () => {
      const querySnapshot = await getDocs(musicalInfoRef.current);

      const nextData: MusicalDataType = {};

      querySnapshot.forEach((doc) => {
        nextData[doc.id] = doc.data() as MusicalInfoType;
      });

      setMusicalData(nextData);
    };

    getMusicalData();
  }, []);

  const remainedSeats = useMemo(
    () => SEAT_COUNT - musicalData[timeId]?.customers,
    [musicalData, timeId]
  );
  const currentCasting = useMemo(() => castingTable[timeId], [timeId]);

  return (
    <article>
      <div className="flex flex-row text-xs mb-2">
        <span className="font-bold basis-1/4">잔여좌석</span>
        <span>{remainedSeats || "불러오는 중..."}</span>
      </div>
      <div className="flex flex-row text-xs">
        <span className="font-bold basis-1/4">캐스팅</span>
        <span>{currentCasting}</span>
      </div>
    </article>
  );
};

export default OtherInfo;
