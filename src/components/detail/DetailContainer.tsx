import React, { useEffect, useState } from "react";
import BottomDrawer from "./BottomDrawer";
import DetailTabController from "./DetailTabController";
import DetailTicketInfo from "./DetailTicketInfo";

const DetailContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    isOpen
      ? document.body.classList.add("isOpen")
      : document.body.classList.remove("isOpen");
  }, [isOpen]);

  return (
    <div>
      <DetailTicketInfo />
      <DetailTabController />
      <BottomDrawer isOpen={isOpen} onClose={closeDrawer} onOpen={openDrawer} />
    </div>
  );
};

export default DetailContainer;
