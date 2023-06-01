import React from "react";
import UpperBox from "./UpperBox";
import LowerBox from "./LowerBox";

const Sidebar = () => {
  return (
    <div
      className="md:w-[35%] lg:w-[25%] h-full overflow-y-scroll xs:hidden sm:hidden md:block"
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
