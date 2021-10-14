import React from "react";
import { BookTwoTone } from "@ant-design/icons";
import { Typography } from "antd";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Typography.Title
          level={4}
          style={{
            display: "flex",
            alignItems: "center",
            color: "lightblue",
            marginTop: 16,
            marginLeft: 40,
          }}
        >
          <BookTwoTone style={{ marginRight: 2 }} />
          <span>Book App</span>
        </Typography.Title>
      </a>
    </Link>
  );
};

export default Logo;
