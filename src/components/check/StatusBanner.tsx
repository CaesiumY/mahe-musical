import React from "react";
import { BookStatus } from "../../types/types";

interface StatusBannerProps {
  status: BookStatus;
}

const StatusBanner = ({ status }: StatusBannerProps) => {
  if (status === "waiting")
    return <span className="basis-1/2 font-bold text-[#D72629]">입금대기</span>;
  if (status === "checking")
    return <span className="basis-1/2 font-bold text-mint">입금 확인 중</span>;
  if (status === "confirmed")
    return <span className="basis-1/2 font-bold text-[#968b21]">예매확정</span>;
  if (status === "cancelRequest")
    return <span className="basis-1/2 font-bold text-[#193052]">취소신청</span>;
  if (status === "cancelled")
    return <span className="basis-1/2 font-bold text-[#63666C]">취소완료</span>;
  if (status === "expired")
    return (
      <span className="basis-1/2 font-bold text-lightGray">입금 기한 만료</span>
    );

  return <span className="basis-1/2 font-bold text-black">알 수 없음</span>;
};

export default StatusBanner;
