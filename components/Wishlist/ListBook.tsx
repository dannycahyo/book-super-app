import React from "react";
import {
  Button,
  List,
  Typography,
  Avatar,
  Divider,
  Col,
  Result,
  Space,
  Image,
  message,
} from "antd";
import { CheckOutlined, DollarOutlined } from "@ant-design/icons";
import { RiBookMarkFill } from "react-icons/ri";
import { Book } from "@type/Book";
import useFetchBook from "@hooks/useFetchBook";

const ListBook = ({ books }: { books: Book[] | undefined }) => {
  const IconText = ({ icon, text }: any) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const { editBook } = useFetchBook();

  const handleBuyBook = (book: Book) => {
    editBook({
      title: book.title,
      author: book.author,
      category: book.category,
      price: book.price,
      image: book.image,
      reason: book.reason,
      isBuyed: true,
      _id: book._id,
    });
  };

  const handleFinishBuyBook = () => {
    message.success("You can cek the book on my book page", 12);
  };

  return (
    <Col span={12} xxl={12} xl={14} lg={20} md={24} sm={24} xs={24}>
      <Typography.Title
        style={{ color: "#3182CE", textAlign: "center" }}
        level={3}
      >
        This Is The List Of Your Future Book
      </Typography.Title>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={books?.filter((book) => {
          return !book.isBuyed;
        })}
        footer={
          <Result
            title={`" We buy books because we believe we're buying the time to read "`}
            subTitle="~ Warren Zevon"
          />
        }
        renderItem={(book) => (
          <List.Item
            key={book.price}
            actions={[
              <IconText
                icon={DollarOutlined}
                text={`Rp.${book.price}`}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={RiBookMarkFill}
                text={book.category}
                key="list-vertical-like-o"
              />,
            ]}
            extra={
              <Image
                width={275}
                height={250}
                alt={book.title}
                src={book.image}
              />
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://i.pinimg.com/564x/5e/af/f3/5eaff33f83a4d168947c965bbf4f8c40.jpg" />
              }
              title={
                <Typography.Title style={{ color: "#3182CE" }} level={4}>
                  {book.title}
                </Typography.Title>
              }
              description={book.author}
            />
            {book.reason}
            <Divider type="horizontal" />
            {
              <Button
                style={{
                  background: "#3182CE",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handleBuyBook(book), handleFinishBuyBook();
                }}
              >
                <CheckOutlined />
                Already Buyed
              </Button>
            }
          </List.Item>
        )}
      />
    </Col>
  );
};

export default ListBook;
