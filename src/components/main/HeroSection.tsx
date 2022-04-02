import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="relative h-screen">
        <Image
          alt="마헤_포스터"
          src="/images/poster.jpg"
          objectFit="cover"
          layout="fill"
          className="brightness-50"
          priority
        />
        <div className="absolute w-3/4 text-[#f7e7f5] text-center text-md sm:text-lg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] select-none border-2 bg-transparent p-5 rounded-lg">
          <p className="text-[#ecca4b] tracking-widest">M U S I C A L</p>
          <h2 className="text-6xl sm:text-8xl font-bold my-5 text-transparent bg-gradient-to-r from-[#fbd4d4] to-[#848ac1] bg-clip-text">
            어쩌면 해피엔딩
          </h2>
          <p>연세대학교 뮤지컬 소모임 ma:he </p>
          <p>봄 공연 뮤지컬</p>

          <div className="mt-10 mb-3">
            <Link href="/">
              <a className="py-3 px-8 rounded-full border-2 text-2xl font-bold hover:bg-gradient-to-r from-[#fbd4d4] to-[#848ac1] hover:text-gray-800 transition-colors">
                예매하기
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
