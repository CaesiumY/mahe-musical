import React, { useMemo, useState } from "react";
import ProcessInfoBand from "./ProcessInfoBand";
import SeatTypeSelect from "./processTabs/SeatTypeSelect";
import { TicketCountType } from "./types/types";

const ProcessContainer = () => {
  const [ticketCount, setTicketCount] = useState<TicketCountType>({
    normal: 0,
    wheelChair: 0,
    barrierFree: 0,
  });
  const [currentTab, setCurrentTab] = useState(0);

  const onChangeTicketCount = (ticketCount: TicketCountType) =>
    setTicketCount(ticketCount);

  const totalTickets = useMemo(
    () => Object.values(ticketCount).reduce((a, b) => a + b, 0),
    [ticketCount]
  );

  // const tabs = [<SeatTypeSelect key="seatTypeSelect" onChangeTicketCount={onChangeTicketCount} />]

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="h-4/5 sm:h-2/3 w-full flex flex-col items-center gap-14">
        <ProcessInfoBand ticketInfo={ticketCount} />
        {currentTab === 0 && (
          <SeatTypeSelect onChangeTicketCount={onChangeTicketCount} />
        )}
      </div>
    </section>
  );
};

export default ProcessContainer;
