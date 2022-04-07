import React from "react";

interface BookButtonProps {
  onClick?: () => void;
}

const BookButton = ({ onClick }: BookButtonProps) => {
  return (
    <div className="text-center bg-white py-4 sticky bottom-0 rounded-t-xl shadow-[0_-20px_25px_-5px_rgb(0,0,0,0.1)]">
      <button
        className="py-3 px-32 mx-3 hover:bg-red-400 bg-pink transition-colors text-white rounded-xl font-bold"
        onClick={onClick}
      >
        예매하기
      </button>
    </div>
  );
};

export default BookButton;
