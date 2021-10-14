import React from "react";
import { Col, Layout, Row, Typography } from "antd";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        alignItems: "center",
        textAlign: "center",
        background: "#001529",
        color: "white",
        marginTop: 40,
      }}
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
