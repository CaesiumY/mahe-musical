import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="sm:mx-auto">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
