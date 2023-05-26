import React from "react";
import Buttons from "./Buttons";
import DataTable from "./DataTable";
import Header from "./Header";

const CoinRangeModal = () => {
  return (
    <div
      className="sm:w-[80%] md:w-[840px] border border-[#FFCDCC] sm:px-[20px] md:px-[30px] py-[20px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(38, 0, 26, 0.95) 0%, rgba(22, 0, 21, 0.95) 100%)",
      }}
    >
      <Header />
      <div className="flex sm:gap-1 md:gap-3 py-5">
        <Buttons />
      </div>
      <DataTable />
    </div>
  );
};

export default CoinRangeModal;
