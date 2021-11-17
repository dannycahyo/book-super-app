import React from "react";
import AddBook from "@components/Wishlist/AddBook";
import ListBook from "@components/Wishlist/ListBook";
import Layout from "@containers/Layout/Layout";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { Row } from "antd";
import { handleGetBooks } from "@hooks/useFetchBook";
import { Book } from "@type/Book";
import NotAuthenticated from "@containers/NotAuthenticated";
import useToken from "@hooks/useToken";

const UpComingBooks = () => {
  const { userJwt } = useToken();

  const { data: allBooks } = useQuery<Book[]>("books", handleGetBooks);

  return (
    <div>
      {userJwt ? (
        <Layout>
          <Row justify="center" align="middle">
            <AddBook />
            <ListBook books={allBooks} />
          </Row>
        </Layout>
      ) : (
        <NotAuthenticated />
      )}
    </div>
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
