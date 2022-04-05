import Image from "next/image";
import React from "react";
import IconGroup from "../common/IconGroup";
import poster from "@/images/poster_mini.jpg";

const DetailTicketInfo = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col m-[30px]">
        <div className="max-w-[50%] rounded-sm">
          <Image
            src={poster}
            alt="어쩌면 해피엔딩 포스터"
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <article className="py-6 border-b-[1px] border-b-gray-300">
          <h1 className="font-bold text-xl">
            뮤지컬 어쩌면 해피엔딩 by. ma:he
          </h1>
          <div>
            <p>
              <span>장소</span>
              <span>북아현아트홀</span>
            </p>
            <p>
              <span>공연기간</span>
              <span>2022.05.12 - 2022.05.15</span>
            </p>
            <p>
              <span>공연시간</span>
              <span>110분</span>
            </p>
            <p>
              <span>관람가</span>
              <span>14세 이상 관람가</span>
            </p>
            <p>
              <span>가격</span>
              <span>8,000원 (지역 할인, 장애인/국가유공자 할인)</span>
            </p>
          </div>
        </article>
        <IconGroup color="lightGray" />
      </div>
      <div></div>
    </section>
  );
};

export default DetailTicketInfo;
