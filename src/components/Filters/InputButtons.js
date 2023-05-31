import React, { useContext } from "react";
import Calendar from "./Calendar";
import DropwDown from "./DropwDown";
import { Context } from "../../App";

const InputButtons = () => {
  const { handleModal, ModalTypes } = useContext(Context);

  return (
    <div className="flex xs:flex-col sm:flex-row gap-1 md:gap-3 xs:justify-between items-center md:justify-start">
      <div className="flex items-center gap-3">
        <label className="text-white xs:hidden md:block text-[.8vw]">
          From
        </label>
        <Calendar />
        <div className="xs:hidden md:block">
          <DropwDown data={"00:00"} />
        </div>
      </div>
      <div className="xs:hidden sm:block md:hidden w-[20px] h-[20px]">
        <img src="./assets/icons/six-square.png" alt="square" />
      </div>
      <div className="flex items-center gap-3">
        <label className="text-white xs:hidden md:block">To</label>
        <Calendar />
        <div className="xs:hidden md:block">
          <DropwDown data={"00:00"} />
        </div>
        <div className="xs:hidden md:block">
          <DropwDown data={"Toàn bộ"} />
        </div>
      </div>
      <div className="xs:hidden sm:block md:hidden w-[20px] h-[20px]">
        <img src="./assets/icons/six-square.png" alt="square" />
      </div>
      <button
        onClick={() => handleModal(ModalTypes.playBackModal)}
        className="rounded-[5px] border border-[#FF005C] text-white p-2 px-5 flex items-center gap-3 text-[14px] xs:w-[90vw] sm:w-max"
        style={{
          background: "linear-gradient(180deg, #FF005C 0%, #7B005B 100%)",
        }}
      >
        <p>Tìm kiếm</p>
      </button>
    </div>
  );
};

export default InputButtons;
