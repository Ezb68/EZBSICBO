import React, { useContext } from "react";
import Bars from "./Bars";
import Audio from "./Audio";
import { Context } from "../../../../App";

const data = [
  {
    name: "Trò chơi",
    value: 33,
  },
  {
    name: "Sòng bài",
    value: 100,
  },
  {
    name: "Quà tặng",
    value: 33,
  },
];

const SoundModal = () => {
  const { handleModal, ModalTypes } = useContext(Context);
  return (
    <div className="xs:w-[80%] md:w-[400px] xl:w-[600px] xs:h-max md:h-max xl:h-[700px] absolute xs:right-auto md:right-[100px] top-0 bg-[#1C1C1C] border border-[#F3C3D1] xs:px-[20px] sm:px-[30px] py-[20px]">
      <div className="flex justify-center py-2 border-b border-b-[#F3C3D1] relative">
        <h5 className="text-white xs:text-[14px] md:text-[20px] xl:text-[24px] font-bold">
          Cài đặt âm lượng
        </h5>
        <button
          className="absolute right-0 top-0"
          onClick={() => handleModal(ModalTypes.sound)}
        >
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>

      <div className="flex flex-col md:gap-2 xl:gap-5 xs:py-[20px] sm:py-10 md:py-5 xl:py-10">
        {data.map((item, i) => (
          <Bars data={item} key={i} />
        ))}
      </div>
      <Audio />
    </div>
  );
};

export default SoundModal;
