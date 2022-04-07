import React, { useState } from "react";
import BookButton from "../common/BookButton";
import BottomDrawer from "./BottomDrawer";
import DetailTabController from "./DetailTabController";
import DetailTicketInfo from "./DetailTicketInfo";

const DetailContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <DetailTicketInfo />
      <DetailTabController />
      <BottomDrawer isOpen={isOpen} onClose={closeDrawer} />
      <BookButton onClick={openDrawer} />
    </>
  );
};

export default DetailContainer;
