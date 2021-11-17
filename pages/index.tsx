import React from "react";
import Layout from "@containers/Layout/Layout";
import Heroes from "@components/Home/Heroes";
import Guidance from "@components/Home/Guidance";
import NotAuthenticated from "@containers/NotAuthenticated";
import useToken from "@hooks/useToken";

const Home = () => {
  const { userJwt } = useToken();

  return (
    <div>
      {userJwt ? (
        <Layout>
          <Heroes />
          <Guidance />
        </Layout>
      ) : (
        <NotAuthenticated />
      )}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
