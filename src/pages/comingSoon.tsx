import MetaTags from "@/components/common/MetaTags";
import { useRouter } from "next/router";
import React from "react";

const ComingSoon = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="ComingSoon" pathname={pathname} />

      <section className="flex items-center justify-center h-screen text-center">
        <div className="text-8xl font-bold rounded-full bg-pink px-5 py-10 select-none">
          Coming Soon!
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
