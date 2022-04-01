import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const submenu = {
  book_detail: "예매 상세보기",
  book_check: "예매 확인하기",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((value) => !value);

  return (
    <header>
      <nav
        className={`transition-all duration-300 p-5 flex flex-col sm:flex-row ${
          isOpen ? "bg-[#EFEFEF]" : "bg-transparent"
        }`}
      >
        <div className="flex text-[#667080]">
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

        <div className={`${!isOpen && "hidden"} sm:ml-auto sm:block`}>
          <ul className="flex flex-col sm:flex-row items-end gap-1 sm:gap-4 mt-6 sm:mt-0 text-xl text-black font-semibold">
            {Object.entries(submenu).map(([key, value]) => (
              <li key={key} className="py-2 hover:text-gray-500">
                <Link href={`#${key}`}>
                  <a className="py-2">{value}</a>
                </Link>
              </li>
            ))}
            <div className="bg-black w-full h-px sm:hidden" />
            <li className="py-2 hover:text-gray-500">
              <Link href={`#coming-soon`}>
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
