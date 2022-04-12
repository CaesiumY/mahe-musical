import React, { useState } from "react";
import ProcessInfoBand from "./ProcessInfoBand";
import { TicketCountType } from "./types/types";

interface ProcessContainerProps {
  musicalDate: string;
}

const ProcessContainer = ({ musicalDate }: ProcessContainerProps) => {
  const [ticketCount, setTicketCount] = useState<TicketCountType>({
    normal: 0,
    wheelChair: 0,
    barrierFree: 0,
  });

  return (
    <section className="h-screen flex flex-col justify-center items-center gap-14">
      <ProcessInfoBand ticketInfo={ticketCount} />
      BookProcess{musicalDate}
    </section>
  );
};

export default ProcessContainer;
