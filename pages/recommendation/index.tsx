import React from "react";
import Layout from "@containers/Layout/Layout";
import Recommendation from "@components/Recommendation/Recommendation";
import BestSeller from "@components/Recommendation/BestSeller";
import { Row } from "antd";
import NotAuthenticated from "@containers/NotAuthenticated";
import useToken from "@hooks/useToken";

const RecommendationPage = () => {
  const { userJwt } = useToken();

  return (
    <div>
      {userJwt ? (
        <Layout>
          <Row>
            <Recommendation />
            <BestSeller />
          </Row>
        </Layout>
      ) : (
        <NotAuthenticated />
      )}
    </div>
  );
};

export default RecommendationPage;
