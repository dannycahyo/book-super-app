import React from "react";
import Layout from "@containers/Layout/Layout";
import Recommendation from "@components/Recommendation/Recommendation";
import BestSeller from "@components/Recommendation/BestSeller";
import { Row, Typography } from "antd";
import { getBestSellerBooks, get5BestSellerBooks } from "@hooks/useFetchBook";
import { QueryClient, dehydrate, useQuery } from "react-query";

const RecommendationPage = () => {
  const { data } = useQuery("best-seller-books", getBestSellerBooks);

  const bestSellerBook = data?.results?.books;

  // const { data: best5Book } = useQuery("best-seller", get5BestSellerBooks);

  // const listBooks = best5Book.results.lists.map((book: any) => book.books);

  // let finalBooks: any[] = [];

  // for (let i = 0; i < finalBooks.length; i++) {
  //   finalBooks = finalBooks.concat(listBooks[i]);
  // }

  // console.log(finalBooks);

  return (
    <Layout>
      <Row>
        <Recommendation />
        {/* <BestSeller bestSellerBook={bestSellerBook} /> */}
      </Row>
    </Layout>
  );
};

export default RecommendationPage;

export async function getStaticProps(): Promise<{
  props: {};
  revalidate: number;
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("books", getBestSellerBooks);
  await queryClient.prefetchQuery("best-seller", get5BestSellerBooks);

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}
