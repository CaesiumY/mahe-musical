import React from "react";
import BookButton from "../common/BookButton";
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
        className={`fixed bottom-0 left-0 right-0 bg-white p-7 pb-20 z-30 transition-transform rounded-t-xl shadow-[0_-20px_25px_-5px_rgb(0,0,0,0.1)] ${
          isOpen ? "" : "translate-y-full"
        }`}
      >
        <div className="relative">
          <div className="mb-5">bottom drawer</div>
        </div>
      </section>
    </>
  );
};

export default BottomDrawer;