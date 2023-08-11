"use client";

import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <meta property="og:url" content="https://mobile-marriage.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="모바일 청첩장" />
        <meta property="og:description" content="김상연 최은빈 결혼합니다." />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/73007012/259082689-ba6eb18d-b20b-426c-82c9-69b11de79a60.png"
        />
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js"
          integrity="sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
