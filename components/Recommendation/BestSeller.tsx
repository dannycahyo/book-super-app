import React from "react";
import {
  Col,
  Typography,
  List,
  Card,
  Image,
  Space,
  Button,
  Avatar,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BestSellerBook } from "@type/Book";

const BestSeller = ({
  bestSellerBook,
}: {
  bestSellerBook: BestSellerBook[];
}) => {
  const IconText = ({ icon, text }: any) => (
    <Space size="small">
      {React.createElement(icon)}
      {text}
    </Space>
  );

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
        dataSource={bestSellerBook}
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
                  style={{ height: 350, width: 400 }}
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
      ,
    </Col>
  );
};

export default BestSeller;
