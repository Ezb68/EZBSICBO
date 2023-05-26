import React from "react";

const Upper = () => {
  return (
    <div className="flex gap-3 justify-between items-center">
      <div className="grid grid-cols-3 gap-3 w-[55%]">
        <div className="col-span-1 h-[70px] rounded-[9px] border border-[#FF989F]"></div>
        <div className="col-span-1 rounded-[9px] border border-[#FF989F]"></div>
        <div className="col-span-1 rounded-[9px] border border-[#FF989F]"></div>
      </div>
      <div className="flex-1 flex gap-3">
        <div className="w-1/2 flex justify-end p-3 flex-1 border-l border-l-[#FF989F]">
          <p className="text-white font-bold text-[14px]">Tổng điểm</p>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div className="w-[75px] h-[30px] border border-[#FF989F]"></div>
          <div className="w-[75px] h-[30px] border border-[#FF989F]"></div>
        </div>
      </div>
    </div>
  );
};

export default Upper;
