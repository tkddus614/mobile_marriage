/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="모바일 청첩장" />
          <meta
            property="og:url"
            content="https://mobile-marriage.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="김상연 최은빈 결혼합니다." />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/73007012/259082689-ba6eb18d-b20b-426c-82c9-69b11de79a60.png"
          />
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
