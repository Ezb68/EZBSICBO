import React from "react";
import Card from "./Card";

const data = [
  {
    value: 4,
    type: "1:50",
  },
  {
    value: 5,
    type: "1:18",
  },
  {
    value: 6,
    type: "1:14",
  },
  {
    value: 7,
    type: "1:12",
  },
  {
    value: 8,
    type: "1:8",
  },
  {
    value: 9,
    type: "1:6",
  },
  {
    value: 10,
    type: "1:6",
  },
  {
    value: 11,
    type: "1:6",
  },
  {
    value: 12,
    type: "1:6",
  },
  {
    value: 13,
    type: "1:8",
  },
  {
    value: 14,
    type: "1:12",
  },
  {
    value: 15,
    type: "1:14",
  },
  {
    value: 16,
    type: "1:18",
  },
  {
    value: 17,
    type: "1:50",
  },
];

const FourthRow = () => {
  return (
    <div className="flex gap-2 flex-wrap justify-between">
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  );
};

export default FourthRow;
