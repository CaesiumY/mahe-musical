import React from "react";
import ProcessInfoBand from "./ProcessInfoBand";

interface ProcessContainerProps {
  musicalDate: string;
}

const ProcessContainer = ({ musicalDate }: ProcessContainerProps) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-14">
      <ProcessInfoBand ticketInfo={{}} />
      BookProcess{musicalDate}
    </section>
  );
};

export default ProcessContainer;
