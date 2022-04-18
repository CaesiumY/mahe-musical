import Image from "next/image";
import React from "react";

import claire from "@/images/castings/claire.png";
import claire2 from "@/images/castings/claire2.png";
import oliver from "@/images/castings/oliver.png";
import oliver2 from "@/images/castings/oliver2.png";
import james from "@/images/castings/james.png";
import { castingTable } from "@/constants/constants";

const castings = {
  최현우: oliver2,
  표영후: oliver,
  김예준: james,
  이예진: claire2,
  이예빈: claire,
};
// TODO: 캐스팅 테이블 연동
const CastingPlan = () => {
  return (
    <section>
      <div className="flex flex-row flex-wrap-reverse gap-3">
        {Object.entries(castings).map(([key, value]) => (
          <div key={key} className="basis-1/4 sm:basis-1/6">
            <Image src={value} alt={key} quality={100} placeholder="blur" />
          </div>
        ))}
      </div>
      <div className="mt-14 text-navy font-bold max-w-screen-md">
        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/11(수)</span>
          <div className="flex flex-col sm:flex-row gap-3 flex-grow">
            <p className="basis-1/2">저녁 7시 30분</p>
            <p>{castingTable[111930].replace(/,/g, "")}</p>
          </div>
        </div>

        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/12(목)</span>
          <div className="flex flex-col sm:flex-row gap-3 flex-grow">
            <p className="basis-1/2">저녁 7시 30분</p>
            <p>{castingTable[121930].replace(/,/g, "")}</p>
          </div>
        </div>

        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/13(금)</span>
          <div className="flex flex-col flex-grow gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">오후 2시 30분</p>
              <p>{castingTable[131430].replace(/,/g, "")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">저녁 7시 30분</p>
              <p>{castingTable[131930].replace(/,/g, "")}</p>
            </div>
          </div>
        </div>

        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/14(토)</span>
          <div className="flex flex-col flex-grow gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">오후 2시 30분</p>
              <p>{castingTable[141430].replace(/,/g, "")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">저녁 7시 30분</p>
              <p>{castingTable[141930].replace(/,/g, "")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastingPlan;
