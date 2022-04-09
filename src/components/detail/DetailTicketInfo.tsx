import Image from "next/image";
import React from "react";
import IconGroup from "../common/IconGroup";
import poster from "@/images/poster_mini.jpg";
import CalendarContainer from "./calendar/CalendarContainer";
import BookButton from "../common/BookButton";

const ticketInfo = {
  장소: "북아현아트홀",
  공연기간: "2022.05.12 - 2022.05.15",
  공연시간: "110분",
  관람가: "14세 이상 관람가",
  가격: "8,000원",
  할인정보: "(지역 할인, 장애인/국가유공자 할인)",
};

const DetailTicketInfo = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col sm:flex-row m-7 sm:m-10 xl:m-24 sm:gap-5 justify-evenly">
        <div className="max-w-sm sm:mt-7 basis-1/3">
          <Image
            src={poster}
            alt="어쩌면 해피엔딩 포스터"
            objectFit="contain"
            layout="responsive"
            quality={100}
            priority
            placeholder="blur"
          />
        </div>

        <div className="basis-1/3">
          <article className="py-6 border-b-[1px] border-b-gray-300 mb-7">
            <h1 className="font-bold text-xl mb-7">
              뮤지컬 어쩌면 해피엔딩 by. ma:he
            </h1>
            <div className="flex flex-col gap-2 text-sm">
              {Object.entries(ticketInfo).map(([key, value]) => (
                <p className="flex flex-row" key={key}>
                  <span className="font-bold basis-1/3">{key}</span>
                  <span>{value}</span>
                </p>
              ))}
            </div>
          </article>
          <IconGroup color="lightGray" />
        </div>

        <div className="hidden lg:block border-gray-400 border rounded-xl p-7 bg-white sticky top-20 basis-1/3 self-start max-w-sm h-auto">
          <CalendarContainer />
          <div className="mt-5">
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailTicketInfo;
