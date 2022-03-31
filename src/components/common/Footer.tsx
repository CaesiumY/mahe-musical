import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-slate-400">
      <div className="px-4 py-5 sm:py-16 flex flex-row">
        <div className="basis-2/3">
          보통 여기에 주소와 전화 번호, 이메일 주소 등 정보가 들어갑니다.
        </div>

        <div className="basis-1/3 text-right text-2xl">
          <a href="mailto:dbs2636@gmail.com">
            <HiOutlineMail
              className="inline rounded-full bg-gray-600 p-2 hover:bg-gray-400 hover:text-gray-600 ml-2"
              size="2.5rem"
            />
          </a>
          <a href="mailto:dbs2636@gmail.com">
            <AiOutlineInstagram
              className="inline rounded-full bg-gray-600 p-2 hover:bg-gray-400 hover:text-gray-600 ml-2"
              size="2.5rem"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
