import React from "react";
import BetLabel from "../BetLabel";

const ThirdRow = () => {
  const data = [
    {
      num: "1:5",
      row: 1,
    },
    {
      cube: [
        {
          one: "1",
          two: "1",
        },
        {
          one: "2",
          two: "2",
        },
        {
          one: "3",
          two: "3",
        },
        {
          one: "4",
          two: "4",
        },
        {
          one: "5",
          two: "5",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
          bet: "500",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
      ],
      row: 12,
    },
    {
      num: "1:5",
      row: 1,
    },
  ];

  return (
    <div className="flex border border-[#7C1F58] rounded-[10px] h-[140px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-full flex justify-center items-center border-r border-r-[#7C1F58] last:border-r-0"
          style={{ width: `${(100 / 14) * item.row}%` }}
        >
          {item.row === 1 && (
            <>
              <div className="p-2">
                <p className="text-white text-[14px]">{item.num}</p>
              </div>
            </>
          )}
          {item.row === 12 && (
            <>
              <div className="h-full flex items-center justify-center">
                {item.cube.map((c, i) => (
                  <div
                    key={i}
                    className="flex border-r border-r-[#7C1F58] last:border-r-0 px-2"
                  >
                    <div
                      className={`flex flex-col justify-center gap-2 w-full p-3 relative ${
                        c.bet ? "border border-[#FFCDCC]" : ""
                      }`}
                      key={i}
                      style={{
                        background: c.bet
                          ? "linear-gradient(180deg, #7C1F58 0%, #26001A 100%)"
                          : "",
                      }}
                    >
                      {c.bet && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <BetLabel data={c.bet} />
                        </div>
                      )}
                      <img src={`./assets/cube/${c.one}.png`} alt={c.one} />
                      <img src={`./assets/cube/${c.two}.png`} alt={c.two} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThirdRow;
