import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";

const TimeLine = () => {
  return (
    <div
      className="xs:px-0 md:px-6 xs:py-3 md:py-0 xs:h-max lg:h-[calc(100vh_-_60px_-_250px)] xl:h-[calc(100vh_-_60px_-_320px)] 2xl:h-[calc(100vh_-_60px_-_450px)] xs:overflow-auto overflow-hidden lg:overflow-y-scroll"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <Web />
      <Mobile />
    </div>
  );
};
export default TimeLine;
