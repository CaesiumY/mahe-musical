import Image from "next/image";
import React from "react";
import about from "@/images/about.jpg";

const MusicalInfo = () => {
  return (
    <article>
      <Image src={about} alt="공연 소개" placeholder="blur" quality={100} />
    </article>
  );
};

export default MusicalInfo;
