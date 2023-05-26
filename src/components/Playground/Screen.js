import React from "react";

const Screen = () => {
  return (
    <div className="flex-1 w-full h-full relative">
      <div className="absolute top-5 right-5 w-[100px] justify-center items-center text-[16px] sm:flex md:hidden">
        <p className="text-white absolute pinkTextColor">Đang lắc</p>
        <img src="./assets/icons/round.png" alt="" />
      </div>
      <div className="absolute bottom-5 left-5 flex-col gap-3 sm:flex md:hidden">
        <button
          className="flex justify-between w-[150px] h-[30px] items-center px-2 pinkBorderColor"
          style={{
            background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
          }}
        >
          <span className="yellowTextColor text-[14px]">No.5 34232</span>
        </button>
        <button
          className="flex justify-between w-[150px] h-[30px] items-center px-2 pinkBorderColor"
          style={{
            background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
          }}
        >
          <img src="./assets/sidebar/updown.png" alt="updown" />
          <span className="pinkTextColor text-[14px]">50-2.5k</span>
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
