import MetaTags from "@/components/common/MetaTags";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const ComingSoon = () => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>coming soon</title>
        <meta name="description" content="coming soon" />
        <meta property="og:image" content={"/images/front.jpg"} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex items-center justify-center h-screen text-center">
        <div className="text-8xl font-bold rounded-full bg-pink px-5 py-10 select-none">
          Coming Soon!
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
