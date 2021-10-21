import React from "react";
import AddBook from "@components/Upcoming Book/AddBook";
import ListBook from "@components/Upcoming Book/ListBook";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { Row } from "antd";
import { handleGetBooks } from "@hooks/useFetchBook";
import { Book } from "@type/Book";

const UpComingBooks = () => {
  const { data: allBooks } = useQuery<Book[]>("books", handleGetBooks);

  return (
    <Row>
      <AddBook />
      <ListBook books={allBooks} />
    </Row>
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
