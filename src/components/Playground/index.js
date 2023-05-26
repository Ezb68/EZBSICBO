import React from "react";
import Screen from "./Screen";
import SideBox from "./SideBox";
import TimeLine from "./TimeLine";

const PlayGround = () => {
  return (
    <div className="flex-1">
      <div className="flex sm:w-full sm:h-max md:h-[450px] overflow-hidden">
        <Screen />
        <SideBox />
      </div>
      <TimeLine />
    </div>
  );
};

export default PlayGround;
