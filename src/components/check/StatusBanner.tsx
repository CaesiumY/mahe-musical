import React from "react";

interface StatusBannerProps {
  status: "waiting" | "confirmed" | "cancelRequest" | "cancelled";
}

const StatusBanner = ({ status }: StatusBannerProps) => {
  if (status === "confirmed")
    return <span className="basis-1/2 font-bold text-[#968b21]">예매확정</span>;
  if (status === "cancelRequest")
    return <span className="basis-1/2 font-bold text-[#193052]">취소신청</span>;
  if (status === "cancelled")
    return <span className="basis-1/2 font-bold text-[#63666C]">취소완료</span>;

  return <span className="basis-1/2 font-bold text-[#D72629]">입금대기</span>;
};

export default StatusBanner;
