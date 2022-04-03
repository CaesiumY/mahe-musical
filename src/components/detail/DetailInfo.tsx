import Image from "next/image";
import React, { useState } from "react";
import seatTable from "@/images/좌석배치도.png";
import discountTable from "@/images/discount_table.png";
import introduction from "@/images/introduction.png";
import coronaRule from "@/images/corona_rule.png";

const infoTabs = {
  introduction: {
    id: 0,
    image: introduction,
    alt: "공연 소개",
  },
  seatTable: {
    id: 1,
    image: seatTable,
    alt: "좌석 배치도",
  },
  discountTable: {
    id: 2,
    image: discountTable,
    alt: "할인 정보",
  },
  coronaRule: {
    id: 3,
    image: coronaRule,
    alt: "방역 수칙",
  },
};

const DetailInfo = () => {
  const [currentTab, setCurrentTab] =
    useState<keyof typeof infoTabs>("introduction");

  return (
    <section className="">
      <div className="max-w-xl mx-auto my-5 sm:my-10">
        <h2 className="text-2xl font-bold text-gray-700 mx-4"># 상세보기</h2>
        <div className="h-px bg-gray-700 my-2" />
        <div className="flex flex-row justify-evenly">
          {Object.entries(infoTabs).map(([key, value]) => (
            <button
              key={key}
              className={`hover:underline text-lg sm:text-xl ${
                currentTab === key && "underline"
              }`}
              onClick={() => setCurrentTab(key as keyof typeof infoTabs)}
            >
              {value.alt}
            </button>
          ))}
        </div>
      </div>
      <article className="text-center mt-8">
        <Image
          src={infoTabs[currentTab].image}
          alt={infoTabs[currentTab].alt}
        />
      </article>
    </section>
  );
};

export default DetailInfo;
