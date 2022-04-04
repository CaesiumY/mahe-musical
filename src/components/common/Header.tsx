import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoIvory from "@/images/logo_ivory.png";
import logoNavy from "@/images/logo_navy.png";

const submenu = {
  bookDetail: "예매하기",
  bookCheck: "예매내역 확인",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((value) => !value);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="transition-all duration-500 xl:w-3/4 xl:mx-auto flex flex-col sm:flex-row">
          <div
            className={`flex text-[#667080] px-8 py-6 sm:p-4 z-50 ${
              isOpen ? "bg-white" : "bg-transparent"
            }`}
          >
            <Link href="/">
              <a
                className="flex items-center font-bold text-3xl"
                onClick={closeDrawer}
              >
                <Image src={isOpen ? logoNavy : logoIvory} alt="logo" />
              </a>
            </Link>
            <div className="ml-auto flex items-center sm:hidden">
              <button className="flex" onClick={toggleDrawer}>
                {isOpen ? (
                  <Image
                    src="/ui/close.png"
                    alt="close"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image src="/ui/menu.png" alt="menu" width={24} height={24} />
                )}
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "" : "translate-y-[-250px] sm:translate-y-0"
            } sm:ml-auto transition-transform absolute sm:static top-[68px] left-[0] right-[0] z-40 bg-white sm:bg-inherit px-8 pb-4 sm:p-4 rounded-b-3xl`}
          >
            <ul className="flex flex-col sm:flex-row items-end gap-1 sm:gap-6 sm:mt-0 text-lg text-navy sm:text-ivory sm:font-semibold">
              {Object.entries(submenu).map(([key, value]) => (
                <li key={key} className="py-2 sm:hover:text-gold">
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
                  <a className="py-2 sm:hover:text-gold" onClick={closeDrawer}>
                    팜플렛
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isOpen && (
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-black z-40 opacity-60"
          onClick={closeDrawer}
        />
      )}
    </>
  );
};

export default Header;
