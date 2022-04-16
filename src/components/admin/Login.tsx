import React, { useState } from "react";
import UserInput from "../common/UserInput";
import TabButton from "../process/processTabs/common/TabButton";

interface LoginProps {
  submitLogin: (email: string, password: string) => void;
  isLoading: boolean;
}

const Login = ({ submitLogin, isLoading }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickTabButton = () => {
    submitLogin(email, password);
  };

  return (
    <div className="p-8 mx-auto flex flex-col w-full max-w-md gap-6">
      <UserInput
        id="adminId"
        label="이메일 아이디"
        placeholder="wearemahe@gmail.com"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <UserInput
        id="adminPwd"
        label="비밀번호"
        placeholder="01012345678"
        type="password"
        value={password}
        setValue={setPassword}
      />

      <div className="text-center mt-8">
        <TabButton onClick={onClickTabButton} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Login;
