import React, { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import style from "./calendarStyle.module.scss";

const Calendar = () => {
  const [date, setDate] = useState(new Date(2022, 4, 12));

  useEffect(() => {
    console.log("date", date.getDate());
  }, [date]);

  return (
    <ReactCalendar
      calendarType="US"
      locale="ko"
      formatDay={(_, date) => `${date.getDate()}`}
      navigationLabel={({ date }) =>
        `${date.getFullYear()}.0${date.getMonth() + 1}`
      }
      minDate={new Date(2022, 4, 12)}
      maxDate={new Date(2022, 4, 15)}
      showNeighboringMonth={false}
      className={style.calendar}
      onChange={setDate}
      value={date}
    />
  );
};

export default Calendar;
