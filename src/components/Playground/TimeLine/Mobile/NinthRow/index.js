import React from "react";

const data = [
  {
    value: 5,
    type: 123,
    color: "#00C3F3",
  },
  {
    value: 11,
    type: 245,
    color: "#FF005C",
  },
  {
    value: 8,
    type: 125,
    color: "#00C3F3",
  },
  {
    value: 8,
    type: 224,
    color: "#00C3F3",
  },
  {
    value: 12,
    type: 444,
    color: "#60BF3F",
  },
  {
    value: 11,
    type: 245,
    color: "#FF005C",
  },
  {
    value: 13,
    type: 445,
    color: "#FF005C",
  },
  {
    value: 6,
    type: 123,
    color: "#00C3F3",
  },
  {
    value: 11,
    type: 245,
    color: "#FF005C",
  },
  {
    value: 8,
    type: 125,
    color: "#00C3F3",
  },
];

const NinthRow = () => {
  return (
    <div className="flex">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex border border-r-0 last:border-r  last:border-r-[#7C1F58] border-[#7C1F58] justify-center w-full"
        >
          <div className="flex flex-col text-white p-1 justify-center items-center">
            <p className="font-bold text-[14px]" style={{ color: item.color }}>
              {item.value}
            </p>
            <p className="text-[14px]">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NinthRow;
