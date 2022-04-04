import Link from "next/link";
import React from "react";

const BookButton = () => {
  return (
    <div className="text-center bg-white p-5 sticky bottom-0">
      <Link href="/">
        <a className="py-3 px-20 bg-red-400 hover:bg-pink transition-colors text-white rounded-lg text-xl">
          예매하기
        </a>
      </Link>
    </div>
  );
};

export default BookButton;
