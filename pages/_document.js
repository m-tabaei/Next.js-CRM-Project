import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="En" dir="ltr">
        <Head>
            <meta name="author" content="Mohammad Tabaei"/>
        </Head>
          <body>
            <Main/>
              <NextScript />
            
          </body>
      </Html>
    );
  }
}

export default MyDocument;
