import React, { useContext } from "react";
import { Context } from "../../../App";

const data = [
  "5a",
  "25a",
  "50",
  "100",
  "250",
  "500a",
  "1000",
  "2000a",
  "3000",
  "5000a",
];

const SelectCoinModal = () => {
  const { handleModal, ModalTypes } = useContext(Context);

  return (
    <div
      className="xs:w-[80%] md:w-[400px] 2xl:w-[600px] border border-[#FFCDCC]"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <div
        className="flex justify-between items-center py-5 border-b border-b-[#FFCDCC] px-5"
        style={{
          background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
        }}
      >
        <h5 className="yellowTextColor text-[20px] md:text-[24px] font-bold">
          Cài đặt âm lượng
        </h5>
        <button
          className="xs:w-[15px] md:w-[20px] xs:h-[15px] md:h-[20px]"
          onClick={() => handleModal(ModalTypes.bettingModal)}
        >
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>

      <div className="p-5 flex flex-wrap items-end">
        {data.map((item, i) => (
          <button
            key={i}
            className="xs:w-1/4 md:w-1/4 h-max xs:p-3 lg:p-3 xl:p-5"
          >
            <img
              src={`./assets/coins/${item}.png`}
              alt={item}
              className="xs:h-max xs:w-[60px] md:w-full md:h-full"
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center xs:gap-3 lg:gap-5 2xl:gap-10 px-5 py-10 pt-5">
        <button
          className="xs:px-5 sm:px-10 xs:py-3 md:py-4 border border-[#FFCDCC] text-white rounded-[5px] btnHoverPink xs:text-[14px] 2xl:text-[.8vw]"
          style={{
            background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
          }}
        >
          Hủy
        </button>
        <button
          className="xs:px-5 sm:px-10 md:px-20 xs:py-3 md:py-4 border border-[#FFCDCC] text-white rounded-[5px] btnHoverPink xs:text-[14px] 2xl:text-[.8vw]"
          style={{
            background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
          }}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default SelectCoinModal;
