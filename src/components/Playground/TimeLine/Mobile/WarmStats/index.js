import React from "react";

const data = [
  {
    number: 7,
    value: 11,
    color: "#FF005C",
    percentage: 89,
  },
  {
    number: 3,
    value: 12,
    color: "#FF005C",
    percentage: 78,
  },
  {
    number: 5,
    value: 14,
    color: "#FF005C",
    percentage: 90,
  },
  {
    number: 4,
    value: 8,
    color: "#FF005C",
    percentage: 100,
  },
  {
    number: 53,
    value: 4,
    color: "#00C3F3",
    percentage: 78,
  },
  {
    number: 23,
    value: 5,
    color: "#00C3F3",
    percentage: 89,
  },
  {
    number: 40,
    value: 6,
    color: "#00C3F3",
    percentage: 66,
  },
  {
    number: 50,
    value: 66,
    color: "#00C3F3",
    percentage: 91,
  },
];

const WarmStats = () => {
  return (
    <div className="flex flex-col gap-4 text-[14px] mt-5">
      <div className="flex px-2">
        <div className="w-1/2 text-left text-[#FF005C] text-[18px] font-bold flex items-center gap-2 justify-start">
          <img src="./assets/icons/hot.png" alt="hot" className="w-[50px]" />
          Hot
        </div>
        <div className="w-1/2 text-right text-[18px] font-bold text-[#00C3F3] flex items-center gap-2 justify-end">
          <img src="./assets/icons/cold.png" alt="cold" className="w-[50px]" />
          Cold
        </div>
      </div>
      <div className="flex overflow-hidden w-full gap-2">
        {data.map((item, i) => (
          <div
            className="flex flex-col gap-2"
            key={i}
            style={{ width: `${100 / 8}%` }}
          >
            <div className="flex h-[50px] w-full items-end">
              <div
                className="flex justify-center items-end rounded-md p-1 text-white w-full"
                style={{
                  background: item.color,
                  height: `${item.percentage}%`,
                }}
              >
                {item.value}
              </div>
            </div>
            <div
              className="font-bold text-[16px] text-center"
              style={{ color: item.color }}
            >
              {item.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarmStats;
