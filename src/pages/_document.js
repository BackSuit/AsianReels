import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/meta/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/meta/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
