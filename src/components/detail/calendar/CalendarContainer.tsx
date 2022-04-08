import React from "react";
import Calendar from "./Calendar";
import ButtonGroup from "./ButtonGroup";
import OtherInfo from "./OtherInfo";

const CalendarContainer = () => {
  return (
    <section>
      <div>
        <Calendar />
        <ButtonGroup />
      </div>

      <OtherInfo />
    </section>
  );
};

export default CalendarContainer;
