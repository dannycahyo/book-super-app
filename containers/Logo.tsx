import React from "react";
import { BookTwoTone } from "@ant-design/icons";
import { Typography } from "antd";
import Link from "next/link";

const Logo = () => {
  return (
    <div style={{ float: "left", marginRight: 20 }}>
      <Link href="/" passHref>
        <a>
          <Typography.Title
            level={4}
            style={{
              display: "flex",
              alignItems: "center",
              color: "lightblue",
              marginTop: 16,
            }}
            className="flex items-center mt-12"
          >
            <BookTwoTone style={{ marginRight: 2 }} />
            <span>Book App</span>
          </Typography.Title>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
