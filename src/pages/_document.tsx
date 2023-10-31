import { Html, Head, Main, NextScript } from 'next/document'

import styles from '@/styles/Home.module.css'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
