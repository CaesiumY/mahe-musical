import { castingTable } from "@/constants/constants";
import { useRouter } from "next/router";
import React from "react";
import { TicketCountType } from "./types/types";

interface ProcessInfoBandProps {
  ticketInfo: TicketCountType;
}

const ProcessInfoBand = ({ ticketInfo }: ProcessInfoBandProps) => {
  const { query } = useRouter();
  const { musicalDate } = query;
  const { normal, wheelChair, barrierFree } = ticketInfo;

  return (
    <div className="bg-mint-bg text-dark w-full">
      <div className="max-w-[80%] mx-auto py-8 flex flex-row gap-1">
        <p>2022-05-{musicalDate?.slice(0, 2)}</p>
        <span>|</span>
        <p>
          {musicalDate?.slice(2, 4)}:{musicalDate?.slice(-2)}
        </p>
        <span>|</span>
        <p>{castingTable[musicalDate as keyof typeof castingTable]}</p>
        {Object.values(ticketInfo).includes(0) ? "" : <span>|</span>}
        <p>
          {normal ? `일반석 ${normal}매` : ""}
          {normal ? `, ` : ""}
          {wheelChair ? `휠체어석 ${wheelChair}매` : ""}
          {wheelChair ? `, ` : ""}
          {barrierFree ? `배리어프리석 ${barrierFree}매` : ""}
        </p>
      </div>
    </div>
  );
};

export default ProcessInfoBand;
