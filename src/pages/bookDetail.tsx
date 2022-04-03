import BookButton from "@/components/common/BookButton";
import MetaTags from "@/components/common/MetaTags";
import DetailCard from "@/components/detail/DetailCard";
import DetailInfo from "@/components/detail/DetailInfo";
import { useRouter } from "next/router";
import React from "react";

const BookDetail = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />
      <DetailCard />
      <DetailInfo />
      <BookButton />
    </>
  );
};

export default BookDetail;
