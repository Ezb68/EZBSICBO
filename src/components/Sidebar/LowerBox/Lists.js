import React from "react";

const Lists = () => {
  const data = [
    {
      name: "Tài",
      value: "50%",
      color: "#FF005C",
    },
    {
      name: "Xỉu",
      value: "33%",
      color: "#00C3F3",
    },
    {
      name: "Lẻ",
      value: "0%",
      color: "#60BF3F",
    },
    {
      name: "Chẵn",
      value: "0%",
      color: "#FEB00C",
    },
    {
      name: "Bộ Ba",
      value: "2%",
      color: "#FFFFFF",
    },
  ];

  return (
    <div className="w-[80%] rounded-[10px] mx-auto border border-[#7C1F58]">
      {data.map((item, index) => (
        <div
          className="px-3 py-[6px] flex last:border-b-0 border-b border-b-[#7C1F58]"
          key={index}
        >
          <div
            className={`w-[50%] text-right px-5 font-bold`}
            style={{ color: item.color }}
          >
            {item.name}
          </div>
          <div className="w-[50%] text-left px-5 text-white">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Lists;
