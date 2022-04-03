import Image from "next/image";
import React from "react";
import seatTable from "@/images/좌석배치도.png";

const DetailInfo = () => {
  return (
    <section className="mx-3 my-5 sm:m-10">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-700"># 상세보기</h2>
        <div className="h-px bg-gray-700 my-2" />
      </div>
      <article className="text-center mt-8">
        <Image src={seatTable} alt="좌석 배치도" />
      </article>
    </section>
  );
};

export default DetailInfo;
