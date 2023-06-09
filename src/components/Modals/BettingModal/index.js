import React, { useContext } from "react";
import { Context } from "../../../App";

const BettingModal = () => {
  const { handleModal, ModalTypes } = useContext(Context);

  return (
    <div className="xs:w-[80%] md:w-[450px] lg:w-[400px] xl:w-[600px] border border-[#FFF600] xs:px-[20px] md:px-[30px] xs:py-[15px] md:py-[20px] bg-[#1C1C1C]">
      <div className="flex justify-center py-2 border-b border-b-[#FFF600] relative">
        <h5 className="text-[#FFF600] xs:text-[20px] lg:text-[20px] xl:text-[24px] font-bold">
          Cài đặt âm lượng
        </h5>
        <button
          className="absolute right-0 top-0 xs:w-[15px] lg:w-[14px] xl:w-[20px] xs:h-[15px] md:h-[20px]"
          onClick={() => handleModal(ModalTypes.bettingModal)}
        >
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>
      <div className="flex flex-col space-y-5 py-8 pb-4">
        <div className="flex items-center">
          <p className="text-white xs:w-[80px] lg:w-[100px] xl:w-[130px] xs:text-[12px] sm:text-[14px] xl:text-[.8vw]">
            TK Chính
          </p>
          <input
            type="text"
            placeholder=""
            value={"123.000"}
            className="text-[#FFF600] bg-transparent border border-[#767676] xs:py-2 sm:py-3 xs:px-3 sm:px-5 rounded-[5px] flex-1 xs:text-[12px] sm:text-[14px] xl:text-[.8vw]"
          />
        </div>
        <div className="flex items-center">
          <p className="text-white xs:w-[80px] lg:w-[100px] xl:w-[130px] xs:text-[12px] sm:text-[14px] xl:text-[.8vw]">
            TK Chính
          </p>
          <input
            type="text"
            placeholder=""
            value={"123.000"}
            className="text-[#FFF600] bg-transparent border border-[#767676] xs:py-2 sm:py-3 xs:px-3 sm:px-5 rounded-[5px] flex-1 xs:text-[12px] sm:text-[14px] xl:text-[.8vw]"
          />
        </div>
        <div className="flex items-center">
          <p className="text-[#FF005C] xs:w-[80px] lg:w-[100px] xl:w-[130px]"></p>
          <div className="flex-1 flex justify-between items-center">
            <p className="text-[#FF4345] xs:text-[12px] sm:text-[14px] xl:text-[.8vw]">
              Quà tặng miễn phí: 0
            </p>
            <div className="xs:w-[15px] sm:w-[20px] xs:h-[15px] sm:h-[20px] rounded-full flex justify-center items-center border border-[#FF4345]">
              <img
                src="./assets/icons/ques.png"
                alt="question mark"
                className="xs:w-[4px] sm:w-max"
              />
            </div>
          </div>
        </div>
        <div className="flex xs:flex-col sm:flex-row items-center">
          <p className="text-white xs:w-[80px] lg:w-[100px] xl:w-[130px] xs:text-[12px] sm:text-[14px] xl:text-[.8vw] xs:mb-2 sm:mb-0">
            Điểm chuyển
          </p>
          <div className="flex-1 flex justify-between items-center xs:space-x-3 xl:space-x-5">
            <input
              type="text"
              placeholder="Nhập số điểm"
              className="text-[#FFF600] bg-transparent border border-[#767676] py-3 xs:px-2 xl:px-5 rounded-[5px] flex-1 xs:text-[14px] xl:text-[.8vw] xs:w-full sm:w-1/2 md:w-full"
            />
            <button className="text-white bg-[#767676] py-3 xs:px-2 xl:px-6 rounded-[5px] xs:text-[12px] sm:text-[14px] xl:text-[.8vw] xs:flex-1 xs:h-max sm:h-full xs:w-[10%] sm:w-max">
              Chuyển hết
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1 flex xs:flex-col xl:flex-row justify-between items-center xs:space-x-0 xl:space-x-5 xs:space-y-5 xl:space-y-0 xs:w-full sm:w-max">
            <button className="text-white bg-[#767676] py-3 xs:px-2 xl:px-5 rounded-[5px] xs:text-[12px] sm:text-[14px] xl:text-[.8vw] xs:h-max sm:h-full xs:w-full md:w-full">
              Chuyển hết về tài khoản chính
            </button>
            <button className="text-white bg-[#767676] py-3 xs:px-2 xl:px-5 rounded-[5px] xs:text-[12px] sm:text-[14px] xl:text-[.8vw] xs:h-max sm:h-full xs:w-full md:w-full">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingModal;
