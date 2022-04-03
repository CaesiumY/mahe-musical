import Image from "next/image";
import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const carouselList = {
  표지: "/images/front.jpg",
  표지1: "/images/front.jpg",
};

const DetailCard = () => {
  return (
    <section className="m-3 sm:m-10">
      <article className="max-w-md mx-auto">
        <Flicking
          hideBeforeInit={true}
          circular={true}
          align="center"
          bound={true}
          className="rounded-t-lg"
        >
          {Object.entries(carouselList).map(([key, value]) => (
            <div className="mr-2" key={key}>
              <Image
                src={value}
                alt={key}
                width={448}
                height={448}
                objectFit="cover"
              />
            </div>
          ))}
        </Flicking>

        <div className="mt-[-7px] p-5 bg-white rounded-b-lg text-gray-700">
          <h1 className="text-4xl font-bold mb-2">어쩌면 해피엔딩</h1>
          <p>연세대학교 뮤지컬 소모임 ma:he 마헤</p>
          <p className="font-semibold underline ">
            2022.05.12 - 2022.05.15 북아현아트홀
          </p>
        </div>
      </article>
    </section>
  );
};

export default DetailCard;
