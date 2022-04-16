import MetaTags from "@/components/common/MetaTags";
import ProcessContainer from "@/components/process/ProcessContainer";
import ToMain from "@/components/process/ToMain";
import { castingTable } from "@/constants/constants";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

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
