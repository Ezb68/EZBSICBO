import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";

const TimeLine = () => {
  return (
    <div
      className="sm:px-0 md:px-6 sm:py-3 md:py-0 sm:h-max md:h-[calc(100vh_-_60px_-_450px)] sm:overflow-auto md:overflow-hidden md:overflow-y-scroll"
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
