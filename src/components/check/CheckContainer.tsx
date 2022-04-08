import React from "react";
import CheckResult from "./CheckResult";

const CheckContainer = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="bg-pink-bg h-2/3 w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6 h-4/5 w-full border-ivory-bg border-t-4 border-b-4">
          <CheckResult />
        </div>
      </div>
    </section>
  );
};

export default CheckContainer;
