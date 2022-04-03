import Link from "next/link";
import React from "react";

const BookButton = () => {
  return (
    <div>
      <Link href="/">
        <a>예매하기</a>
      </Link>
    </div>
  );
};

export default BookButton;
