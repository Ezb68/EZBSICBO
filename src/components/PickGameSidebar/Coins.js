import React from "react";

const Coins = () => {
  return (
    <div className="flex flex-col justify-center items-center px-3 py-5 gap-3 border-b border-b-[#767676] last:border-b-0">
      <div className="flex gap-2 items-center w-full py-4">
        <img src="./assets/coin.png" alt="coin" className="w-[40px] h-[40px]" />
        <p className="text-[#FDDA72] font-bold border-b border-b-[#FDDA72] flex-1">
          550.000 VND
        </p>
      </div>
      <button className="relative py-5 w-full h-[40px]">
        <p className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold">
          MrKevin
        </p>
        <img
          src="./assets/teal-btn.png"
          alt="button"
          className="absolute top-0 left-0"
        />
      </button>
    </div>
  );
};

export default Coins;
