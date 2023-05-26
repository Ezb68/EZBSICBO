import React from "react";
import User from "./User";
import Coins from "./Coins";

const PickGameSidebar = () => {
  return (
    <div className="sm:hidden md:flex flex-col justify-between w-[220px] bg-[#21001B]">
      <div className="flex flex-col">
        <User />
        <Coins />
        <div className="flex flex-col justify-center items-center px-3 py-5 gap-3 border-b border-b-[#767676] last:border-b-0">
          <p className="text-white mb-2">Loại trò chơi</p>
          <button className="relative py-5 w-full h-[40px]">
            <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              Game 1
            </p>
            <img
              src="./assets/pink-btn.png"
              alt="button"
              className="absolute top-0 left-0"
            />
          </button>
          <button className="relative py-5 w-full h-[40px]">
            <p className="text-[#DB3D1A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold">
              Game 2
            </p>
            <img
              src="./assets/chocholette-btn.png"
              alt="button"
              className="absolute top-0 left-0"
            />
          </button>
          <button className="relative py-5 w-full h-[40px]">
            <p className="text-[#DB3D1A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold">
              Game 3
            </p>
            <img
              src="./assets/chocholette-btn.png"
              alt="button"
              className="absolute top-0 left-0"
            />
          </button>
          <button className="relative py-5 w-full h-[40px]">
            <p className="text-[#DB3D1A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold">
              Game 4
            </p>
            <img
              src="./assets/chocholette-btn.png"
              alt="button"
              className="absolute top-0 left-0"
            />
          </button>
          <button className="relative py-5 w-full h-[40px]">
            <p className="text-[#DB3D1A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold">
              Game 5
            </p>
            <img
              src="./assets/chocholette-btn.png"
              alt="button"
              className="absolute top-0 left-0"
            />
          </button>
        </div>
      </div>
      <div className="px-[15px] flex flex-col items-center py-8 gap-2">
        <div className="w-[120px] h-[120px] bg-[#110012]"></div>
        <p className="text-white">Tải APP</p>
      </div>
    </div>
  );
};

export default PickGameSidebar;
