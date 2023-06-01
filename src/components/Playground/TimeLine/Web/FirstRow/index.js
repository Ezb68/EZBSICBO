import React from "react";
import One from "./One";
import Two from "./Two";
import Four from "./Four";

const FirstRow = () => {
  const data = [
    {
      name: "Xỉu",
      value: "4~10",
      bet: "",
      coin: "25.6k",
      user: 234,
      health: 42,
      color: "#00C3F3",
      num: "1:1",
      row: 1,
    },
    {
      name: "Lẻ",
      value: "",
      bet: "",
      color: "#60BF3F",
      num: "1:1",
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
      ],
      num: "1:8",
      row: 4,
    },

    {
      cube: [
        {
          one: "1",
          two: "1",
          three: "1",
        },
        {
          one: "2",
          two: "2",
          three: "2",
        },
        {
          one: "3",
          two: "3",
          three: "3",
        },
        {
          one: "4",
          two: "4",
          three: "4",
        },
        {
          one: "5",
          two: "5",
          three: "5",
        },
        {
          one: "6",
          two: "6",
          three: "6",
        },
      ],
      bet: "1000",
      num: "1:150",
      row: 2,
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
      ],
      num: "1:150",
      row: 4,
    },
    {
      name: "Chẵn",
      value: "",
      bet: "",
      color: "#FEB00C",
      num: "1:1",
      row: 1,
    },
    {
      name: "Tài",
      value: "11~17",
      bet: "1000",
      coin: "5.6k",
      health: 34,
      user: 445,
      color: "#FF005C",
      num: "1:1",
      row: 1,
    },
  ];

  return (
    <div className="flex border border-[#7C1F58] rounded-[10px] h-[140px] text-[14px]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`h-full flex flex-col ${
            item.bet
              ? "border border-[#FFCDCC]"
              : "border-r border-r-[#7C1F58] last:border-r-0"
          } sm:${
            item.name === "Lẻ" ||
            item.name === "Chẵn" ||
            item.row === 2 ||
            item.row === 4
              ? "hidden"
              : "flex"
          } md:flex`}
          style={{
            width: `${(100 / 14) * item.row}%`,
            background: item.bet
              ? "linear-gradient(180deg, #7C1F58 0%, #26001A 100%)"
              : "",
          }}
        >
          {item.row === 1 && <One item={item} />}
          {item.row === 2 && <Two item={item} />}
          {item.row === 4 && <Four item={item} />}
        </div>
      ))}
    </div>
  );
};

export default FirstRow;
