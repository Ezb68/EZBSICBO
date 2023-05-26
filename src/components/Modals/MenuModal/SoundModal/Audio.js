import React from "react";
import Bars from "./Bars";
import Lists from "./Lists";

const Audio = () => {
  return (
    <div className="bg-[#292929] pb-[20px]">
      <div className="flex flex-col gap-5 py-10">
        <Bars data={{ name: "Âm nhạc", value: "33" }} />
        <div className="flex items-center justify-center gap-10">
          <button className="w-[25px]">
            <img src="./assets/icons/reset.png" alt="reset" />
          </button>
          <button className="w-[25px]">
            <img src="./assets/icons/prev.png" alt="prev" />
          </button>
          <button className="w-[25px]">
            <img src="./assets/icons/pause.png" alt="pause" />
          </button>
          <button className="w-[25px]">
            <img src="./assets/icons/next.png" alt="next" />
          </button>
          <button className="w-[25px]">
            <img src="./assets/icons/loop.png" alt="loop" />
          </button>
        </div>
      </div>

      <Lists />
    </div>
  );
};

export default Audio;