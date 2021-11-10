import React, { ReactNode } from "react";
import { Layout, Breadcrumb } from "antd";
import Link from "next/link";

const Body = ({ children }: { children: ReactNode }) => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: "25px 25px 0px 25px" }}>
      <div className="min-h-screen px-12 py-4" style={{ background: "#fff" }}>
        {children}
      </div>
    </Content>
  );
};

export default Body;
