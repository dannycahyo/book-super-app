import React from "react";
import { Typography, Image, Descriptions } from "antd";
import { Book } from "@type/Book";

const DetailBook = ({ selectedBook }: { selectedBook: Book | null }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
      }}
      className="flex flex-col justify-center items-center mb-16"
    >
      <Image
        className="items-center"
        alt="Detail Book"
        src={selectedBook?.image}
        width={350}
        height={300}
        preview={false}
      />
      <Descriptions
        title={
          <Typography.Title style={{ color: "#3182CE" }} level={4}>
            Detail Book
          </Typography.Title>
        }
        bordered
        layout="vertical"
        column={{ lg: 4, md: 2, sm: 2, xs: 2 }}
      >
        <Descriptions.Item
          label={
            <Typography.Title style={{ color: "#3182CE" }} level={5}>
              Title
            </Typography.Title>
          }
        >
          {selectedBook?.title}
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Typography.Title style={{ color: "#3182CE" }} level={5}>
              Author
            </Typography.Title>
          }
        >
          {selectedBook?.author}
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Typography.Title style={{ color: "#3182CE" }} level={5}>
              Category
            </Typography.Title>
          }
        >
          {selectedBook?.category}
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Typography.Title style={{ color: "#3182CE" }} level={5}>
              Price
            </Typography.Title>
          }
        >
          {selectedBook?.price}
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Typography.Title style={{ color: "#3182CE" }} level={5}>
              Reason
            </Typography.Title>
          }
        >
          {selectedBook?.reason}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default DetailBook;
