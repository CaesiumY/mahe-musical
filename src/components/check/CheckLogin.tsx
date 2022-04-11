import { collectionNames } from "@/constants/constants";
import { db } from "@/firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { TicketsType } from "./types/types";

interface CheckLoginProps {
  setData: (value: TicketsType) => void;
}

const CheckLogin = ({ setData }: CheckLoginProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onReset = () => {
    setName("");
    setEmail("");
  };

  const onSearchUser = async (name: string, email: string) => {
    try {
      setIsLoading(true);

      const ticketsRef = collection(db, collectionNames.TICKETS);
      const userQuery = query(
        ticketsRef,
        where("name", "==", name),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(userQuery);

      setIsLoading(false);

      if (querySnapshot.empty) return alert("존재하지 않는 티켓입니다!");
      if (querySnapshot.size > 1) throw new Error("중복된 사용자");

      onReset();

      querySnapshot.forEach((doc) => {
        setData(doc.data() as TicketsType);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onClickCheck = async () => {
    if (!name) return alert("이름을 입력해주세요!");
    if (!email) return alert("이메일을 입력해주세요!");

    await onSearchUser(name, email);
  };

  return (
    <div className="flex flex-col gap-6 w-1/3 min-w-[300px] max-w-md">
      <div className="flex flex-col gap-3">
        <label htmlFor="customerName" className="font-bold">
          이름
        </label>
        <input
          className="border border-lightGray rounded-lg p-4 w-full"
          type="text"
          name="customerName"
          id="customerName"
          placeholder="ex) 김승현"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="customerEmail" className="font-bold">
          이메일
        </label>
        <input
          className="border border-lightGray rounded-lg p-4 w-full"
          type="email"
          name="customerEmail"
          id="customerEmail"
          placeholder="ex) oliver@mahe.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button
        className="text-white bg-pink rounded-lg py-3 px-12 mx-auto mt-7 font-bold"
        onClick={onClickCheck}
        disabled={isLoading}
      >
        {isLoading ? `데이터를 불러오는 중...` : `예매 확인하기`}
      </button>
    </div>
  );
};

export default CheckLogin;
