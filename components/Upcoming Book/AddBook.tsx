import React, { useState } from "react";
import { Button, Typography, Col, Result, Form, Modal, Input } from "antd";
import { BulbOutlined, CaretUpOutlined } from "@ant-design/icons";
import { FormLayout } from "antd/lib/form/Form";
import useFetchBook from "@hooks/useFetchBook";
import Image from "next/image";

const AddBook = () => {
  const { addBook } = useFetchBook();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [titleValue, setTitleValue] = useState<string>("");
  const [authorValue, setAuthorValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const [imageValue, setImageValue] = useState<string>("");
  const [reasonValue, setReasonValue] = useState<string>("");

  const [formLayout, setFormLayout] = useState<FormLayout>("vertical");

  const handleShowModal = (layout: FormLayout = "vertical") => {
    setFormLayout(layout);
    setIsModalVisible(true);
  };

  const handleSubmitForm = () => {
    addBook({
      title: titleValue,
      author: authorValue,
      category: categoryValue,
      price: priceValue,
      image: imageValue,
      reason: reasonValue,
      isBuyed: false,
    });
    setIsModalVisible(false);
  };

  return (
    <>
      <Col xxl={12} xl={10} lg={20} md={20} sm={20} xs={20}>
        <div className="flex items-center flex-col mt-16">
          <Typography.Title
            style={{ color: "#3182CE", textAlign: "center" }}
            level={3}
          >
            This Is The List Of Your Future Book
          </Typography.Title>
          <Button
            size="large"
            type="primary"
            style={{
              background: "#3182CE",
              color: "white",
              borderRadius: 10,
              marginBottom: 15,
              fontWeight: "bold",
            }}
            onClick={() => {
              handleShowModal(formLayout);
            }}
          >
            Add More Book
            <CaretUpOutlined />
          </Button>
        </div>
        <Image
          height={550}
          width={650}
          src="/undraw_book_lover_mkck.svg"
          alt="Banner"
        />
        <Result
          icon={<BulbOutlined />}
          title={`" When I have a little money, I buy books; and if I have any left, I buy food and clothes "`}
          subTitle="~ Erasmus"
        />
      </Col>
      <Modal
        title={
          <Typography.Title style={{ color: "#3182CE" }} level={4}>
            Up Coming Books
          </Typography.Title>
        }
        width={700}
        centered
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form layout={formLayout}>
          <Form.Item
            label={
              <Typography.Title style={{ color: "#3182CE" }} level={5}>
                Title
              </Typography.Title>
            }
            htmlFor="title"
          >
            <Input
              id="title"
              placeholder="Type The Title Of Your Upcoming Book"
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTitleValue(event.target.value)
              }
              value={titleValue}
            />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Title style={{ color: "#3182CE" }} level={5}>
                Author
              </Typography.Title>
            }
            htmlFor="author"
          >
            <Input
              id="author"
              placeholder="Type The Author Of Your Upcoming Book"
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAuthorValue(event.target.value)
              }
              value={authorValue}
            />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Title style={{ color: "#3182CE" }} level={5}>
                Category
              </Typography.Title>
            }
            htmlFor="category"
          >
            <Input
              id="category"
              placeholder="Type The Category Of Your UpcomingBook"
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCategoryValue(event.target.value)
              }
              value={categoryValue}
            />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Title style={{ color: "#3182CE" }} level={5}>
                Price
              </Typography.Title>
            }
            htmlFor="price"
          >
            <Input
              id="price"
              placeholder="Input the price"
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPriceValue(event.target.value)
              }
              value={priceValue}
            />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Title style={{ color: "#3182CE" }} level={5}>
                Image URL
              </Typography.Title>
            }
            htmlFor="image"
          >
            <Input
              id="image"
              placeholder="Input Link Of The Image"
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setImageValue(event.target.value)
              }
              value={imageValue}
            />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Title style={{ color: "#3182CE" }} level={5}>
                Reason
              </Typography.Title>
            }
            htmlFor="reason"
          >
            <Input.TextArea
              id="reason"
              placeholder="Why you decide to buy the book ?"
              rows={4}
              allowClear
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setReasonValue(event.target.value)
              }
              value={reasonValue}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmitForm}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddBook;
