import React from "react";

const Switch = ({ active, setActive }) => {
  return (
    <button onClick={() => setActive(!active)}>
      <div
        className={`flex ${
          active ? "justify-end" : "justify-start"
        } rounded-full xs:w-[45px] sm:w-[50px] border border-[#FF989F] p-1 overflow-hidden xs:ml-3 sm:ml-0`}
      >
        <div className="xs:h-[14px] sm:h-[18px] xs:w-[14px] sm:w-[18px] rounded-full border border-[#FF989F]"></div>
      </div>
    </button>
  );
};

export default Switch;
