import React from "react";
import { Layout as AntdLayout } from "antd";
import Header from "@containers/Header";
import Footer from "@containers/Footer";
import Body from "@containers/Body";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdLayout>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </AntdLayout>
  );
};

export default Layout;
