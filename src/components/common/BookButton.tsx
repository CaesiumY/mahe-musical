import React from "react";

interface BookButtonProps {
  onClick?: () => void;
}

const BookButton = ({ onClick }: BookButtonProps) => {
  return (
    <button
      className="py-3 px-32 mx-3 hover:bg-red-400 bg-pink transition-colors text-white rounded-xl font-bold"
      onClick={onClick}
    >
      예매하기
    </button>
  );
};

export default BookButton;
