import BookButton from "@/components/common/BookButton";
import MetaTags from "@/components/common/MetaTags";
import ScrollUpButton from "@/components/common/ScrollUpButton";
import DetailTabController from "@/components/detail/DetailTabController";
import DetailTicketInfo from "@/components/detail/DetailTicketInfo";
import { useRouter } from "next/router";
import React from "react";

const BookDetail = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />
      <ScrollUpButton />
      <DetailTicketInfo />
      <DetailTabController />
      <BookButton />
    </>
  );
};

export default BookDetail;
