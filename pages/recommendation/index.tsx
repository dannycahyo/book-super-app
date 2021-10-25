import React from "react";
import Layout from "@containers/Layout/Layout";
import BestSeller from "@components/Recommendation/BestSeller";
import { Row, Typography } from "antd";
import { getBestSellerBooks } from "@hooks/useFetchBook";
import { QueryClient, dehydrate, useQuery } from "react-query";

const Recommendation = () => {
  const { data } = useQuery("best-seller-books", getBestSellerBooks);

  const bestSellerBook = data?.results?.books;

  return (
    <Layout>
      <Row>
        <BestSeller bestSellerBook={bestSellerBook} />
      </Row>
    </Layout>
  );
};

export default Recommendation;

export async function getStaticProps(): Promise<{
  props: {};
  revalidate: number;
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("books", getBestSellerBooks);

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}
