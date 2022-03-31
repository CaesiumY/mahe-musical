import React from "react";
import styles from "./styles/footer.module.scss";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__texts}>footer 설명 섹션</div>

        <div className={styles.footer__icons}>
          <AiOutlineMail />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
