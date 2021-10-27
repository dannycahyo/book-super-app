import React from "react";
import Layout from "@containers/Layout/Layout";
import Heroes from "@components/Home/Heroes";
import Guidance from "@components/Home/Guidance";

const Home = () => {
  return (
    <Layout>
      <Heroes />
      <Guidance />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
