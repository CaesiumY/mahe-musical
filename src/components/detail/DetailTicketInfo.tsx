import Image from "next/image";
import React from "react";
import IconGroup from "../common/IconGroup";
import poster from "@/images/poster_mini.jpg";

const DetailTicketInfo = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col sm:flex-row m-[30px] sm:m-24 sm:gap-5 justify-evenly">
        <div className="max-w-sm sm:mt-7 basis-1/3">
          <Image
            src={poster}
            alt="어쩌면 해피엔딩 포스터"
            objectFit="contain"
            layout="responsive"
            quality={100}
          />
        </div>
        <div>
          <article className="py-6 border-b-[1px] border-b-gray-300 mb-7">
            <h1 className="font-bold text-xl mb-7">
              뮤지컬 어쩌면 해피엔딩 by. ma:he
            </h1>
            <div className="flex flex-col gap-2 text-sm">
              <p className="flex flex-row">
                <span className="font-bold basis-1/3">장소</span>
                <span>북아현아트홀</span>
              </p>
              <p className="flex flex-row">
                <span className="font-bold basis-1/3">공연기간</span>
                <span>2022.05.12 - 2022.05.15</span>
              </p>
              <p className="flex flex-row">
                <span className="font-bold basis-1/3">공연시간</span>
                <span>110분</span>
              </p>
              <p className="flex flex-row">
                <span className="font-bold basis-1/3">관람가</span>
                <span>14세 이상 관람가</span>
              </p>
              <p className="flex flex-row">
                <span className="font-bold basis-1/3">가격</span>
                <span>
                  8,000원 <br />
                  (지역 할인, 장애인/국가유공자 할인)
                </span>
              </p>
            </div>
          </article>
          <IconGroup color="lightGray" />
        </div>
      </div>
    </section>
  );
};

export default DetailTicketInfo;
