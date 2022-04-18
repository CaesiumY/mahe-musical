import React, { useMemo } from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

interface IconGroupProps {
  color?: string;
  isLeft?: boolean;
}
// TODO: 예매하기에서 아이콘 좌측 정렬
const IconGroup = ({ color, isLeft }: IconGroupProps) => {
  const iconSet = useMemo(
    () => ({
      instagram: {
        link: "https://www.instagram.com/mahe_musical/",
        icon: (
          <AiOutlineInstagram
            className="inline rounded-full p-2 hover:bg-pink hover:text-ivory mr-2 transition-colors"
            size="2.5rem"
          />
        ),
      },
      twitter: {
        link: "https://twitter.com/mahe_musical?s=20&t=ePxaexbLvttJ-iaJ40DYVg",
        icon: (
          <AiOutlineTwitter
            className="inline rounded-full p-2 hover:bg-pink hover:text-ivory mr-2 transition-colors"
            size="2.5rem"
          />
        ),
      },
      youtube: {
        link: "https://www.youtube.com/channel/UCC3lh11eUPm-MdGPxARenug",
        icon: (
          <AiFillYoutube
            className="inline rounded-full p-2 hover:bg-pink hover:text-ivory mr-2 transition-colors"
            size="2.5rem"
          />
        ),
      },
    }),
    []
  );

  return (
    <div
      className={`${isLeft ? "text-left" : "text-center"} text-2xl ${
        color === "lightGray" ? `text-lightGray` : "text-ivory"
      }`}
    >
      {Object.entries(iconSet).map(([key, value]) => (
        <a key={key} href={value.link} aria-label={key} rel="noopener">
          {value.icon}
        </a>
      ))}
    </div>
  );
};

export default IconGroup;
