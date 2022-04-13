import { DISCOUNTED_SEAT_PRICE, NOMAL_SEAT_PRICE } from "@/constants/constants";
import React, { useMemo, useState } from "react";
import { PriceType, SeatsType } from "../../types/types";
import ProcessInfoBand from "./ProcessInfoBand";
import DiscountSelect from "./processTabs/DiscountSelect";
import SeatTypeSelect from "./processTabs/SeatTypeSelect";

const ProcessContainer = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [seatCount, setSeatCount] = useState<SeatsType>({
    normal: 0,
    wheelChair: 0,
    barrierFree: 0,
  });

  const [priceCount, setPriceCount] = useState<PriceType>({
    normal: 0,
    local: 0,
    other: 0,
  });

  const toNextTab = () => setCurrentTab((value) => value + 1);

  // seat logic
  const onChangeSeatCount = (payload: SeatsType) => {
    setSeatCount(payload);
    toNextTab();
  };

  const totalTickets = useMemo(
    () => Object.values(seatCount).reduce((a, b) => a + b, 0),
    [seatCount]
  );

  // price logic
  const onChangePriceCount = (payload: PriceType) => {
    setPriceCount(payload);
    toNextTab();
  };

  const totalPrice = useMemo(
    () =>
      priceCount.normal * NOMAL_SEAT_PRICE +
      (priceCount.local + priceCount.other) * DISCOUNTED_SEAT_PRICE,
    [priceCount]
  );

  const tabs = [
    <SeatTypeSelect
      key="seatTypeSelect"
      onChangeSeatCount={onChangeSeatCount}
    />,
    <DiscountSelect
      key="discountSelect"
      totalTickets={totalTickets}
      onChangePriceCount={onChangePriceCount}
    />,
  ];

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="h-4/5 sm:h-2/3 w-full flex flex-col items-center gap-14">
        <ProcessInfoBand ticketInfo={seatCount} />
        {tabs[currentTab]}
      </div>
    </section>
  );
};

export default ProcessContainer;
