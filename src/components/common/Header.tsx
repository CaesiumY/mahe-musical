import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const submenu = {
  bookDetail: "예매 상세보기",
  bookCheck: "예매 확인하기",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((value) => !value);

  return (
    <header>
      <nav className="transition-all duration-300 xl:w-3/4 xl:mx-auto flex flex-col sm:flex-row">
        <div
          className={`flex text-[#667080] p-4 z-50 ${
            isOpen ? "bg-[#EFEFEF]" : "bg-[#ffe3e3]"
          }`}
        >
          <Link href="/">
            <a className="flex items-center font-bold text-3xl">MA:HE</a>
          </Link>
          <div className="ml-auto flex items-center sm:hidden">
            <button onClick={toggleDrawer}>
              {isOpen ? (
                <AiOutlineClose size="2rem" />
              ) : (
                <AiOutlineMenu size="2rem" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "" : "translate-y-[-400px] sm:translate-y-0"
          } sm:ml-auto transition-transform absolute sm:static top-[68px] left-[0] right-[0] z-40 bg-[#EFEFEF] sm:bg-inherit p-4`}
        >
          <ul className="flex flex-col sm:flex-row items-end gap-1 sm:gap-4 sm:mt-0 text-xl text-black font-semibold">
            {Object.entries(submenu).map(([key, value]) => (
              <li key={key} className="py-2 hover:text-gray-500">
                <Link href={`/${key}`}>
                  <a className="py-2">{value}</a>
                </Link>
              </li>
            ))}
            <div className="bg-black w-full h-px sm:hidden" />
            <li className="py-2 hover:text-gray-500">
              <Link href={`/comingSoon`}>
                <a className="py-2">팜플렛(Coming Soon!)</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
