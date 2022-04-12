import React from "react";

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
        <button onClick={onClickMinus}>-</button>
        <span>{value}</span>
        <button onClick={onClickPlus}>+</button>
      </div>
    </div>
  );
};

export default TabCounter;
