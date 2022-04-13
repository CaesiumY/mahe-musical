import React from "react";

interface TabHeaderProps {
  children: React.ReactNode;
}

const TabHeader = ({ children }: TabHeaderProps) => {
  return (
    <h2 className="font-bold text-xl border-b-2 border-lightGray pb-4">
      {children}
    </h2>
  );
};

export default TabHeader;
