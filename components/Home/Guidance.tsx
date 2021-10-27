import React, { useState } from "react";
import { Row, Col, Typography, Button, Steps, message } from "antd";
import TutorialImg from "../../public/undraw_reading_time_gvg0.svg";
import Image from "next/image";

type Tutorial = {
  title: string;
  content: string;
};

const Guidance = () => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const tutorials: Tutorial[] = [
    {
      title: "Main",
      content:
        "In Landing Page. You will get some of the information about the purpose and the story behind the application created and also some detailed explanation about every page, such as the workflow and feature on it.",
    },
    {
      title: "Second",
      content:
        "My Book Page contains a list of all your own books. Moreover, you can see the detail of your book and manipulate it, for example, edit the content of your current book and also delete it when it is probably lost and borrowed by your friend and never get back.",
    },
    {
      title: "Third",
      content:
        " Upcoming Book Page will help you by reminding you of some of the quotes before unsure about buying a new book and also giving you a chance to manipulate the upcoming book. For example, adding and seeing the list of it.",
    },
  ];

  return (
    <div className="pb-12">
      <Row justify="center" align="middle" className="mt-24">
        <Col xxl={18} xl={20} lg={18} md={20} sm={24} xs={24}>
          <Steps current={current}>
            {tutorials.map((tutorial) => (
              <Steps.Step key={tutorial.title} title={tutorial.title} />
            ))}
          </Steps>
        </Col>
        <Col
          xxl={18}
          xl={20}
          lg={18}
          md={20}
          sm={24}
          xs={24}
          className="items-center min-h-450 mt-12 pt-24 px-24 text-center bg-blue-300 rounded-lg text-black border-black border-1"
        >
          <Image alt="Tutorial" src={TutorialImg} height={250} />
          <Typography.Paragraph className="mr-8 py-4 text-xl">
            {tutorials[current].content}
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xxl={18} xl={20} lg={18} md={20} sm={24} xs={22} className="mt-20">
          {current < tutorials.length - 1 && (
            <Button
              className="w-24"
              size="large"
              type="primary"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === tutorials.length - 1 && (
            <Button
              className="w-24"
              size="large"
              type="primary"
              onClick={() => message.success("Go Ahead & Manage Your Book!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button className="w-24 ml-6" size="large" onClick={() => prev()}>
              Previous
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Guidance;
