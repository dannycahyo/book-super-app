import React from "react";
import { Col, Layout, Row, Typography } from "antd";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        background: "#001529",
      }}
      className="mt-8 text-white text-center items-center"
    >
      <Row align="middle">
        <Col span={24}>
          <Typography.Title
            level={5}
            style={{
              color: "lightblue",
            }}
          >
            &copy; {new Date().getFullYear()} Book App, Inc. All rights
            reserved.
          </Typography.Title>
        </Col>
      </Row>
    </Footer>
  );
};

export default Footer;
