import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#4a3a52" />
      </Head>
      <body className='bg-purple-aurora'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
