import Footer from "@/components/common/Footer";
import MetaTags from "@/components/common/MetaTags";
import HeroSection from "@/components/main/HeroSection";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <>
      <MetaTags pathname={pathname} />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;
