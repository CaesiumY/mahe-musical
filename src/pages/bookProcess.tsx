import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import MetaTags from "@/components/common/MetaTags";
import ToMain from "@/components/process/ToMain";
import { castingTable } from "@/constants/constants";
import { NextPage } from "next";
const ProcessContainer = dynamic(
  () => import("@/components/process/ProcessContainer")
);

const BookProcess: NextPage = () => {
  const { pathname, query } = useRouter();

  const isValidQuery =
    typeof query.musicalDate === "string" &&
    query.musicalDate &&
    Object.keys(castingTable).includes(query.musicalDate);

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />

      {isValidQuery && <ProcessContainer />}
      {!isValidQuery && <ToMain />}
    </>
  );
};

export default BookProcess;
