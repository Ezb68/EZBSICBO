import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="flex border border-[#7C1F58] rounded-[5px] justify-center"
      style={{ width: `13.8%` }}
    >
      <div className="flex p-1 justify-between gap-1 items-center">
        <img
          src={`./assets/cube/${data}.png`}
          alt={`${data}`}
          className="w-[15px] h-[15px]"
        />
        <img
          src={`./assets/cube/${data}.png`}
          alt={`${data}`}
          className="w-[15px] h-[15px]"
        />
        <img
          src={`./assets/cube/${data}.png`}
          alt={`${data}`}
          className="w-[15px] h-[15px]"
        />
      </div>
    </div>
  );
};

export default Card;
