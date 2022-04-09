import MetaTags from "@/components/common/MetaTags";
import ScrollUpButton from "@/components/common/ScrollUpButton";
import DetailContainer from "@/components/detail/DetailContainer";
import { useRouter } from "next/router";
import React from "react";

const BookDetail = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />
      <ScrollUpButton />

      <DetailContainer />
    </>
  );
};

export default BookDetail;
