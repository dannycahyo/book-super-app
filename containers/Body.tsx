import React, { ReactNode } from "react";
import { Layout, Breadcrumb } from "antd";
import Link from "next/link";

const Body = ({ children }: { children: ReactNode }) => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: "0 25px" }}>
      <Breadcrumb style={{ marginBottom: 12 }}>
        <Link passHref href="/">
          <a>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </a>
        </Link>
        <Link passHref href="/mybooks">
          <a>
            <Breadcrumb.Item>My Books</Breadcrumb.Item>
          </a>
        </Link>
        <Link passHref href="/upcomingbooks">
          <a>
            <Breadcrumb.Item>Upcoming Book</Breadcrumb.Item>
          </a>
        </Link>
      </Breadcrumb>
      <div style={{ padding: 15, background: "#fff" }}>{children}</div>
    </Content>
  );
};

export default Body;
