import React from "react";
import BookButton from "../common/BookButton";
import CalendarContainer from "./calendar/CalendarContainer";

const RightSticker = () => {
  return (
    <div className="hidden lg:block mt-5 mr-10 border-gray-400 border rounded-xl p-7 bg-white sticky top-24 basis-1/3 self-start max-w-sm">
      <CalendarContainer />
      <div className="mt-5">
        <BookButton />
      </div>
    </div>
  );
};

export default RightSticker;
