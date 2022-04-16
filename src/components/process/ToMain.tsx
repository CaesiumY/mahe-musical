import { useRouter } from "next/router";
import React from "react";

const ToMain = () => {
  const { push } = useRouter();

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="my-3 font-bold text-xl">잘못된 주소입니다.</h1>
      <button
        className="p-5 bg-mint hover:bg-mint-bg transition-colors rounded-lg"
        onClick={() => push("/")}
      >
        메인으로 가기
      </button>
    </section>
  );
};

export default ToMain;
