import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const submenu = {
  submenu1: "서브메뉴1",
  submenu2: "서브메뉴2",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => setIsOpen((value) => !value);

  return (
    <header>
      <nav className="p-3 pl-0 bg-[#fff] flex flex-col shadow-md">
        <div className="flex">
          <Link href="/">
            <a className="flex items-center">
              <Image src="/logo.png" alt="mahe" width={160} height={50} />
            </a>
          </Link>
          <div className="ml-auto flex items-center">
            <button onClick={toggleDrawer}>
              <AiOutlineMenu size="2rem" />
            </button>
          </div>
        </div>
        <div className={`${!isOpen && "hidden"}`}>
          <ul className="flex flex-col items-end gap-2 mt-2 text-xl">
            {Object.entries(submenu).map(([key, value]) => (
              <li key={key} className="py-2">
                <Link href={`#${key}`}>
                  <a className="p-2">{value}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
