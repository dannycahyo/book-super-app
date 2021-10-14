import React from "react";
import Logo from "./Logo";
import { Layout, Menu, Typography } from "antd";
import Link from "next/link";

const Header = () => {
  const { Header } = Layout;
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <Logo />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="/mybooks">
          <Link href="/mybooks" passHref>
            <a>
              <Typography.Title
                level={5}
                style={{
                  color: "lightblue",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                My Books
              </Typography.Title>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/upcomingbooks">
          <Link href="/upcomingbooks" passHref>
            <a>
              <Typography.Title
                level={5}
                style={{
                  color: "lightblue",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                Up Coming Books
              </Typography.Title>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;
