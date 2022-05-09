import MetaTags from "@/components/common/MetaTags";
import RedirectComingSoon from "@/components/common/RedirectComingSoon";
import { useRouter } from "next/router";
import React from "react";

const MaheStory = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags subTitle="마헤 이야기" pathname={pathname} />

      <section>
        <RedirectComingSoon />
      </section>
    </>
  );
};

export default MaheStory;
