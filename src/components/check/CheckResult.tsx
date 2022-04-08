import React from "react";

const CheckResult = () => {
  return (
    <article className="flex flex-col justify-center items-center gap-6 h-4/5 w-full max-w-md">
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">예매자명</span>
        <span className="basis-1/2 font-normal">올리버</span>
      </div>
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">휴대폰 번호</span>
        <span className="basis-1/2 font-normal">010-1234-5678</span>
      </div>
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">이용일/매수</span>
        <span className="basis-1/2 font-normal">2022-05-14 / 2매</span>
      </div>
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">좌석</span>
        <span className="basis-1/2 font-normal">F4</span>
      </div>
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">티켓 금액</span>
        <span className="basis-1/2 font-normal">8000원</span>
      </div>
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">입금 계좌번호</span>
        <span className="basis-1/2 font-normal">012345678</span>
      </div>
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">취소 가능일</span>
        <span className="basis-1/2 font-normal">2022-05-07</span>
      </div>
      <div className="flex flex-row w-full px-8">
        <span className="basis-1/2 font-semibold">예매 현황</span>
        <span className="basis-1/2 font-bold text-[#D72629]">입금대기</span>
      </div>
    </article>
  );
};

export default CheckResult;
