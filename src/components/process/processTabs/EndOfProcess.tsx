import { useRouter } from "next/router";
import React from "react";
import TabButton from "./common/TabButton";

interface EndOfProcessProps {
  name: string;
  email: string;
}

const EndOfProcess = ({ name, email }: EndOfProcessProps) => {
  const { push } = useRouter();

  const onClickTabButton = () =>
    push({
      pathname: "/bookCheck",
      query: {
        name,
        email,
      },
    });

  return (
    <div className="p-8 flex flex-col w-full gap-6 justify-center">
      <div className="text-center">
        <h2 className="font-bold text-4xl mb-7">예매가 완료되었습니다!</h2>
        <p>
          정보 확인 후 예매 확정 안내 메세지가 카카오톡으로 발송될 예정입니다
        </p>
      </div>
      <div className="text-center mt-8">
        <TabButton customTitle="예매내역 확인" onClick={onClickTabButton} />
      </div>
    </div>
  );
};

export default EndOfProcess;
