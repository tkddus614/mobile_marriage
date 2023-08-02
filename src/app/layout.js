import './globals.css'

export const metadata = {
  title: 'Mobile Wedding',
  description: 'Mobile Wedding',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}