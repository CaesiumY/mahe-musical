import React from "react";

interface TabHeaderProps {
  title: string;
}

const TabHeader = ({ title }: TabHeaderProps) => {
  return (
    <h2 className="font-bold text-xl border-b-2 border-lightGray pb-4">
      {title}
    </h2>
  );
};

export default TabHeader;
