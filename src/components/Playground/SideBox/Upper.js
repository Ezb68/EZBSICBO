import React from "react";

const Upper = () => {
  return (
    <div className="flex lg:flex-col xl:flex-row space-x-3 sm:space-y-3 xl:space-y-0 justify-between lg:items-start xl:item-center">
      <div className="grid grid-cols-3 space-x-3 lg:w-full xl:w-[55%]">
        <div className="col-span-1 lg:h-[50px] 2xl:h-[70px] rounded-[9px] border border-[#FF989F]"></div>
        <div className="col-span-1 rounded-[9px] border border-[#FF989F]"></div>
        <div className="col-span-1 rounded-[9px] border border-[#FF989F]"></div>
      </div>
      <div className="flex-1 flex lg:flex-col xl:flex-row sm:space-x-0 lg:space-x-3 xs:space-y-2 xl:space-y-0">
        <div className="lg:w-full xl:w-1/2 flex justify-end lg:p-0 xl:p-3 flex-1 lg:border-l-0 xl:border-l border-l-[#FF989F]">
          <p className="text-white font-bold lg:text-[11px] 2xl:text-[14px]">
            Tổng điểm
          </p>
        </div>
        <div className="flex flex-col lg:space-y-2 2xl:space-y-3 items-end">
          <div className="lg:w-full xl:w-[65px] 2xl:w-[75px] lg:h-[25px] 2xl:h-[30px] border border-[#FF989F]"></div>
          <div className="lg:w-full xl:w-[65px] 2xl:w-[75px] lg:h-[25px] 2xl:h-[30px] border border-[#FF989F]"></div>
        </div>
      </div>
    </div>
  );
};

export default Upper;
