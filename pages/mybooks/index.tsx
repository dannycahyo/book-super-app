import React, { useState } from "react";
import DetailBook from "@components/My Book/DetailBook";
import FindBook from "@components/My Book/FindBook";
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
  Result,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { RiBookMarkFill } from "react-icons/ri";
import { Book } from "@type/Book";
import { FormLayout } from "antd/lib/form/Form";
import { handleGetBooks } from "@hooks/useFetchBook";
import useFetchBook from "@hooks/useFetchBook";

const MyBook = () => {
  const { data: allBooks } = useQuery<Book[]>("books", handleGetBooks);

  const { editBook, deleteBook } = useFetchBook();

  const [searchValue, setSearchValue] = useState<string>("");

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const [isOpenDetailBook, setIsOpenDetailBook] = useState<boolean>(false);

  const [isEditDetailBook, setIsEditDetailBook] = useState<boolean>(false);

  const [titleValue, setTitleValue] = useState<string>("");
  const [authorValue, setAuthorValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const [imageValue, setImageValue] = useState<string>("");
  const [reasonValue, setReasonValue] = useState<string>("");

  const [formLayout, setFormLayout] = useState<FormLayout>("vertical");

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

  const handleFinishEdit = () => {
    const editedBook = {
      title: titleValue,
      author: authorValue,
      category: categoryValue,
      price: priceValue,
      image: imageValue,
      isBuyed: true,
      reason: reasonValue,
      _id: selectedBook?._id ?? "",
    };
    editBook(editedBook);
    setSelectedBook(editedBook);
    setIsEditDetailBook(false);
  };

  const handleEditDetailBook = (layout: FormLayout = "horizontal") => {
    setFormLayout(layout);
    setIsEditDetailBook(true);
    if (selectedBook) {
      setTitleValue(selectedBook.title);
      setAuthorValue(selectedBook.author);
      setPriceValue(selectedBook.price);
      setCategoryValue(selectedBook.category);
      setImageValue(selectedBook.image);
      setReasonValue(selectedBook.reason);
    }
  };

  const handleDeleteBook = (_id: string) => {
    deleteBook({
      title: titleValue,
      author: authorValue,
      category: categoryValue,
      price: priceValue,
      image: imageValue,
      isBuyed: true,
      reason: reasonValue,
      _id,
    });
    setIsOpenDetailBook(false);
    setSelectedBook(null);
  };

  const IconText = ({ icon, text }: any) => (
    <Space size="small">
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div>
      <FindBook searchValue={searchValue} setSearchValue={setSearchValue} />
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
        {selectedBook && (
          <>
            <DetailBook selectedBook={selectedBook} />
            <Space size="middle">
              <Button
                type="primary"
                onClick={() => handleEditDetailBook(formLayout)}
              >
                Edit
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => handleDeleteBook(selectedBook._id)}
              >
                Delete
              </Button>
            </Space>
          </>
        )}
      </Modal>
      <Modal
        title={
          <Typography.Title style={{ color: "#3182CE" }} level={4}>
            My Books
          </Typography.Title>
        }
        width={700}
        centered
        visible={isEditDetailBook}
        onOk={() => setIsEditDetailBook(false)}
        onCancel={() => setIsEditDetailBook(false)}
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
              value={titleValue}
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTitleValue(event.target.value)
              }
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
              value={authorValue}
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAuthorValue(event.target.value)
              }
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
              value={categoryValue}
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCategoryValue(event.target.value)
              }
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
              value={priceValue}
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPriceValue(event.target.value)
              }
            />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Title style={{ color: "#3182CE" }} level={5}>
                Image
              </Typography.Title>
            }
            htmlFor="image"
          >
            <Input
              id="image"
              value={imageValue}
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setImageValue(event.target.value)
              }
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
              value={reasonValue}
              allowClear
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setReasonValue(event.target.value)
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleFinishEdit}>
              Finish
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MyBook;

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
