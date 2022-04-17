import { castingTable, collectionNames } from "@/constants/constants";
import { db } from "@/firebase/firestore";
import { MusicalTimePlan, TableDataType, TicketsType } from "@/types/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import EnhancedTable from "./table/EnhancedTable";

const AdminContainer = () => {
  const [data, setData] = useState<TableDataType[]>([]);
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

        let tempData: TableDataType[] = [];
        querySnapshot.forEach((doc) => {
          const nextValue = { id: doc.id, ...(doc.data() as TicketsType) };
          tempData.push(nextValue);
        });

        setData(tempData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMusicalData();
  }, [selectedDate]);

  const searchAndUpdateData = (id: string, field: string, value: string) => {
    const targetIndex = data.findIndex((ticket) => ticket.id === id);
    const updatedData = { ...data[targetIndex], [field]: value };
    const temp = data.slice();
    temp.splice(targetIndex, 1, updatedData);
    setData(temp);
  };

  return (
    <section className="px-8">
      <div className="flex flex-row gap-4 justify-center flex-wrap mb-8">
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

      {isLoading && (
        <h3 className="font-bold text-center text-4xl mt-8">로딩 중...</h3>
      )}
      {!isLoading && (
        <EnhancedTable
          data={data}
          selectedDate={selectedDate}
          updateData={searchAndUpdateData}
        />
      )}
    </section>
  );
};

export default AdminContainer;
