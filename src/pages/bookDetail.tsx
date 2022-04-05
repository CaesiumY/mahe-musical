import Header from "@/components/common/Header";
import MetaTags from "@/components/common/MetaTags";
import ScrollUpButton from "@/components/common/ScrollUpButton";
import DetailTicketInfo from "@/components/detail/DetailTicketInfo";
import { useRouter } from "next/router";
import React from "react";

const BookDetail = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />
      <Header color="navy" />
      <ScrollUpButton />
      <DetailTicketInfo />
    </>
  );
};

export default BookDetail;
