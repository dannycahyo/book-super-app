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
  Row,
  Input,
  Select,
  Result,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BestSellerBook } from "@type/Book";

const Recommendation = () => {
  const IconText = ({ icon, text }: any) => (
    <Space size="small">
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const [searchValue, setSearchValue] = useState<string>("");

  const [books, setBooks] = useState<BestSellerBook[]>([]);

  const [bookType, setBookType] = useState<string>("hardcover-fiction");

  const optionValue = [
    "hardcover-fiction",
    "e-book-fiction",
    "combined-print-and-e-book-nonfiction",
    "trade-fiction-paperback",
    "paperback-nonfiction",
    "childrens-middle-grade-hardcover",
    "picture-books",
    "series-books",
    "young-adult-hardcover",
    "audio-fiction",
    "graphic-books-and-manga",
    "mass-market-monthly",
    "middle-grade-paperback-monthly",
    "young-adult-paperback-monthly",
  ];

  const filteredBooks = books?.filter((book) => {
    return book.title
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  useEffect(() => {
    async function getRecommendationBook() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RECOMMENDATION_BOOK}/${bookType}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY} `
      );
      const result = await res.json();
      setBooks(result.results?.books);
    }
    getRecommendationBook();
  }, [bookType]);

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
      <Row justify="space-between" className="py-8">
        <Col span={12}>
          <Typography.Title
            style={{ color: "#3182CE", textAlign: "center" }}
            level={4}
            className="flex justify-start"
          >
            Filter The Books
          </Typography.Title>
          <Select
            className="w-80"
            onChange={(value: string) => setBookType(value)}
            value={bookType}
          >
            {optionValue.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <Typography.Title
            style={{ color: "#3182CE", textAlign: "center" }}
            level={4}
            className="flex justify-start"
          >
            Find The Books
          </Typography.Title>
          <Input.Search
            style={{ color: "#3182CE" }}
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
            pageSize: 8,
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

export default Recommendation;
