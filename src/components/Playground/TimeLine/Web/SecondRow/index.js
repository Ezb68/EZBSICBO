import React from "react";
import BetLabel from "../BetLabel";

const SecondRow = () => {
  const data = [
    {
      value: "4",
      num: "1:50",
    },
    {
      value: "5",
      num: "1:16",
    },
    {
      value: "6",
      num: "1:14",
    },
    {
      value: "7",
      num: "1:12",
    },
    {
      value: "8",
      num: "1:8",
      bet: "3000",
    },
    {
      value: "9",
      num: "1:6",
    },
    {
      value: "10",
      num: "1:6",
    },
    {
      value: "11",
      num: "1:6",
    },
    {
      value: "12",
      num: "1:6",
    },
    {
      value: "13",
      num: "1:8",
    },
    {
      value: "14",
      num: "1:12",
    },
    {
      value: "15",
      num: "1:14",
    },
    {
      value: "16",
      num: "1:16",
    },
    {
      value: "17",
      num: "1:50",
    },
  ];

  return (
    <div className="flex border border-[#7C1F58] rounded-[10px] h-[70px]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`h-full flex flex-col relative ${
            item.bet
              ? "border border-[#FFCDCC]"
              : "border-r border-r-[#7C1F58] last:border-r-0"
          }`}
          style={{
            width: `${100 / 14}%`,
            background: item.bet
              ? "linear-gradient(180deg, #7C1F58 0%, #26001A 100%)"
              : "",
          }}
        >
          {item.bet && (
            <div className="absolute top-0 left-0">
              <BetLabel data={item.bet} />
            </div>
          )}
          <div className="flex-1 flex flex-col items-center p-1">
            <p className="lg:text-[20px] xl:text-[24px] font-bold text-white">
              {item.value}
            </p>
          </div>
          <div className="h-[30px] flex justify-center items-center text-white text-[14px]">
            {item.num}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecondRow;
