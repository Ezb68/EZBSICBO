import React from "react";
import HealthBar from "./HealthBar";

const Card = ({ data }) => {
  return (
    <div className="flex border border-[#7C1F58] rounded-[5px] w-1/3 p-[8px] xs:gap-1 sm:gap-2">
      {data.side === "right" && <HealthBar data={data} />}
      <div className={`h-full flex-1 flex flex-col`}>
        <div className="flex-1 flex-col items-center flex">
          <p
            className={`xs:text-[11px] sm:text-[14px] font-bold text-center`}
            style={{ color: data.color }}
          >
            {data.name}
          </p>
          <span className="text-white text-[12px]">{data.type}</span>
        </div>
        <div className="justify-between items-center text-white xs:text-[11px] sm:text-[12px] flex">
          <div className="flex items-center gap-1">
            <img
              src="./assets/main/total.png"
              alt="total"
              className="w-3 h-3"
            />
            <p>{data.totalCoin}</p>
          </div>
          <div className="flex items-center gap-1">
            <img src="./assets/main/user.png" alt="users" className="w-3 h-3" />
            <p>{data.users}</p>
          </div>
        </div>
      </div>
      {data.side === "left" && <HealthBar data={data} />}
    </div>
  );
};

export default Card;
