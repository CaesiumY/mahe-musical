import React from "react";
import BookButton from "../common/BookButton";
import OverlayCurtain from "../common/OverlayCurtain";
import CalendarContainer from "./calendar/CalendarContainer";

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const BottomDrawer = ({ isOpen, onClose, onOpen }: BottomDrawerProps) => {
  return (
    <>
      {isOpen && <OverlayCurtain onClick={onClose} />}
      <section
        className={`fixed bottom-0 left-0 right-0 bg-white p-7 pb-0 z-30 transition-transform rounded-t-xl shadow-[0_-20px_25px_-5px_rgb(0,0,0,0.1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="relative">
          <div className="mb-5">{isOpen && <CalendarContainer />}</div>
        </div>
      </section>
      <div
        className={`lg:hidden text-center bg-white py-4 px-7 w-full sticky bottom-0 z-40 ${
          isOpen
            ? "hidden"
            : "rounded-t-xl shadow-[0_-20px_25px_-5px_rgb(0,0,0,0.1)]"
        }`}
      >
        <BookButton onClick={onOpen} />
      </div>
    </>
  );
};

export default BottomDrawer;
