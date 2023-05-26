import React from "react";
import BetLabel from "../BetLabel";

const FourthRow = () => {
  const data = [
    {
      one: "One 1:1",
      two: "Two 1:2",
      three: "Three 1:3",
      text: true,
    },
    {
      value: "1",
      name: "Một",
      text: false,
    },
    {
      value: "2",
      name: "Hai",
      text: false,
    },
    {
      value: "3",
      name: "Ba",
      text: false,
    },
    {
      value: "4",
      name: "Bốn",
      text: false,
    },
    {
      value: "5",
      name: "Năm",
      text: false,
      bet: "1000",
    },
    {
      value: "6",
      name: "Sáu",
      text: false,
    },
    {
      one: "One 1:1",
      two: "Two 1:2",
      three: "Three 1:3",
      text: true,
    },
  ];

  return (
    <div className="flex border border-[#7C1F58] rounded-[10px] h-[70px] py-3">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-full flex justify-center items-center border-r border-r-[#7C1F58] last:border-r-0"
          style={{ width: `${(100 / 14) * 2}%` }}
        >
          {item.text && (
            <>
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white text-[12px]">{item.one}</p>
                <p className="text-white text-[12px]">{item.two}</p>
                <p className="text-white text-[12px]">{item.three}</p>
              </div>
            </>
          )}
          {!item.text && (
            <>
              <div className="flex justify-center">
                <div
                  className={`flex items-center gap-2 p-1 px-5 ${
                    item.bet
                      ? "border border-[#FFCDCC]"
                      : "border-r border-r-[#7C1F58] last:border-r-0"
                  } relative`}
                  style={{
                    background: item.bet
                      ? "linear-gradient(180deg, #7C1F58 0%, #26001A 100%)"
                      : "",
                  }}
                >
                  {item.bet && (
                    <div className="absolute left-0">
                      <BetLabel data={item.bet} />
                    </div>
                  )}
                  <img
                    src={`./assets/cube/${item.value}.png`}
                    alt={item.value}
                  />
                  <p className="text-white font-bold">{item.name}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FourthRow;
