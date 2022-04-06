import Image from "next/image";
import React from "react";

import claire from "@/images/castings/claire.png";
import claire2 from "@/images/castings/claire2.png";
import oliver from "@/images/castings/oliver.png";
import oliver2 from "@/images/castings/oliver2.png";
import james from "@/images/castings/james.png";

const castings = {
  이예빈: claire,
  이예진: claire2,
  표영후: oliver,
  최현우: oliver2,
  김예준: james,
};

const CastingPlan = () => {
  return (
    <section>
      <div className="flex flex-row flex-wrap gap-3">
        {Object.entries(castings).map(([key, value]) => (
          <div key={key} className="basis-1/4 sm:basis-1/6">
            <Image src={value} alt={key} />
          </div>
        ))}
      </div>
      <div className="mt-14 text-navy font-bold max-w-screen-md">
        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/12(목)</span>
          <div className="flex flex-col sm:flex-row gap-3 flex-grow">
            <p className="basis-1/2">저녁 7시 30분</p>
            <p>표영후 이예빈 김예준</p>
          </div>
        </div>

        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/13(금)</span>
          <div className="flex flex-col sm:flex-row gap-3 flex-grow">
            <p className="basis-1/2">저녁 7시 30분</p>
            <p>최현우 이예진 김예준</p>
          </div>
        </div>

        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/14(토)</span>
          <div className="flex flex-col flex-grow gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">오후 2시</p>
              <p>표형우 이예빈 김예준</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">저녁 7시</p>
              <p>최현우 이예진 김예준</p>
            </div>
          </div>
        </div>

        <div className="pb-3 mb-3 border-b-2 border-lightGray flex flex-row">
          <span className="basis-1/3">5/15(일)</span>
          <div className="flex flex-col flex-grow gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">오후 2시</p>
              <p>최현우 이예진 김예준</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <p className="basis-1/2">저녁 7시</p>
              <p>표형우 이예빈 김예준</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastingPlan;
