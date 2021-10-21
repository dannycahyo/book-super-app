import React, { useState } from "react";
import DetailBook from "@components/My Book/DetailBook";
import { dehydrate, QueryClient, useQuery } from "react-query";
import {
  List,
  Button,
  Modal,
  Form,
  Input,
  Typography,
  Card,
  Image,
  Row,
  Col,
  Space,
  Avatar,
  Descriptions,
  Result,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { RiBookMarkFill } from "react-icons/ri";
import { FormLayout } from "antd/lib/form/Form";
import { Book } from "../../Type/Book";

const handleGetBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BOOK_API}`);
  return res.json();
};

const MyBook = () => {
  const { data: allBooks } = useQuery<Book[]>("books", handleGetBooks);

  const [searchValue, setSearchValue] = useState<string>("");

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const [isOpenDetailBook, setIsOpenDetailBook] = useState<boolean>(false);

  const handleOpenDetailBook = (book: Book | null) => {
    setSelectedBook(book);
    setIsOpenDetailBook(true);
  };

  const filteredBooks = allBooks?.filter((book: Book) => {
    return (
      book.title
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()) && book.isBuyed
    );
  });

  const IconText = ({ icon, text }: any) => (
    <Space size="small">
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div>
      <Row justify="space-around" align="middle" style={{ marginBottom: 30 }}>
        <Col xxl={10} xl={12} lg={14} md={14} sm={16} xs={18}>
          <Input.Search
            style={{ marginLeft: 20, color: "#3182CE" }}
            placeholder="Find Your Book!"
            allowClear
            size="large"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(event.target.value)
            }
            value={searchValue}
          />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col xxl={18} xl={24} lg={18} md={24} sm={16} xs={24}>
          {filteredBooks?.length === 0 ? (
            <Result status="404" title="404" subTitle="Can't Find Your Book" />
          ) : (
            <List
              grid={{
                column: 3,
                gutter: 42,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 3,
                xxl: 3,
              }}
              dataSource={filteredBooks}
              renderItem={(book) => (
                <List.Item>
                  <Card
                    actions={[
                      <IconText
                        icon={UserOutlined}
                        text={book.author}
                        key={book._id}
                      />,
                      <Button
                        style={{
                          background: "#3182CE",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        key={book._id}
                        onClick={() => handleOpenDetailBook(book)}
                      >
                        Detail Book
                      </Button>,
                      <IconText
                        icon={RiBookMarkFill}
                        text={book.category}
                        key={book._id}
                      />,
                    ]}
                    hoverable
                    cover={
                      <Image
                        style={{ height: 350 }}
                        src={book.image}
                        alt="BookImg"
                        preview={false}
                      />
                    }
                  >
                    <Card.Meta
                      avatar={
                        <Avatar src="https://image.pngaaa.com/538/21538-middle.png" />
                      }
                      title={
                        <Typography.Title
                          style={{ color: "#3182CE" }}
                          level={4}
                        >
                          {book.title}
                        </Typography.Title>
                      }
                    />
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
      <Modal
        width={700}
        centered
        visible={isOpenDetailBook}
        onOk={() => setIsOpenDetailBook(false)}
        onCancel={() => setIsOpenDetailBook(false)}
      >
        {selectedBook && <DetailBook selectedBook={selectedBook} />}
      </Modal>
    </div>
  );
};

export default MyBook;

export async function getStaticProps(): Promise<{
  props: {};
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("books", handleGetBooks);

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
  };
}
