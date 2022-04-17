import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

import DetailTicketInfo from "./DetailTicketInfo";
const DetailTabController = dynamic(() => import("./DetailTabController"));
const BottomDrawer = dynamic(() => import("./BottomDrawer"));
const RightSticker = dynamic(() => import("./RightSticker"));

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
    <section className="flex flex-row justify-center">
      <div>
        <DetailTicketInfo />
        <DetailTabController />
        <BottomDrawer
          isOpen={isOpen}
          onClose={closeDrawer}
          onOpen={openDrawer}
        />
      </div>

      <RightSticker />
    </section>
  );
};

export default DetailContainer;
