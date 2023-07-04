import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Savio Mascarenhas | Frontend Developer</title>
        <link rel="shortcut icon" href="/vercel.svg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
