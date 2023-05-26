import React from "react";
import UpperBox from "./UpperBox";
import LowerBox from "./LowerBox";

const Sidebar = () => {
  return (
    <div
      className="w-[25%] h-full overflow-y-scroll sm:hidden md:block"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <UpperBox />
      <LowerBox />
    </div>
  );
};

export default Sidebar;
