import BookButton from "@/components/common/BookButton";
import MetaTags from "@/components/common/MetaTags";
import ScrollUpButton from "@/components/common/ScrollUpButton";
import CalendarContainer from "@/components/detail/calendar/CalendarContainer";
import DetailContainer from "@/components/detail/DetailContainer";
import { useRouter } from "next/router";
import React from "react";

const BookDetail = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="예매 상세" pathname={pathname} />
      <ScrollUpButton />

      <section className="flex flex-row justify-center">
        <DetailContainer />

        <div className="hidden lg:block mt-5 mr-10 border-gray-400 border rounded-xl p-7 bg-white sticky top-24 basis-1/3 self-start max-w-sm">
          <CalendarContainer />
          <div className="mt-5">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetail;
