import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Header from "@containers/Header";
import Footer from "@containers/Footer";
import Body from "@containers/Body";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Book App</title>
        <meta
          name="description"
          content="Book App will help you manage your book properly "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Body>
          <Component {...pageProps} />
        </Body>
        <Footer />
      </Layout>
    </div>
  );
}
export default MyApp;
