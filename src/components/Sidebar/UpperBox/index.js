import React from "react";

const UpperBox = () => {
  return (
    <div className="bg-[#110012] p-6">
      <div className="flex justify-between items-center border-y border-y-[#7C1F58] py-3">
        <div className="flex flex-col gap-1">
          <p className="yellowTextColor">Tài xỉu</p>
          <h5 className="yellowTextColor text-[24px] font-bold">Bàn 51</h5>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white">Trò chơi 19934 / 65</p>
          <button
            className="flex justify-between w-[150px] h-[30px] items-center px-2 pinkBorderColor"
            style={{
              background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
            }}
          >
            <img src="./assets/sidebar/updown.png" alt="updown" />
            <span className="pinkTextColor">50-2.5k</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-1">
        <div className="flex items-end">
          <h2 className="text-[64px] text-[#92DBAE]">
            20
            <span className="text-[#92DBAE] text-[16px] ml-2">Giây</span>
          </h2>
        </div>
        <div className="w-full">
          <div className="w-full bg-[#292929] h-[8px]">
            <div
              className="w-[50%] h-full"
              style={{
                background:
                  "linear-gradient(270deg, #C7FFD8 0%, #267A60 100.75%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBox;
