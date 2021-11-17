import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import axios from "axios";
import useToken from "@hooks/useToken";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";

const Login = () => {
  const { userJwt, setUserJwt } = useToken();
  const router = useRouter();

  const auth = useAuth();

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const handleLogin = async () => {
    const result = auth.login(emailValue, passwordValue);
    console.log("This is the result", result);
  };

  // const handleLoginButton = () => {
  //   const user = {
  //     email: emailValue,
  //     password: passwordValue,
  //   };

  //   axios({
  //     method: "POST",
  //     url: `http://localhost:3001/login`,
  //     data: user,
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       console.log(response.data);
  //       const token = response.data.token;
  //       if (token) {
  //         setUserJwt(token);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // if (userJwt) {
  //   router.push("/");
  // }

  return (
    <Row justify="center" align="middle" className="py-36 min-h-screen">
      <Col span={6}>
        <Typography.Title className="text-center" style={{ color: "#3182CE" }}>
          Login{" "}
        </Typography.Title>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
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
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
