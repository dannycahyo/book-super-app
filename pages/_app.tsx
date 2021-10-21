import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Header from "@containers/Header";
import Footer from "@containers/Footer";
import Body from "@containers/Body";
import Head from "next/head";
import React, { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

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
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </Body>
        <Footer />
      </Layout>
    </div>
  );
}
export default MyApp;
