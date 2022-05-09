import { useRouter } from "next/router";
import React, { useEffect } from "react";

const RedirectComingSoon = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/comingSoon");
  }, [router]);

  return <div>로딩 중...</div>;
};

export default RedirectComingSoon;
