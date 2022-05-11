import MetaTags from "@/components/common/MetaTags";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import storyOne from "../images/story/1.webp";
import storyTwo from "../images/story/2.webp";
import storyThree from "../images/story/3.webp";

const MaheStory = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="마헤 이야기" pathname={pathname} />

      <section className="max-w-xl mx-auto mt-24 flex flex-col">
        <Image
          src={storyOne}
          alt="마헤 스토리 첫번째"
          quality={100}
          placeholder="blur"
          layout="responsive"
          priority
        />
        <Image
          src={storyTwo}
          alt="마헤 스토리 두번째"
          quality={100}
          placeholder="blur"
          layout="responsive"
        />
        <Image
          src={storyThree}
          alt="마헤 스토리 세번째"
          quality={100}
          placeholder="blur"
          layout="responsive"
        />
      </section>
    </>
  );
};

export default MaheStory;
