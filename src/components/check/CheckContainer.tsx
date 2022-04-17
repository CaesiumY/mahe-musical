import React, { useState } from "react";
import dynamic from "next/dynamic";

import { TicketsType } from "../../types/types";
const CheckResult = dynamic(() => import("./CheckResult"));
const CheckLogin = dynamic(() => import("./CheckLogin"));

const CheckContainer = () => {
  const [userData, setUserData] = useState<TicketsType>();

  return (
    <section className="h-screen flex justify-center items-center">
      {userData ? (
        <CheckResult data={userData} />
      ) : (
        <CheckLogin setData={setUserData} />
      )}
    </section>
  );
};

export default CheckContainer;
