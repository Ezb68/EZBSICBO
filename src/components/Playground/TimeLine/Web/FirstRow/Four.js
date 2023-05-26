import React from "react";

const Four = ({ item }) => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center py-4 pb-0">
        <div className="flex justify-center">
          {item.cube.map((c, i) => (
            <div
              className="flex flex-col gap-2 px-3 border-r border-r-[#7C1F58] last:border-r-0"
              key={i}
            >
              <img src={`./assets/cube/${c.one}.png`} alt={c.one} />
              <img src={`./assets/cube/${c.two}.png`} alt={c.two} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[30px] flex justify-center items-center text-white text-[14px]">
        {item.num}
      </div>
    </>
  );
};

export default Four;
