import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import  Head  from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Head>
        <title>CRM Emperial</title>
        <meta name="description" content="Emperial company manager customer and sells products"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
