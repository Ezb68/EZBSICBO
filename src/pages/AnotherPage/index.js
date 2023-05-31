import React from "react";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import DataTable from "../../components/DataTable";
import Layout from "../../components/Layouts/Layout";
import MobileDataTable from "../../components/DataTable/MobileDataTable";

const AnotherPage = () => {
  return (
    <Layout>
      <Header />
      <div className="flex xs:h-full md:h-[calc(100vh_-_60px)] xs:relative md:fixed w-full xs:bg-none md:bg-[#110012] xs:px-0 md:px-[7vw] xs:pt-0 md:pt-[40px]">
        <div className="bg-[#1C0017] h-full w-full xs:py-[15px] md:py-[20px] xs:px-[15px] md:px-[2vw]">
          <div className="relative">
            <p className="pinkTextColor xs:text-[18px] md:text-[24px]">
              Báo cáo lịch sử
            </p>
            <button className="absolute xs:right-0 md:-right-[20px] top-[5px] xs:w-[12px] md:w-[20px]">
              <img src="./assets/icons/cancel.png" alt="cancel" />
            </button>
          </div>
          <Filters />
          <DataTable />
          <MobileDataTable />
        </div>
      </div>
    </Layout>
  );
};

export default AnotherPage;
