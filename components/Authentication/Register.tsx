import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { useAuth } from "@hooks/useAuth";

const Register = () => {
  const auth = useAuth();

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const handleRegister = async () => {
    const result = await auth.register(userName, emailValue, passwordValue);
    console.log("This is the result", result);
  };

  return (
    <Row justify="center" align="middle" className="py-36 min-h-screen">
      <Col span={6}>
        <Typography.Title className="text-center" style={{ color: "#3182CE" }}>
          Register{" "}
        </Typography.Title>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUserName(event.target.value)
              }
              value={userName}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmailValue(event.target.value)
              }
              value={emailValue}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              allowClear
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordValue(event.target.value)
              }
              value={passwordValue}
              type="password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="min-w-full"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
