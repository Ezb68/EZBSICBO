import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="flex border border-[#7C1F58] rounded-[5px] justify-center"
      style={{ width: `${100 / 8}%` }}
    >
      <div className="flex flex-col text-white p-1 justify-between gap-1 items-center">
        <p className="font-bold sm:text-[14px]">{data.value}</p>
        <p className="text-[14px]">{data.type}</p>
      </div>
    </div>
  );
};

export default Card;
