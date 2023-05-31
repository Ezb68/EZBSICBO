import React from "react";

const Screen = () => {
  return (
    <div className="flex-1 w-[100vw] h-full relative">
      <div className="absolute top-5 right-5 xs:w-[80px] sm:w-[100px] justify-center items-center xs:text-[14px] sm:text-[16px] xs:flex md:hidden">
        <p className="text-white absolute pinkTextColor">Đang lắc</p>
        <img src="./assets/icons/round.png" alt="" />
      </div>
      <div className="absolute bottom-5 left-5 flex-col gap-3 xs:flex md:hidden">
        <button
          className="flex justify-between xs:w-[110px] sm:w-[150px] h-[30px] items-center px-2 pinkBorderColor"
          style={{
            background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
          }}
        >
          <span className="yellowTextColor xs:text-[12px] sm:text-[14px]">
            No.5 34232
          </span>
        </button>
        <button
          className="flex justify-between xs:w-[110px] sm:w-[150px] h-[30px] items-center px-2 pinkBorderColor"
          style={{
            background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
          }}
        >
          <img src="./assets/sidebar/updown.png" alt="updown" />
          <span className="pinkTextColor xs:text-[12px] sm:text-[14px]">
            50-2.5k
          </span>
        </button>
      </div>
      <img
        src="./assets/main/table.png"
        alt="table"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Screen;
