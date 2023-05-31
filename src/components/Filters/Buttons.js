import React from "react";

const data = ["Hôm nay", "Hômqua", "Tuần này", "Tuần trước"];

const Buttons = () => {
  return (
    <div className="flex xs:flex-wrap sm:flex-nowrap xs:gap-2 md:gap-3 xs:justify-between md:justify-start">
      {data.map((item, i) => (
        <button
          key={i}
          className="rounded-[5px] border border-[#FF005C] text-white p-2 px-5 flex items-center gap-3 bg-[#110012] xs:text-[14px] md:text-[.8vw] xs:w-[48%] sm:w-max"
        >
          <p>{item}</p>
        </button>
      ))}
    </div>
  );
};

export default Buttons;
