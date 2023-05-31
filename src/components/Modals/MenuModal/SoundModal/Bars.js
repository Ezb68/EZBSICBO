import React from "react";

const Bars = ({ data }) => {
  return (
    <div className="flex xs:gap-3 sm:gap-8 items-center xs:px-[0px] sm:px-[20px]">
      <div className="text-white w-[80px] xs:text-[14px] md:text-[.8vw]">
        {data.name}
      </div>
      <div className="bg-[#505050] h-[10px] flex rounded-[10px] flex-1">
        <div
          className="h-full rounded-[10px]"
          style={{
            width: `${data.value}%`,
            background: "linear-gradient(180deg, #FFCDCC 0%, #FF989F 100%)",
          }}
        ></div>
      </div>
      <div className="w-[20px]">
        <img src="./assets/icons/sound.png" alt="sound" />
      </div>
    </div>
  );
};

export default Bars;
