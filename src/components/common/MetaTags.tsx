import Head from "next/head";
import React, { useMemo } from "react";

interface MetaTagsProps {
  subTitle?: string;
  pathname: string;
}

const MetaTags = ({ subTitle, pathname }: MetaTagsProps) => {
  const title = useMemo(
    () => (subTitle ? `MA:HE | ${subTitle}` : "MA:HE"),
    [subTitle]
  );

  const siteUrl =
    process.env.SITE_URL || "https://musical-ticketing.vercel.app";

  const DEFAULT_DESCRIPTION =
    "연세대학교 뮤지컬 소모임 ma:he 봄 공연 뮤지컬 어쩌면 해피엔딩 2022.05.12 - 2022.05.15 북아현아트홀";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={siteUrl + pathname} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION}></meta>
      <meta property="og:url" content={siteUrl + pathname} />
      <meta property="og:image" content={siteUrl + "/images/front.jpg"} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaTags;