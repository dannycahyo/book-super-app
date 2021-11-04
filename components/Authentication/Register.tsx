import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import useToken from "@hooks/useToken";
import { useRouter } from "next/router";

const Register = () => {
  const { userJwt, setUserJwt } = useToken();
  const router = useRouter();

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const handleRegister = () => {
    const user = {
      email: emailValue,
      password: passwordValue,
    };
    fetch(`http://localhost:3001/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response: any) => {
        console.log(response);
        console.log(response.data.token);
        const token = response.data.token;
        if (token) {
          setUserJwt(token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (userJwt !== null) {
    router.push("/");
  }

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
