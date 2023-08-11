import './globals.css'
import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <meta property="og:url" content="https://mobile-marriage.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="모바일 청첩장" />
        <meta property="og:description" content="김상연 최은빈 결혼합니다." />
        <meta property="og:image" content="https://user-images.githubusercontent.com/73007012/259082689-ba6eb18d-b20b-426c-82c9-69b11de79a60.png" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
