import React, { useState } from "react";
import { Modal, Button, Result, Typography } from "antd";
import { useRouter } from "next/router";

const NotAuthenticated = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const router = useRouter();

  return (
    <div>
      <Modal
        title={
          <Typography.Title level={3}>
            You&apos;re Not Authorized
          </Typography.Title>
        }
        visible={isModalVisible}
        onOk={() => setIsModalVisible(true)}
        onCancel={() => setIsModalVisible(true)}
        footer={[
          <Button
            key="register"
            onClick={() => router.push("/register")}
            type="primary"
          >
            Register
          </Button>,
          <Button
            key="login"
            onClick={() => router.push("/login")}
            type="primary"
          >
            Login
          </Button>,
        ]}
      >
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
        />
      </Modal>
    </div>
  );
};

export default NotAuthenticated;
