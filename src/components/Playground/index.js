import React from "react";
import Screen from "./Screen";
import SideBox from "./SideBox";
import TimeLine from "./TimeLine";

const PlayGround = () => {
  return (
    <div className="flex-1 md:w-[65%] lg:w-[75%] md:overflow-y-scroll lg:overflow-y-hidden">
      <div className="flex xs:w-full xs:h-max lg:h-[280px] xl:h-[320px] 2xl:h-[450px]">
        <Screen />
        <SideBox />
      </div>
      <TimeLine />
    </div>
  );
};

export default PlayGround;
