import React, { useState } from "react";
import BookButton from "../common/BookButton";
import BottomDrawer from "./BottomDrawer";
import DetailTabController from "./DetailTabController";
import DetailTicketInfo from "./DetailTicketInfo";

const DetailContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const onClickMakeBook = () => {
    if (!isOpen) return openDrawer();

    // TODO - 예약 로직 추가
    console.log("make book");
    closeDrawer();
  };

  return (
    <>
      <DetailTicketInfo />
      <DetailTabController />
      <BottomDrawer isOpen={isOpen} onClose={closeDrawer} />

      <div
        className={`text-center bg-white py-4 sticky bottom-0 z-40 ${
          !isOpen && "rounded-t-xl shadow-[0_-20px_25px_-5px_rgb(0,0,0,0.1)]"
        }`}
      >
        <BookButton onClick={onClickMakeBook} />
      </div>
    </>
  );
};

export default DetailContainer;