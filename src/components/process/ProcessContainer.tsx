import React, { useState } from "react";
import ProcessInfoBand from "./ProcessInfoBand";
import SeatTypeTap from "./processTabs/SeatTypeTap";
import { TicketCountType } from "./types/types";

const ProcessContainer = () => {
  const [ticketCount, setTicketCount] = useState<TicketCountType>({
    normal: 0,
    wheelChair: 0,
    barrierFree: 0,
  });

  const onChangeTicketCount = (ticketCount: TicketCountType) =>
    setTicketCount(ticketCount);

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="h-4/5 sm:h-2/3 w-full flex flex-col items-center gap-14">
        <ProcessInfoBand ticketInfo={ticketCount} />
        <SeatTypeTap onChangeTicketCount={onChangeTicketCount} />
      </div>
    </section>
  );
};

export default ProcessContainer;
