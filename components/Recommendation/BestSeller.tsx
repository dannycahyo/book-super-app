import React, { useState, useEffect } from "react";
import {
  Col,
  Typography,
  List,
  Card,
  Image,
  Space,
  Button,
  Avatar,
  Divider,
  Row,
  Input,
  Result,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Best5SellerBook } from "@type/Book";

const BestSeller = () => {
  const IconText = ({ icon, text }: any) => (
    <Space size="small">
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const [searchValue, setSearchValue] = useState<string>("");

  const [books, setBooks] = useState<Best5SellerBook[]>([]);

  console.log(books);

  const filteredBooks = books?.filter((book) => {
    return book.title
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  useEffect(() => {
    async function getRecommendationBook() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_5BEST_SELLER_BOOK}?api-key=${process.env.NEXT_PUBLIC_API_KEY} `
      );
      const result = await res.json();
      const listBooks = result.results.lists.map((book: any) => book.books);

      let finalBooks: any[] = [];

      for (const value of listBooks) {
        finalBooks = finalBooks.concat(value);
      }

      setBooks(finalBooks);
    }
    getRecommendationBook();
  }, []);

  return (
    <Col
      xxl={24}
      xl={22}
      lg={18}
      md={24}
      sm={16}
      xs={24}
      className="2xl:px-4 xl:px-8 mt-4"
    >
      <Typography.Title level={2} style={{ color: "#3182CE" }}>
        Best Seller
      </Typography.Title>
      <Divider />
      <Row justify="center" align="middle">
        <Col xxl={10} xl={12} lg={14} md={14} sm={16} xs={18}>
          <Input.Search
            style={{ color: "#3182CE" }}
            className="mb-8"
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
      {filteredBooks?.length === 0 ? (
        <Result status="404" title="404" subTitle="Can't Find Your Book" />
      ) : (
        <List
          grid={{
            gutter: 42,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 5,
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            responsive: true,
            position: "bottom",
            pageSize: 20,
          }}
          dataSource={filteredBooks}
          renderItem={(book) => (
            <List.Item>
              <Card
                actions={[
                  <IconText
                    icon={UserOutlined}
                    text={book.author}
                    key={book.title}
                  />,
                  <Button
                    style={{
                      background: "#3182CE",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    key={book.title}
                    onClick={() => {}}
                  >
                    Buy This Book
                  </Button>,
                  <IconText
                    icon={UserOutlined}
                    text={book.price}
                    key={book.title}
                  />,
                ]}
                cover={
                  <Image
                    src={book.book_image}
                    alt="Book Image"
                    style={{ height: 320, width: 400 }}
                    preview={false}
                  />
                }
                hoverable
              >
                <Card.Meta
                  avatar={
                    <Avatar src="https://image.pngaaa.com/538/21538-middle.png" />
                  }
                  title={
                    <Typography.Title style={{ color: "#3182CE" }} level={5}>
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
  );
};

export default BestSeller;
