import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "@/components/common/Header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Header color={pathname === "/" ? "ivory" : "navy"} />
      <main className="sm:mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
