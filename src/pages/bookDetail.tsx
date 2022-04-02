import MetaTags from "@/components/common/MetaTags";
import { useRouter } from "next/router";
import React from "react";

const BookDetail = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />
      <div>BookDetail</div>
    </>
  );
};

export default BookDetail;
