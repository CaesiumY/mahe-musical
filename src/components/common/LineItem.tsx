import React from "react";

interface LineItemProps {
  title: string;
  children: React.ReactNode;
}

const LineItem = ({ title, children }: LineItemProps) => {
  return (
    <div className="flex flex-row w-full px-8">
      <span className="basis-1/2 font-semibold">{title}</span>
      <span className="basis-1/2 font-normal">{children}</span>
    </div>
  );
};

export default LineItem;
