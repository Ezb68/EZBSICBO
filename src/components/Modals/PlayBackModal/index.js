import React, { useContext } from "react";
import { Context } from "../../../App";

const PlayBackModal = () => {
  const { handleModal, ModalTypes } = useContext(Context);
  return (
    <div
      className="xs:w-[80%] md:w-[50%] xl:w-[840px] border border-[#FFCDCC]"
      style={{
        background:
          "linear-gradient(180deg, rgba(38, 0, 26, 0.95) 0%, rgba(22, 0, 21, 0.95) 100%)",
      }}
    >
      <div className="flex justify-between bg-[#1C1C1C] xs:px-[20px] md:px-[30px] xs:py-[15px] md:py-[20px]">
        <div className="">
          <p className="text-white xs:text-[14px] xl:text-[.8vw]">Kết quả</p>
          <p className="text-[#FF005C] xs:text-[12px] xl:text-[.8vw]">
            EZB 12314202324
          </p>
        </div>
        <div className="flex space-x-5 items-center">
          <h3 className="text-[42px] text-white font-normal xs:text-[14px] xl:text-[.8vw]">
            12
          </h3>
          <div className="h-[60%] w-[1px] bg-[#FFCDCC]"></div>
          <p className="text-white xs:text-[14px] xl:text-[.8vw]">Tài</p>
          <div className="flex space-x-3 h-max xs:hidden sm:flex">
            <img
              src="./assets/cube/3.png"
              alt="3"
              className="xs:w-[30px] md:w-auto h-full"
            />
            <img
              src="./assets/cube/4.png"
              alt="4"
              className="xs:w-[30px] md:w-auto h-full"
            />
            <img
              src="./assets/cube/5.png"
              alt="5"
              className="xs:w-[30px] md:w-auto h-full"
            />
          </div>
        </div>
        <button
          className="xs:w-[15px] md:w-[20px] xs:h-[15px] md:h-[20px]"
          onClick={() => handleModal(ModalTypes.playBackModal)}
        >
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>
      <div className="">
        <img src="./assets/main/table.png" alt="vid" />
      </div>
      <div className="py-3 xs:px-[20px] md:px-[30px] bg-[#000000] flex items-center xs:space-x-5 md:space-x-10">
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
        <div className="flex items-center space-x-2 h-[15px]">
          <p className="text-white text-[14px]">00:06</p>
          <div className="h-full w-[1px] bg-white"></div>
          <p className="text-white text-[14px]">00:35</p>
        </div>
      </div>
    </div>
  );
};

export default PlayBackModal;
