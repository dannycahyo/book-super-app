import React from "react";
import Logo from "./Logo";
import { Layout, Menu, Typography, Row, Col } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { Header } = Layout;
  const router = useRouter();

  return (
    <Header
      style={{
        marginBottom: 16,
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Row justify="space-between">
        <Col>
          <Logo />
        </Col>
        <Col>
          <Menu theme="dark" mode="horizontal" selectedKeys={[router.asPath]}>
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
                    Upcoming
                  </Typography.Title>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/recommendation">
              <Link href="/recommendation" passHref>
                <a>
                  <Typography.Title
                    level={5}
                    style={{
                      color: "lightblue",
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                  >
                    Recommendation
                  </Typography.Title>
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item key="/profile">
              <Link href="/profile" passHref>
                <a>
                  <Typography.Title
                    level={5}
                    style={{
                      color: "lightblue",
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                  >
                    Profile
                  </Typography.Title>
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default Header;
