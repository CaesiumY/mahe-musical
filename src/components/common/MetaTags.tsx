import Head from "next/head";
import React, { useMemo } from "react";

interface MetaTagsProps {
  subTitle?: string;
  pathname: string;
}

const MetaTags = ({ subTitle, pathname }: MetaTagsProps) => {
  const title = useMemo(
    () =>
      subTitle
        ? `${subTitle} | MA:HE 연세대 뮤지컬 소모임 - 어쩌면 해피엔딩`
        : "MA:HE 연세대 뮤지컬 소모임 - 어쩌면 해피엔딩",
    [subTitle]
  );

  const siteUrl =
    process.env.SITE_URL ||
    "https://www.mahemusical.com" ||
    "https://musical-ticketing.vercel.app";

  const DEFAULT_DESCRIPTION =
    "연세대학교 뮤지컬 소모임 ma:he 마헤 봄 공연 뮤지컬 어쩌면 해피엔딩 2022.05.11 - 2022.05.14 북아현아트홀";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={siteUrl + pathname} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION}></meta>
      <meta property="og:url" content={siteUrl + pathname} />
      <meta property="og:image" content={siteUrl + "/images/preview.jpg"} />

      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default MetaTags;
