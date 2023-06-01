import React from "react";

const List = () => {
  const data = [
    {
      one: 56,
      two: 14,
      cube: [4, 5, 5],
      p1: "Tài",
      p2: "Chẵn",
    },
    {
      one: 56,
      two: 14,
      cube: [4, 5, 5],
      p1: "Tài",
      p2: "Chẵn",
    },
    {
      one: 56,
      two: 14,
      cube: [4, 5, 5],
      p1: "Tài",
      p2: "Chẵn",
    },
    {
      one: 56,
      two: 14,
      cube: [4, 5, 5],
      p1: "Tài",
      p2: "Chẵn",
    },
    {
      one: 56,
      two: 14,
      cube: [4, 5, 5],
      p1: "Tài",
      p2: "Chẵn",
    },
  ];

  return (
    <div
      className="p-2 xl:px-3 2xl:px-5 flex flex-col"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      {data.map((item, i) => (
        <div className="border-b border-b-white p-2 last:border-b-0" key={i}>
          <div className="flex items-center justify-between py-2">
            <p className="text-white lg:text-[12px] xl:text-[.9vw]">
              {item.one}
            </p>
            <p className="text-white lg:text-[14px] xl:text-[1.3vw] font-bold">
              {item.two}
            </p>
            <div className="flex lg:gap-1 2xl:gap-3 items-center">
              {item.cube.map((im, ind) => (
                <img
                  key={ind}
                  src={`./assets/cube/${im}.png`}
                  alt="4"
                  className="w-[2vw] h-full"
                />
              ))}
            </div>
            <div className="lg:w-[30px] xl:w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white text-[.8vw]">
              {item.p1}
            </div>
            <div className="lg:w-[30px] xl:w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white text-[.8vw]">
              {item.p2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
