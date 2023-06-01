import React from "react";

const BetLabel = ({ data }) => {
  return (
    <div className="flex justify-center py-2 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-[12px] xl:text-[14px] lg:px-1 xl:px-2 rounded-[2px] text-black font-[200]"
        style={{
          background: "linear-gradient(180deg, #FFFDCC 0%, #FFF600 100%)",
        }}
      >
        {data}
      </div>
      <img
        src={`./assets/coins/${data}.png`}
        alt={data}
        className="lg:w-[35px] xl:w-[40px]"
      />
    </div>
  );
};

export default BetLabel;
