import React, { useState } from "react";
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
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BestSellerBook, RecommendationBook } from "@type/Book";
import { useQuery } from "react-query";

const Recommendation = () => {
  const IconText = ({ icon, text }: any) => (
    <Space size="small">
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const { Option } = Select;

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  const [bookType, setBookType] = useState<string>("hardcover-fiction");

  const getRecommendationBook = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RECOMMENDATION_BOOK}/${bookType}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY} `
    );
    return res.json();
  };

  const { data } = useQuery("recommendation", getRecommendationBook);

  const recommendationBook: BestSellerBook[] = data?.results?.books;

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
          <Select defaultValue="lucy" className="w-80" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => setBookType("paperback-nonfiction")}
          >
            Click Me
          </Button>
        </Col>
        <Col span={8}>
          <Input.Search
            style={{ color: "#3182CE" }}
            placeholder="Find Your Book!"
            allowClear
            size="large"
          />
        </Col>
      </Row>
      <List
        grid={{
          gutter: 42,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          responsive: true,
          position: "bottom",
          pageSize: 8,
        }}
        dataSource={recommendationBook}
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
    </Col>
  );
};

export default Recommendation;
