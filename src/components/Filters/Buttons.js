import React from "react";

const data = ["Hôm nay", "Hômqua", "Tuần này", "Tuần trước"];

const Buttons = () => {
  return (
    <div className="flex xs:flex-wrap sm:flex-nowrap xs:space-x-0 md:space-x-3 xs:space-y-2 sm:space-y-0 xs:justify-between md:justify-start">
      {data.map((item, i) => (
        <button
          key={i}
          className="rounded-[5px] border border-[#FF005C] text-white p-2 px-5 flex items-center xs:space-x-0 sm:space-x-3 bg-[#110012] xs:text-[14px] lg:text-[1vw] xl:text-[.8vw] xs:w-full h-max sm:w-max"
        >
          <p>{item}</p>
        </button>
      ))}
    </div>
  );
};

export default Buttons;
