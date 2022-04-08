import CheckContainer from "@/components/check/CheckContainer";
import MetaTags from "@/components/common/MetaTags";
import { useRouter } from "next/router";
import React from "react";

const BookCheck = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="예매 확인" pathname={pathname} />
      <CheckContainer />
    </>
  );
};

export default BookCheck;
