import React, { useState } from "react";
import { Carousel, Row, Col, Typography, Button, Modal } from "antd";
import Image from "next/image";
import firstImg from "../../public/undraw_Reading_book_re_kqpk.svg";
import secondImg from "../../public/undraw_Books_l33t.svg";
import thirdImg from "../../public/undraw_Reading_list_re_bk72.svg";

const Heroes = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <div className="w-11/12 mx-auto">
      <Row justify="center" gutter={[48, 24]} align="middle">
        <Col xxl={14} xl={9} lg={18} md={18} sm={24} xs={24}>
          <div>
            <Typography.Title style={{ color: "#4A5568", fontSize: 40 }}>
              Manage Your Valuable Book
            </Typography.Title>
          </div>
          <div>
            <Typography.Title style={{ color: "#3182CE", fontSize: 38 }}>
              Properly & Systematically
            </Typography.Title>
          </div>
          <div className="w-10/12">
            <Typography.Text>
              As a reader, we all have the same concern about managing our
              current book, or the upcoming book. For instance, we often forget
              with all of the books that we`&apos;`ve read and get confused to
              handle our desire to buy a new book. Book App solves that common
              problem.
            </Typography.Text>
          </div>
          <Button
            size="large"
            type="primary"
            className="bg-blue-600 font-bold text-white mt-16"
            onClick={() => setIsModalVisible(true)}
          >
            Watch Demo
          </Button>
          <>
            <Modal
              title={
                <Typography.Title style={{ color: "#3182CE" }} level={4}>
                  Book App Demo
                </Typography.Title>
              }
              width={700}
              centered
              visible={isModalVisible}
              onOk={() => setIsModalVisible(false)}
              onCancel={() => setIsModalVisible(false)}
            >
              <iframe
                allowFullScreen
                title="Book App Demo"
                src="https://www.youtube.com/embed/3jWfG_iCHB0"
              />
            </Modal>
          </>
        </Col>
        <Col className="mt-14" xxl={10} xl={15} lg={18} md={18} sm={0} xs={0}>
          <Carousel autoplay>
            <Image alt="Heroes" src={firstImg} height={450} width={520} />
            <Image alt="Heroes" src={secondImg} height={450} width={520} />
            <Image alt="Heroes" src={thirdImg} height={450} width={520} />
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default Heroes;
