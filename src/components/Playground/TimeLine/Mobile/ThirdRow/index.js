import React from "react";
import Card from "./Card";

const data = [1, 2, 3, 4, 5, 6];

const ThirdRow = () => {
  return (
    <div className="flex space-x-2">
      <div className="flex-1 flex border border-[#7C1F58] rounded-[5px] space-x-1 bg-[#110012]">
        <p className="text-white text-[10px] -rotate-90 p-2 px-2 mx-auto">
          1:8
        </p>
      </div>
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  );
};

export default ThirdRow;
