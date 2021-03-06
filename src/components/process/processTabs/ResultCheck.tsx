import React, { useEffect, useMemo, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { increment, off, ref, update } from "firebase/database";
import { db } from "@/firebase/firestore";
import { realtime } from "@/firebase/realtime";
import {
  BARRIER_FREE_SEAT_COUNT,
  castingTable,
  collectionNames,
  DISCOUNTED_SEAT_PRICE,
  LIMIT_TICKET_DATE,
  MATINEE_SEAT_PRICE,
  NOMAL_SEAT_PRICE,
  NORMAL_SEAT_COUNT,
  NO_BARRIER_FREE_TOTAL_SEAT_COUNT,
  requestEmailString,
  requestEmailTitle,
  WHEEL_CHARIR_SEAT_COUNT,
} from "@/constants/constants";
import {
  EmailType,
  MusicalTimePlan,
  PriceType,
  SeatsType,
  TicketsType,
  UserInfoType,
} from "@/types/types";
import TabButton from "./common/TabButton";
import TabHeader from "./common/TabHeader";

interface LineItemProps {
  title: string;
  children: React.ReactNode;
}

const LineItem = ({ title, children }: LineItemProps) => {
  return (
    <div className="flex flex-row w-full">
      <span className="basis-1/3 font-semibold">{title}</span>
      <span className="basis-2/3 font-normal">{children}</span>
    </div>
  );
};

interface ResultCheckProps {
  toNextTab: (toFirst?: boolean) => void;
  bookResult: {
    musicalDate: MusicalTimePlan;
    seats: SeatsType;
    price: PriceType;
    userInfo: UserInfoType;
  };
  data: SeatsType;
}

const ResultCheck = ({ toNextTab, bookResult, data }: ResultCheckProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { musicalDate, price, seats, userInfo } = bookResult;
  const { normal, wheelChair, barrierFree } = seats;
  const { name, contact, email } = userInfo;

  const totalPrice = useMemo(
    () =>
      (
        price.normal * NOMAL_SEAT_PRICE +
        (price.local + price.other) * DISCOUNTED_SEAT_PRICE +
        price.matinee * MATINEE_SEAT_PRICE
      ).toLocaleString(),
    [price]
  );

  const day = musicalDate.slice(0, 2);
  const hour = musicalDate.slice(2, 4);
  const minute = musicalDate.slice(-2);

  const makeAlert = (seat: string, userTickets: number, remained: number) =>
    alert(
      `${seat}?????? ????????? ???????????????. ?????? ??????????????????.
?????? ?????? ?????? ${userTickets}??? / ?????? ?????? ${remained}???`
    );

  const makeDateObject = () => {
    const nowTimestamp = Timestamp.now();
    const limitDay =
      new Date(
        2022,
        new Date().getMonth(),
        new Date().getDate() + LIMIT_TICKET_DATE
      ).getTime() - 1;
    const limitTimestamp = Timestamp.fromDate(new Date(limitDay));

    return { nowTimestamp, limitTimestamp, limitDay };
  };

  const sendEmailtoUser = async () => {
    const { name: username, email } = userInfo;
    const { limitDay } = makeDateObject();

    try {
      const emailContent: EmailType = {
        to: [email],
        message: {
          subject: requestEmailTitle,
          html: requestEmailString({
            username,
            email,
            limitDate: new Date(limitDay).toLocaleString(),
            totalPrice,
          }),
        },
      };
      await addDoc(collection(db, collectionNames.EMAIL), emailContent);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        `?????? ????????? ????????? ?????? ?????? ${error.name} - ${error.message}`;
      }
    }
  };

  const onClickMakeBook = async () => {
    try {
      setIsLoading(true);

      if (
        ["11", "12"].includes(day) &&
        data.normal + normal > NO_BARRIER_FREE_TOTAL_SEAT_COUNT
      ) {
        makeAlert(
          "??????",
          normal,
          NO_BARRIER_FREE_TOTAL_SEAT_COUNT - data.normal
        );
        return toNextTab(true);
      }
      if (data.normal + normal > NORMAL_SEAT_COUNT) {
        makeAlert("??????", normal, NORMAL_SEAT_COUNT - data.normal);
        return toNextTab(true);
      }
      if (data.wheelChair + wheelChair > WHEEL_CHARIR_SEAT_COUNT) {
        makeAlert(
          "?????????",
          wheelChair,
          WHEEL_CHARIR_SEAT_COUNT - data.wheelChair
        );
        return toNextTab(true);
      }
      if (data.barrierFree + barrierFree > BARRIER_FREE_SEAT_COUNT) {
        makeAlert(
          "???????????????",
          barrierFree,
          BARRIER_FREE_SEAT_COUNT - data.barrierFree
        );
        return toNextTab(true);
      }

      const { nowTimestamp: createdAt, limitTimestamp: limitedAt } =
        makeDateObject();

      const ticket: TicketsType = {
        ...userInfo,
        musicalDate,
        price,
        seats,
        status: "waiting",
        createdAt,
        limitedAt,
      };
      await addDoc(collection(db, collectionNames.TICKETS), ticket);
      await update(ref(realtime, musicalDate), {
        normal: increment(normal),
        wheelChair: increment(wheelChair),
        barrierFree: increment(barrierFree),
      });
      await sendEmailtoUser();
      setIsLoading(false);
      toNextTab();
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        throw new Error(
          `ResultCheck ?????? ?????? ?????? ?????? ${error.name} - ${error.message}`
        );
      }
      alert(
        "?????? ?????? ?????? ??????! ????????? ??????????????? ?????? ????????? ?????? ????????????!"
      );
    }
  };

  useEffect(() => {
    return () => {
      off(ref(realtime, musicalDate));
    };
  }, [musicalDate]);

  return (
    <div className="p-8 flex flex-col w-full max-w-md gap-6">
      <TabHeader>?????? ?????? ??????</TabHeader>
      <div className="flex flex-col gap-4">
        <LineItem title="??????">2022-05-{day}</LineItem>
        <LineItem title="??????">
          {hour === "14" || minute === "30" ? "1???" : "2???"} {hour}:{minute}
        </LineItem>
        <LineItem title="?????????">{castingTable[musicalDate]}</LineItem>
        <LineItem title="??????">
          {normal ? `????????? ${normal}???` : ""}
          {normal && wheelChair ? `, ` : ""}
          {wheelChair ? `???????????? ${wheelChair}???` : ""}
          {(normal || wheelChair) && barrierFree ? `, ` : ""}
          {barrierFree ? `?????????????????? ${barrierFree}???` : ""}
        </LineItem>
        <LineItem title="??????">
          {price.normal ? `?????? ${price.normal}???` : ""}
          {price.normal && price.local ? `, ` : ""}
          {price.local ? `?????? ?????? ${price.local}???` : ""}
          {(price.normal || price.local) && price.other ? `, ` : ""}
          {(price.normal || price.local) && price.other ? <br /> : ""}
          {price.other ? `?????????/??????????????? ?????? ${price.other}???` : ""}
        </LineItem>
        <LineItem title="?????? ??????">{totalPrice}???</LineItem>

        <div className="h-px bg-lightGray" />
        <LineItem title="??????">{name}</LineItem>
        <LineItem title="????????? ??????">{contact}</LineItem>
        <LineItem title="?????????">{email}</LineItem>
      </div>
      <div className="text-center mt-8">
        <TabButton
          customTitle="????????????"
          disabled={isLoading}
          onClick={onClickMakeBook}
        />
      </div>
    </div>
  );
};

export default ResultCheck;
