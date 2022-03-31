import React from "react";
import styles from "./styles/footer.module.scss";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-slate-400">
      <div className="">
        <div className="">footer 설명 섹션</div>

        <div className="">
          <AiOutlineMail />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
