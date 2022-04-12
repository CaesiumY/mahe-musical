import MetaTags from "@/components/common/MetaTags";
import ProcessContainer from "@/components/process/ProcessContainer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const BookProcess: NextPage = () => {
  const { pathname, query, push } = useRouter();

  useEffect(() => {
    !query.musicalDate && push("/");
  }, [query.musicalDate, push]);

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />

      <ProcessContainer />
    </>
  );
};

export default BookProcess;
