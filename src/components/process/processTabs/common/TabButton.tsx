import React from "react";

interface TabButtonProps {
  onClick?: () => void;
}

const TabButton = ({ onClick }: TabButtonProps) => {
  return (
    <button
      className="text-dark font-bold rounded-lg bg-mint hover:bg-mint-bg transition-colors py-3 px-16"
      onClick={onClick}
    >
      다음으로
    </button>
  );
};

export default TabButton;
