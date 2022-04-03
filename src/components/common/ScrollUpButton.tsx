import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollUpButton = () => {
  const onScrollToTop = () => scrollTo(0, 0);

  return (
    <button className="fixed right-2 bottom-16 z-10" onClick={onScrollToTop}>
      <IoIosArrowUp size="3rem" />
    </button>
  );
};

export default ScrollUpButton;
