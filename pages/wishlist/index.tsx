import React from "react";
import AddBook from "@components/Wishlist/AddBook";
import ListBook from "@components/Wishlist/ListBook";
import Layout from "@containers/Layout/Layout";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { Row } from "antd";
import { handleGetBooks } from "@hooks/useFetchBook";
import { Book } from "@type/Book";

const UpComingBooks = () => {
  const { data: allBooks } = useQuery<Book[]>("books", handleGetBooks);

  return (
    <Layout>
      <Row justify="center" align="middle">
        <AddBook />
        <ListBook books={allBooks} />
      </Row>
    </Layout>
  );
};

export default UpComingBooks;

export async function getStaticProps(): Promise<{
  props: {};
  revalidate: number;
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("books", handleGetBooks);

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}
