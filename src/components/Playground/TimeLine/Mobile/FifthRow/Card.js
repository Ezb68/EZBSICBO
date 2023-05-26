import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="flex border border-[#7C1F58] rounded-[5px] justify-center"
      style={{ width: `17.9%` }}
    >
      <div className="flex p-1 justify-between gap-2 items-center">
        <img
          src={`./assets/cube/${data.one}.png`}
          alt={`${data.one}`}
          className="w-[15px] h-[15px]"
        />
        <img
          src={`./assets/cube/${data.two}.png`}
          alt={`${data.two}`}
          className="w-[15px] h-[15px]"
        />
      </div>
    </div>
  );
};

export default Card;
