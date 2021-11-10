import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";

const PersonalInfo = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  return (
    <Row justify="center" align="middle" className="py-8">
      <Col span={24}>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item label="Username" name="username">
            <Input
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUserName(event.target.value)
              }
              value={userName}
            />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmailValue(event.target.value)
              }
              value={emailValue}
            />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordValue(event.target.value)
              }
              value={passwordValue}
              type="password"
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default PersonalInfo;
