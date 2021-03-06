import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import Head from "next/head";
import React, { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ProvideAuth } from "@hooks/useAuth";

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

      <ProvideAuth>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ProvideAuth>
    </div>
  );
}
export default MyApp;
