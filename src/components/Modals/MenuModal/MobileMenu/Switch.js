import React from "react";

const Switch = ({ active, setActive }) => {
  return (
    <button onClick={() => setActive(!active)}>
      <div
        className={`flex ${
          active ? "justify-end" : "justify-start"
        } rounded-full w-[55px] border border-[#FF989F] p-1 overflow-hidden`}
      >
        <div className="h-[18px] w-[18px] rounded-full border border-[#FF989F]"></div>
      </div>
    </button>
  );
};

export default Switch;
