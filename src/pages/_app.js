import Head from "next/head";
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mobile Wedding</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
