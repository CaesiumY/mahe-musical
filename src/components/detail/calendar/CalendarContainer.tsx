import React, { useEffect, useMemo, useState } from "react";
import Calendar from "./Calendar";
import ButtonGroup from "./ButtonGroup";
import OtherInfo from "./OtherInfo";
import { timeTable } from "@/constants/constants";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date(2022, 4, 12));

  const [selectedTime, setSelectedTime] = useState("1400");

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedTime(e.target.value);

  const timeTableData = useMemo(() => timeTable[date.getDate()], [date]);

  useEffect(() => {
    const combined = date.getDate().toString() + selectedTime;

    console.log("combined :>> ", combined);
  }, [date, selectedTime]);

  return (
    <section>
      <Calendar value={date} onChange={setDate} />
      <ButtonGroup
        selected={selectedTime}
        onChangeRadio={onChangeRadio}
        data={timeTableData}
      />
      <OtherInfo timeId={"141400"} />
    </section>
  );
};

export default CalendarContainer;
