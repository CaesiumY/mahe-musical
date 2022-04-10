import React from "react";
import CalendarContainer from "./calendar/CalendarContainer";

const RightSticker = () => {
  return (
    <div className="hidden lg:block mt-5 mr-10 border-gray-400 border rounded-xl p-7 bg-white sticky top-24 basis-1/3 self-start max-w-sm">
      <CalendarContainer />
    </div>
  );
};

export default RightSticker;
