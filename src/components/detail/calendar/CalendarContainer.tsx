import React, { useState } from "react";
import Calendar from "./Calendar";
import ButtonGroup from "./ButtonGroup";
import OtherInfo from "./OtherInfo";

const CalendarContainer = () => {
  const [selectedTime, setSelectedTime] = useState(1400);

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedTime(parseInt(e.target.value, 10));

  return (
    <section>
      <Calendar />
      <ButtonGroup selected={selectedTime} onChangeRadio={onChangeRadio} />
      <OtherInfo timeId={"141400"} />
    </section>
  );
};

export default CalendarContainer;
