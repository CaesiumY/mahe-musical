import React, { useMemo, useState } from "react";
import Calendar from "./Calendar";
import ButtonGroup from "./ButtonGroup";
import OtherInfo from "./OtherInfo";
import { castingTable, timeTable } from "@/constants/constants";
import BookButton from "@/components/common/BookButton";
import { useRouter } from "next/router";

const CalendarContainer = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date(2022, 4, 11));
  const [selectedTime, setSelectedTime] = useState(
    timeTable[date.getDate().toString()][0]
  );

  const onChangeDate: React.Dispatch<React.SetStateAction<Date>> = (e) => {
    const selectedDate = e as Date;
    const day = selectedDate.getDate().toString();
    if (!timeTable[day].includes(selectedTime))
      setSelectedTime(timeTable[day][0]);
    setDate(e);
  };

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedTime(e.target.value);

  const timeTableData = useMemo(() => timeTable[date.getDate()], [date]);

  const timeId = useMemo(
    () =>
      (date.getDate().toString() + selectedTime) as keyof typeof castingTable,
    [date, selectedTime]
  );

  const onClickBookButton = () =>
    router.push({
      pathname: "/bookProcess",
      query: {
        musicalDate: timeId,
      },
    });

  return (
    <section>
      <Calendar value={date} onChange={onChangeDate} />
      <ButtonGroup
        selected={selectedTime}
        onChangeRadio={onChangeRadio}
        data={timeTableData}
      />
      <OtherInfo timeId={timeId} />

      <div className="mt-5">
        <BookButton onClick={onClickBookButton} />
      </div>
    </section>
  );
};

export default CalendarContainer;
