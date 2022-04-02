import React, { useMemo } from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const IconGroup = () => {
  const iconSet = useMemo(
    () => ({
      instagram: {
        link: "https://www.instagram.com/mahe_musical/",
        icon: (
          <AiOutlineInstagram
            className="inline rounded-full bg-[#ffe3e3] p-2 hover:bg-red-300 hover:text-[#ffe3e3] ml-2"
            size="2.5rem"
          />
        ),
      },
      youtube: {
        link: "/",
        icon: (
          <AiOutlineYoutube
            className="inline rounded-full bg-[#ffe3e3] p-2 hover:bg-red-300 hover:text-[#ffe3e3] ml-2"
            size="2.5rem"
          />
        ),
      },
      twitter: {
        link: "https://twitter.com/mahe_musical?s=20&t=ePxaexbLvttJ-iaJ40DYVg",
        icon: (
          <AiOutlineTwitter
            className="inline rounded-full bg-[#ffe3e3] p-2 hover:bg-red-300 hover:text-[#ffe3e3] ml-2"
            size="2.5rem"
          />
        ),
      },
    }),
    []
  );

  return (
    <div className="basis-1/3 text-center text-2xl text-gray-600">
      {Object.entries(iconSet).map(([key, value]) => (
        <a key={key} href={value.link}>
          {value.icon}
        </a>
      ))}
    </div>
  );
};

export default IconGroup;
