import React from "react";
import Card from "./Card";

const row1 = [
  {
    one: 1,
    two: 2,
  },
  {
    one: 1,
    two: 3,
  },
  {
    one: 1,
    two: 4,
  },
  {
    one: 1,
    two: 5,
  },
  {
    one: 1,
    two: 6,
  },
  {
    one: 2,
    two: 3,
  },
  {
    one: 2,
    two: 4,
  },
  {
    one: 2,
    two: 5,
  },
  {
    one: 2,
    two: 6,
  },
  {
    one: 3,
    two: 4,
  },
  {
    one: 3,
    two: 5,
  },
  {
    one: 3,
    two: 6,
  },
  {
    one: 4,
    two: 5,
  },
  {
    one: 4,
    two: 6,
  },
  {
    one: 5,
    two: 6,
  },
];

const FifthRow = () => {
  return (
    <div className="flex gap-2">
      <div className="flex border border-[#7C1F58] rounded-[5px] gap-1 bg-[#110012] w-[40px]">
        <p className="text-white text-[10px] -rotate-90 p-2 px-0 m-auto">1:5</p>
      </div>
      <div className="flex-1 flex flex-wrap gap-2 justify-between">
        {row1.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FifthRow;
