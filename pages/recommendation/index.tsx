import React from "react";
import Layout from "@containers/Layout/Layout";
import Recommendation from "@components/Recommendation/Recommendation";
import BestSeller from "@components/Recommendation/BestSeller";
import { Row } from "antd";

const RecommendationPage = () => {
  return (
    <Layout>
      <Row>
        <Recommendation />
        <BestSeller />
      </Row>
    </Layout>
  );
};

export default RecommendationPage;
