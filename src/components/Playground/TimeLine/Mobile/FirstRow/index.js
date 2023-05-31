import React from "react";
import Card from "./Card";

const data = [
  {
    name: "Xỉu",
    color: "#00C3F3",
    type: "1:1",
    totalCoin: "25.6k",
    barColor1: "#CBFEF9",
    barColor2: "#00C3F3",
    users: 234,
    health: 44,
    side: "left",
  },
  {
    name: "Bảo 3 con bất kỳ",
    color: "#ffffff",
    type: "1:24",
    totalCoin: "25.6k",
    barColor1: "#CBFEF9",
    barColor2: "#00C3F3",
    users: 45,
    health: null,
    side: null,
  },
  {
    name: "Tài",
    color: "#FF005C",
    type: "1:1",
    totalCoin: "5.6k",
    barColor1: "#FF005C",
    barColor2: "#7B005B",
    users: 445,
    health: 21,
    side: "right",
  },
];

const FirstRow = () => {
  return (
    <div className="flex h-[80px] xs:gap-1 sm:gap-2">
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  );
};

export default FirstRow;
