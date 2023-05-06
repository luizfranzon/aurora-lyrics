import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#4a3a52" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <body className="bg-purple-aurora">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
