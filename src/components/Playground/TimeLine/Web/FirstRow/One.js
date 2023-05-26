import React from "react";
import BetLabel from "../BetLabel";

const One = ({ item }) => {
  return (
    <>
      <div className="flex-1 flex-col items-center p-1 sm:hidden md:flex">
        <p style={{ color: item.color }}>{item.name}</p>
        <p style={{ color: item.color }}>{item.value}</p>
      </div>
      {item.bet && <BetLabel data={item.bet} />}
      <div className="h-[30px] justify-center items-center text-white text-[14px] sm:hidden md:flex">
        {item.num}
      </div>
    </>
  );
};

export default One;
