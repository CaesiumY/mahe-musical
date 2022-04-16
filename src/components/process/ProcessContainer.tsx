import { off, onValue, ref } from "firebase/database";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { castingTable } from "@/constants/constants";
import { realtime } from "@/firebase/realtime";
import { PriceType, SeatsType, UserInfoType } from "@/types/types";
import ProcessInfoBand from "./ProcessInfoBand";
import DiscountSelect from "./processTabs/DiscountSelect";
import EndOfProcess from "./processTabs/EndOfProcess";
import ResultCheck from "./processTabs/ResultCheck";
import SeatTypeSelect from "./processTabs/SeatTypeSelect";
import UserInfo from "./processTabs/UserInfo";

const ProcessContainer = () => {
  const { query } = useRouter();
  const { musicalDate } = query as { musicalDate: keyof typeof castingTable };
  const [currentTab, setCurrentTab] = useState(0);
  const [musicalData, setMusicalData] = useState<SeatsType>({
    normal: 0,
    barrierFree: 0,
    wheelChair: 0,
  });

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

  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: "",
    contact: "",
    email: "",
  });

  const toNextTab = () => setCurrentTab((value) => value + 1);

  // seat logic
  const totalTickets = useMemo(
    () => Object.values(seatCount).reduce((a, b) => a + b, 0),
    [seatCount]
  );

  const onChangeSeatCount = (payload: SeatsType) => {
    setSeatCount(payload);
    toNextTab();
  };

  // price logic
  const onChangePriceCount = (payload: PriceType) => {
    setPriceCount(payload);
    toNextTab();
  };

  // userInfo logic
  const onChangeUserInfo = (payload: UserInfoType) => {
    setUserInfo(payload);
    toNextTab();
  };

  useEffect(() => {
    try {
      const ticketCountRef = ref(realtime, musicalDate);
      onValue(ticketCountRef, (snapshot) => {
        const data: SeatsType = snapshot.val();
        setMusicalData(data);
      });
    } catch (error) {
      console.error(error);
    }
    return () => {
      off(ref(realtime));
    };
  }, [musicalDate]);

  const tabs = [
    <SeatTypeSelect
      key="seatTypeSelect"
      onChangeSeatCount={onChangeSeatCount}
      data={musicalData}
    />,
    <DiscountSelect
      key="discountSelect"
      totalTickets={totalTickets}
      onChangePriceCount={onChangePriceCount}
    />,
    <UserInfo key="userInfo" onChangeUserInfo={onChangeUserInfo} />,
    <ResultCheck
      key="resultCheck"
      toNextTab={toNextTab}
      bookResult={{
        musicalDate,
        seats: seatCount,
        price: priceCount,
        userInfo,
      }}
      data={musicalData}
    />,
    <EndOfProcess
      key="endOfProcess"
      name={userInfo.name}
      email={userInfo.email}
    />,
  ];

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="h-4/5 sm:h-3/4 w-full flex flex-col items-center gap-6 sm:gap-10">
        {currentTab < 3 && (
          <ProcessInfoBand ticketInfo={seatCount} musicalDate={musicalDate} />
        )}
        {tabs[currentTab]}
      </div>
    </section>
  );
};

export default ProcessContainer;
