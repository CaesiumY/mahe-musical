import UserInput from "@/components/common/UserInput";
import { UserInfoType } from "@/types/types";
import React, { useState } from "react";
import TabButton from "./common/TabButton";

interface UserInfoProps {
  onChangeUserInfo: (payload: UserInfoType) => void;
}

const UserInfo = ({ onChangeUserInfo }: UserInfoProps) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const formatContact = (value: string) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(value)) {
      setContact(value.replace(/(\d{3})(\d{4})(\d)/, "$1-$2-$3"));
    }
  };

  const onClickTabButton = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

    if (!name.length) return alert("이름을 입력해주세요!");
    if (!emailRegex.test(email)) return alert("잘못된 이메일 형식입니다!");
    if (!contact.length) return alert("연락처를 입력해주세요!");

    const totalUserInfo = {
      name,
      contact,
      email,
    };

    onChangeUserInfo(totalUserInfo);
  };

  return (
    <div className="p-8 flex flex-col w-full max-w-md gap-6">
      <UserInput
        id="customerName"
        label="이름"
        placeholder="김승현"
        type="text"
        value={name}
        setValue={setName}
      />
      <UserInput
        id="customerContact"
        label="핸드폰 번호"
        placeholder="01012345678"
        type="text"
        value={contact}
        setValue={formatContact}
      />
      <UserInput
        id="customerEmail"
        label="이메일"
        placeholder="oliver@mahe.com"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <div className="text-center mt-8">
        <TabButton onClick={onClickTabButton} />
      </div>
    </div>
  );
};

export default UserInfo;
