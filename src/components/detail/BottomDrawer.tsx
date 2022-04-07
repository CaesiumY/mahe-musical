import React from "react";
import OverlayCurtain from "../common/OverlayCurtain";

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomDrawer = ({ isOpen, onClose }: BottomDrawerProps) => {
  return (
    <>
      {isOpen && <OverlayCurtain onClick={onClose} />}
      <section
        className={`fixed bottom-0 left-0 right-0 bg-red-500 z-30 transition-transform ${
          isOpen ? "" : "translate-y-full"
        }`}
      >
        <div>bottom drawer</div>
      </section>
    </>
  );
};

export default BottomDrawer;
