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
        <Breadcrumb.Item>
          <Link passHref href="/mybooks">
            <a>My Books</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link passHref href="/upcomingbooks">
            <a>Upcoming Book</a>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 15, background: "#fff" }}>{children}</div>
    </Content>
  );
};

export default Body;
