import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoIvory from "@/images/logo_ivory.svg";
import logoNavy from "@/images/logo_navy.svg";
import OverlayCurtain from "./OverlayCurtain";

const submenu = {
  bookDetail: "예매하기",
  bookCheck: "예매내역 확인",
};

interface HeaderProps {
  color?: "ivory" | "navy";
}

const Header = ({ color = "ivory" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((value) => !value);

  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    isOpen
      ? document.body.classList.add("isOpen")
      : document.body.classList.remove("isOpen");
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isOpen || color !== "ivory" ? "bg-white" : "bg-transparent"
        }`}
      >
        <nav className="transition-all duration-500 sm:mx-24 flex flex-col sm:flex-row">
          <div className="flex text-[#667080] px-8 py-6 sm:p-0 z-50">
            <Link href="/">
              <a
                className="flex items-center font-bold text-3xl"
                onClick={closeDrawer}
              >
                <Image
                  src={
                    isOpen ? logoNavy : color === "ivory" ? logoIvory : logoNavy
                  }
                  alt="마헤 로고"
                />
              </a>
            </Link>
            <div className="ml-auto flex items-center sm:hidden">
              <button className="flex" onClick={toggleDrawer}>
                {isOpen ? (
                  <Image
                    src="/ui/close.svg"
                    alt="닫기"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src={
                      color === "ivory" ? "/ui/menu.svg" : "/ui/menu_navy.svg"
                    }
                    alt="메뉴 열기"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "" : "translate-y-[-250px] sm:translate-y-0"
            } sm:ml-auto transition-transform absolute sm:static top-[68px] left-[0] right-[0] z-40 bg-white sm:bg-inherit px-8 pb-4 sm:p-4 rounded-b-3xl`}
          >
            <ul
              className={`list-none flex flex-col sm:flex-row items-end gap-1 sm:gap-6 sm:mt-0 text-lg text-navy ${
                color === "ivory" ? "sm:text-ivory" : "sm:text-navy"
              } sm:font-semibold`}
            >
              {Object.entries(submenu).map(([key, value]) => (
                <li
                  key={key}
                  className="py-2 sm:hover:text-gold transition-colors"
                >
                  <Link href={`/${key}`}>
                    <a className="py-2" onClick={closeDrawer}>
                      {value}
                    </a>
                  </Link>
                </li>
              ))}
              <div className="bg-[#c9ccd0] w-full h-px sm:hidden" />
              <li className="py-2">
                <Link href={`/comingSoon`}>
                  <a
                    className="py-2 sm:hover:text-gold transition-colors"
                    onClick={closeDrawer}
                  >
                    마헤 이야기
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isOpen && <OverlayCurtain onClick={closeDrawer} />}
    </>
  );
};

export default Header;
