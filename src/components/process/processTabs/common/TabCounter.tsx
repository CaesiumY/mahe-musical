import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface TabCounterProps {
  children: React.ReactNode;
  value: number;
  onClickPlus: () => void;
  onClickMinus: () => void;
}

const TabCounter = ({
  children,
  value,
  onClickPlus,
  onClickMinus,
}: TabCounterProps) => {
  return (
    <div className="flex flex-row justify-between py-4 border-b border-lightGray">
      {children}
      <div className="flex flex-row">
        <button
          className="font-bold text-ivory-bg bg-lightGray rounded-full w-6 h-6"
          onClick={onClickMinus}
        >
          <FaMinus className="m-auto" />
        </button>
        <span className="font-bold w-9 text-center">{value}</span>
        <button
          className="font-bold text-ivory-bg bg-lightGray rounded-full w-6 h-6"
          onClick={onClickPlus}
        >
          <FaPlus className="m-auto" />
        </button>
      </div>
    </div>
  );
};

export default TabCounter;
