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

  const day = musicalDate?.slice(0, 2);
  const hour = musicalDate?.slice(2, 4);
  const minute = musicalDate?.slice(-2);

  return (
    <div className="bg-mint-bg text-dark w-full">
      <div className="max-w-[80%] mx-auto py-8 flex flex-row gap-1">
        <p>2022-05-{day}</p>
        <span>|</span>
        <p>
          {hour === "14" || minute === "30" ? "1회" : "2회"} {hour}:{minute}
        </p>
        <span>|</span>
        <p>{castingTable[musicalDate as keyof typeof castingTable]}</p>
        {Object.values(ticketInfo).some((v) => v !== 0) ? <span>|</span> : ""}
        <p>
          {normal ? `일반석 ${normal}매` : ""}
          {normal && wheelChair ? `, ` : ""}
          {wheelChair ? `휠체어석 ${wheelChair}매` : ""}
          {(normal || wheelChair) && barrierFree ? `, ` : ""}
          {barrierFree ? `배리어프리석 ${barrierFree}매` : ""}
        </p>
      </div>
    </div>
  );
};

export default ProcessInfoBand;
