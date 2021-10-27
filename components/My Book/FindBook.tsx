import React from "react";
import { Input, Row, Col } from "antd";

const FindBook = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: any;
}) => {
  return (
    <Row justify="center" align="middle" className="mt-8 mb-12">
      <Col xxl={10} xl={12} lg={14} md={14} sm={16} xs={18}>
        <Input.Search
          style={{ color: "#3182CE" }}
          placeholder="Find Your Book!"
          allowClear
          size="large"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
          value={searchValue}
        />
      </Col>
    </Row>
  );
};

export default FindBook;
