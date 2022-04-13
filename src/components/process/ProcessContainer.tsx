import { DISCOUNTED_SEAT_PRICE, NOMAL_SEAT_PRICE } from "@/constants/constants";
import React, { useMemo, useState } from "react";
import { PriceType, SeatsType, UserInfoType } from "../../types/types";
import ProcessInfoBand from "./ProcessInfoBand";
import DiscountSelect from "./processTabs/DiscountSelect";
import SeatTypeSelect from "./processTabs/SeatTypeSelect";
import UserInfo from "./processTabs/UserInfo";

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

  const [userInfo, setUserInfo] = useState<UserInfoType>();

  const toNextTab = () => setCurrentTab((value) => value + 1);
  const sumValue = (payload: object) =>
    Object.values(payload).reduce((a, b) => a + b, 0);

  // seat logic
  const totalTickets = useMemo(
    () => Object.values(seatCount).reduce((a, b) => a + b, 0),
    [seatCount]
  );

  const onChangeSeatCount = (payload: SeatsType) => {
    if (sumValue(payload) === 0) return alert("1개 이상의 티켓을 넣어주세요!");
    setSeatCount(payload);
    toNextTab();
  };

  // price logic
  const onChangePriceCount = (payload: PriceType) => {
    if (sumValue(payload) !== totalTickets)
      return alert("수량이 맞지 않습니다!");

    setPriceCount(payload);
    toNextTab();
  };

  const totalPrice = useMemo(
    () =>
      priceCount.normal * NOMAL_SEAT_PRICE +
      (priceCount.local + priceCount.other) * DISCOUNTED_SEAT_PRICE,
    [priceCount]
  );

  // userInfo logic
  const onChangeUserInfo = (payload: UserInfoType) => {
    setUserInfo(payload);
    toNextTab();
  };

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
    <UserInfo key="userInfo" onChangeUserInfo={onChangeUserInfo} />,
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
