import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}