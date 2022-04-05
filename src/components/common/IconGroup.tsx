import React, { useMemo } from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

interface IconGroupProps {
  color?: string;
}

const IconGroup = ({ color }: IconGroupProps) => {
  const iconSet = useMemo(
    () => ({
      instagram: {
        link: "https://www.instagram.com/mahe_musical/",
        icon: (
          <AiOutlineInstagram
            className="inline rounded-full p-2 hover:bg-pink hover:text-ivory ml-2 transition-colors"
            size="2.5rem"
          />
        ),
      },
      twitter: {
        link: "https://twitter.com/mahe_musical?s=20&t=ePxaexbLvttJ-iaJ40DYVg",
        icon: (
          <AiOutlineTwitter
            className="inline rounded-full p-2 hover:bg-pink hover:text-ivory ml-2 transition-colors"
            size="2.5rem"
          />
        ),
      },
      youtube: {
        link: "https://www.youtube.com/channel/UCC3lh11eUPm-MdGPxARenug",
        icon: (
          <AiFillYoutube
            className="inline rounded-full p-2 hover:bg-pink hover:text-ivory ml-2 transition-colors"
            size="2.5rem"
          />
        ),
      },
    }),
    []
  );

  return (
    <div
      className={`basis-1/3 text-center text-2xl ${
        color ? `text-${color}` : "text-ivory"
      }`}
    >
      {Object.entries(iconSet).map(([key, value]) => (
        <a key={key} href={value.link}>
          {value.icon}
        </a>
      ))}
    </div>
  );
};

export default IconGroup;
