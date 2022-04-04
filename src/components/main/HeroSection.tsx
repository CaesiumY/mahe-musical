import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconGroup from "../common/IconGroup";

import bgMain from "@/images/background_main.jpg";
import musical from "@/images/musical.png";
import line from "@/images/line.png";
import title from "@/images/title.png";
import location from "@/images/location.png";

const HeroSection = () => {
  return (
    <section>
      <div className="relative h-screen">
        <Image
          alt="마헤_포스터"
          src={bgMain}
          objectFit="cover"
          layout="fill"
          priority
          quality={100}
          className="object-bottom sm:object-center"
        />
        <div className="absolute w-full text-ivory text-center text-md sm:text-lg top-[35%] left-1/2 translate-x-[-50%] translate-y-[-50%] select-none">
          <p className="text-sm font-light">
            연세대학교 뮤지컬 소모임 ma:he 봄 공연
          </p>
          <div className="my-3">
            <Image src={line} alt="line" quality={100} />
          </div>
          <div className="mx-24 my-5">
            <Image src={musical} alt="musical" quality={100} />
          </div>
          <div className="mx-12 my-5">
            <Image src={title} alt="title" quality={100} priority />
          </div>
          <div className="mx-20">
            <Image src={location} alt="location" quality={100} />
          </div>

          <div className="mt-10 ">
            <Link href="/">
              <a className="bg-ivory hover:bg-red-300 transition-colors bg-opacity-30 text-ivory font-bold px-16 py-3 rounded-lg">
                예매하기
              </a>
            </Link>
            <div className="mt-7">
              <IconGroup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
