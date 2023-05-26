import React, { useContext } from "react";
import { Context } from "../../../App";

const PlayBackModal = () => {
  const { handleModal, ModalTypes } = useContext(Context);
  return (
    <div
      className="sm:w-[80%] md:w-[840px] border border-[#FFCDCC]"
      style={{
        background:
          "linear-gradient(180deg, rgba(38, 0, 26, 0.95) 0%, rgba(22, 0, 21, 0.95) 100%)",
      }}
    >
      <div className="flex justify-between bg-[#1C1C1C] sm:px-[20px] md:px-[30px] sm:py-[15px] md:py-[20px]">
        <div className="">
          <p className="text-white sm:text-[14px] md:text-[.8vw]">Kết quả</p>
          <p className="text-[#FF005C] sm:text-[12px] md:text-[.8vw]">
            EZB 12314202324
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <h3 className="text-[42px] text-white font-normal sm:text-[14px] md:text-[.8vw]">
            12
          </h3>
          <div className="h-[60%] w-[1px] bg-[#FFCDCC]"></div>
          <p className="text-white sm:text-[14px] md:text-[.8vw]">Tài</p>
          <div className="flex gap-3 h-max">
            <img
              src="./assets/cube/3.png"
              alt="3"
              className="sm:w-[30px] md:w-auto h-max"
            />
            <img
              src="./assets/cube/4.png"
              alt="4"
              className="sm:w-[30px] md:w-auto h-max"
            />
            <img
              src="./assets/cube/5.png"
              alt="5"
              className="sm:w-[30px] md:w-auto h-max"
            />
          </div>
        </div>
        <button
          className="sm:w-[15px] md:w-[20px] sm:h-[15px] md:h-[20px]"
          onClick={() => handleModal(ModalTypes.playBackModal)}
        >
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>
      <div className="">
        <img src="./assets/main/table.png" alt="vid" />
      </div>
      <div className="py-3 sm:px-[20px] md:px-[30px] bg-[#000000] flex items-center sm:gap-5 md:gap-10">
        <button>
          <img src="./assets/icons/play.png" alt="play" />
        </button>
        <div className="h-[10px] rounded-full flex-1 bg-[#292929] flex">
          <div
            className="h-full bg-[#E8E8E8] rounded-full relative"
            style={{ width: "44%" }}
          >
            <div className="flex justify-center items-center w-[20px] h-[20px] p-[2px] bg-[#E8E8E8] rounded-full absolute right-0 top-1/2 -translate-y-1/2">
              <div className="bg-[#292929] flex justify-center items-center p-[3px] rounded-full h-full w-full">
                <div className="bg-[#E8E8E8] flex w-full h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 h-[15px]">
          <p className="text-white text-[14px]">00:06</p>
          <div className="h-full w-[1px] bg-white"></div>
          <p className="text-white text-[14px]">00:35</p>
        </div>
      </div>
    </div>
  );
};

export default PlayBackModal;
