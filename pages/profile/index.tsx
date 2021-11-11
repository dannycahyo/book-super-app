import React, { useEffect } from "react";
import Layout from "@containers/Layout/Layout";
import { Tabs, Row } from "antd";
import { UserOutlined, FolderOpenOutlined } from "@ant-design/icons";
import PersonalInfo from "@components/Profile/PersonalInfo";

const ProfilePage = () => {
  useEffect(() => {
    async function handleGetAccount() {
      const res = await fetch("/api/auth/accountinfo");
      const result = await res.json();
      console.log(result);
    }
    handleGetAccount();
  }, []);

  return (
    <Layout>
      <Row justify="center" align="middle">
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane
            tab={
              <span>
                <UserOutlined />
                Profile
              </span>
            }
            key="1"
          >
            <PersonalInfo />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <FolderOpenOutlined />
                Save Quotes
              </span>
            }
            key="2"
          >
            Tab 2
          </Tabs.TabPane>
        </Tabs>
      </Row>
    </Layout>
  );
};

export default ProfilePage;
