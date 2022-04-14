import React from "react";

interface TabButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const TabButton = ({ onClick, disabled = false }: TabButtonProps) => {
  return (
    <button
      className="text-dark font-bold rounded-lg bg-mint hover:bg-mint-bg transition-colors py-3 px-16"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? `불러오는 중...` : `다음으로`}
    </button>
  );
};

export default TabButton;
