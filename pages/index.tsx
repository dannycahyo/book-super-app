import React from "react";
import Heroes from "@components/Home/Heroes";
import Guidance from "@components/Home/Guidance";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Heroes />
      <Guidance />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
