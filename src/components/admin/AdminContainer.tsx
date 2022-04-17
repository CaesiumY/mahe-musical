import { castingTable, collectionNames } from "@/constants/constants";
import { db } from "@/firebase/firestore";
import { TicketsType } from "@/types/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import EnhancedTable from "./table/EnhancedTable";

type MusicalTimePlan = keyof typeof castingTable;

const AdminContainer = () => {
  const [data, setData] = useState<TicketsType[]>([]);
  const [selectedDate, setSelectedDate] = useState<MusicalTimePlan>("111930");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMusicalData = async () => {
      try {
        setIsLoading(true);

        const ticketsRef = collection(db, collectionNames.TICKETS);
        const userQuery = query(
          ticketsRef,
          where("musicalDate", "==", selectedDate)
        );
        const querySnapshot = await getDocs(userQuery);

        setIsLoading(false);

        if (querySnapshot.empty) return alert("데이터가 없습니다");

        let tempData: TicketsType[] = [];
        querySnapshot.forEach((doc) => {
          const nextValue = doc.data() as TicketsType;
          tempData.push(nextValue);
        });

        setData(tempData);
        // console.log("tempData", tempData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMusicalData();
  }, [selectedDate]);

  const day = selectedDate.slice(0, 2);
  const hour = selectedDate.slice(2, 4);
  const min = selectedDate.slice(-2);

  return (
    <section className="px-8">
      <div className="flex flex-row gap-4 justify-center">
        {Object.keys(castingTable).map((key) => (
          <button
            key={key}
            className="p-4 bg-mint hover:bg-mint-bg active:bg-mint-bg rounded-lg"
            onClick={() => setSelectedDate(key as MusicalTimePlan)}
          >
            {key}
          </button>
        ))}
      </div>
      <h1 className="font-bold text-center text-4xl my-4">
        5월 {day}일 {hour}시 {min}분 공연 티켓 데이터
      </h1>
      {isLoading && (
        <h3 className="font-bold text-center text-4xl mt-8">로딩 중...</h3>
      )}
      {!isLoading && <EnhancedTable data={data} />}
    </section>
  );
};

export default AdminContainer;
