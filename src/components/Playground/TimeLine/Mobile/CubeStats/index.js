import React from "react";

const CubeStats = () => {
  const data = [
    {
      value: 1,
      percentage: 10,
    },
    {
      value: 2,
      percentage: 20,
    },
    {
      value: 3,
      percentage: 15,
    },
    {
      value: 4,
      percentage: 5,
    },
    {
      value: 5,
      percentage: 30,
    },
    {
      value: 6,
      percentage: 20,
    },
  ];

  return (
    <div className="flex flex-wrap py-5 gap-y-5">
      {data.map((item, i) => (
        <div className="flex gap-5 items-center w-1/2 pr-2 even:pl-2" key={i}>
          <div className="flex-1 flex items-center gap-3 text-white text-[14px]">
            <img
              src={`./assets/cube/${item.value}.png`}
              alt={item.value}
              className="w-[28px]"
            />
            <span className="font-bold xs:text-[12px] sm:text-[16px]">
              {item.percentage}%
            </span>
          </div>
          <div className="xs:w-[80px] sm:w-[120px]">
            <div className="bg-[#292929] h-[10px] rounded-full overflow-hidden">
              <div
                className="bg-[#FF005C] h-full rounded-full"
                style={{
                  width: `${item.percentage}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CubeStats;
