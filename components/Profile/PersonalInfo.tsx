import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { useAuth } from "@hooks/useAuth";

const PersonalInfo = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const auth = useAuth();

  const userData = auth.user?.data;
  // console.log(userData);

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
              defaultValue={userData?.username}
              value={userName}
            />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input
              allowClear
              defaultValue={userData?.email}
              value={emailValue}
            />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input
              allowClear
              defaultValue={userData?.password}
              value={passwordValue}
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Save Changes</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default PersonalInfo;
