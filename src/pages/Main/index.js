import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PlayGround from "../../components/Playground";
import Layout from "../../components/Layouts/Layout";

const Main = () => {
  return (
    <Layout>
      <Header />
      <div className="flex xs:h-full md:h-[calc(100vh_-_60px)] xs:relative md:fixed w-[100vw]">
        <PlayGround />
        <Sidebar />
      </div>
    </Layout>
  );
};

export default Main;
