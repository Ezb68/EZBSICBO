import React from "react";

const PlayerStats = () => {
  return (
    <div className="flex flex-col gap-2 text-[14px]">
      <div className="flex">
        <p className="w-1/2 text-center text-[#00C3F3] text-[18px] font-bold">
          Xỉu
        </p>
        <p className="w-1/2 text-center text-[18px] font-bold text-[#FF005C]">
          Tài
        </p>
      </div>
      <div className="flex rounded-full h-[30px] overflow-hidden w-full">
        <div
          className="h-full bg-[#00C3F3] font-bold text-white flex justify-center items-center"
          style={{
            width: "40%",
          }}
        >
          40%
        </div>
        <div
          className="h-full bg-[#60BF3F] font-bold text-white flex justify-center items-center"
          style={{
            width: "10%",
          }}
        >
          10%
        </div>
        <div
          className="h-full bg-[#FF005C] font-bold text-white flex justify-center items-center"
          style={{
            width: "50%",
          }}
        >
          50%
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
