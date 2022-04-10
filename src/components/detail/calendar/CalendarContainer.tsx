import React, { useEffect, useMemo, useState } from "react";
import Calendar from "./Calendar";
import ButtonGroup from "./ButtonGroup";
import OtherInfo from "./OtherInfo";
import { castingTable, timeTable } from "@/constants/constants";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date(2022, 4, 12));
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

  return (
    <section>
      <Calendar value={date} onChange={onChangeDate} />
      <ButtonGroup
        selected={selectedTime}
        onChangeRadio={onChangeRadio}
        data={timeTableData}
      />
      <OtherInfo timeId={timeId} />
    </section>
  );
};

export default CalendarContainer;
