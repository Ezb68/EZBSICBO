import React from "react";
import ActionButton from "./ActionButton";
import Coins from "./Coins";
import Lists from "./Lists";

const LowerBox = () => {
  return (
    <div className="w-full p-6 py-4 text-[12px]">
      <Lists />
      <Coins />
      <div
        className="border border-[#7C1F58] px-5 py-2 mt-4"
        style={{
          background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
        }}
      >
        <p className="text-white">
          Tổng cược:{" "}
          <span className="text-[24px] font-bold yellowTextColor">0</span>
        </p>
      </div>
      <ActionButton />
    </div>
  );
};

export default LowerBox;
