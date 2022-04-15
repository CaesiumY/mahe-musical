import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconGroup from "../common/IconGroup";

import bgMain from "@/images/background_main.jpg";
import playInfo from "@/images/play_info.svg";
import line from "@/images/line.svg";
import musical from "@/images/musical.svg";
import title from "@/images/title.svg";
import location from "@/images/location.svg";

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
          placeholder="blur"
        />
        <div className="absolute w-full text-ivory text-center text-md sm:text-lg top-[35%] left-1/2 translate-x-[-50%] translate-y-[-50%] select-none">
          <div className="mx-24">
            <Image src={playInfo} alt="극단 정보" quality={100} />
          </div>
          <div className="my-3">
            <Image src={line} alt="line" quality={100} />
          </div>
          <div className="mx-24 my-5">
            <Image src={musical} alt="뮤지컬" quality={100} />
          </div>
          <div className="mx-12 my-5">
            <Image src={title} alt="어쩌다 해피엔딩" quality={100} priority />
          </div>
          <div className="mx-20">
            <Image
              src={location}
              alt="2022년 5월 11일 ~ 14일 북아현 아트홀"
              quality={100}
            />
          </div>

          <div className="mt-10 ">
            <Link href="/bookDetail">
              <a className="bg-ivory hover:bg-pink transition-colors bg-opacity-30 text-ivory font-bold px-16 py-3 rounded-lg">
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
