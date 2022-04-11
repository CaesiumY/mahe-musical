import React, { useState } from "react";
import CheckLogin from "./CheckLogin";
import CheckResult from "./CheckResult";
import { TicketsType } from "./types/types";

const CheckContainer = () => {
  const [userData, setUserData] = useState<TicketsType>();

  return (
    <section className="h-screen flex justify-center items-center">
      {userData ? <CheckResult /> : <CheckLogin setData={setUserData} />}
    </section>
  );
};

export default CheckContainer;
