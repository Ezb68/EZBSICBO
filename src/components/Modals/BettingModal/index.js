import React, { useContext } from "react";
import { Context } from "../../../App";

const BettingModal = () => {
  const { handleModal, ModalTypes } = useContext(Context);

  return (
    <div className="sm:w-[80%] md:w-[600px] border border-[#FFF600] sm:px-[20px] md:px-[30px] sm:py-[15px] md:py-[20px] bg-[#1C1C1C]">
      <div className="flex justify-center py-2 border-b border-b-[#FFF600] relative">
        <h5 className="text-[#FFF600] text-[20px] md:text-[24px] font-bold">
          Cài đặt âm lượng
        </h5>
        <button
          className="absolute right-0 top-0 sm:w-[15px] md:w-[20px] sm:h-[15px] md:h-[20px]"
          onClick={() => handleModal(ModalTypes.bettingModal)}
        >
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>
      <div className="flex flex-col gap-5 py-8 pb-4">
        <div className="flex items-center">
          <p className="text-white sm:w-[80px] md:w-[130px] sm:text-[14px] md:text-[.8vw]">
            TK Chính
          </p>
          <input
            type="text"
            placeholder=""
            value={"123.000"}
            className="text-[#FFF600] bg-transparent border border-[#767676] py-3 px-5 rounded-[5px] flex-1 sm:text-[14px] md:text-[.8vw]"
          />
        </div>
        <div className="flex items-center">
          <p className="text-[#FF005C] sm:w-[80px] md:w-[130px] sm:text-[14px] md:text-[.8vw]">
            TK Chính
          </p>
          <input
            type="text"
            placeholder=""
            value={"123.000"}
            className="text-[#FFF600] bg-transparent border border-[#767676] py-3 px-5 rounded-[5px] flex-1 sm:text-[14px] md:text-[.8vw]"
          />
        </div>
        <div className="flex items-center">
          <p className="text-[#FF005C] sm:w-[80px] md:w-[130px]"></p>
          <div className="flex-1 flex justify-between items-center">
            <p className="text-[#FF4345] sm:text-[14px] md:text-[.8vw]">
              Quà tặng miễn phí: 0
            </p>
            <div className="w-[25px] h-[25px] rounded-full flex justify-center items-center border border-[#FF4345]">
              <img src="./assets/icons/ques.png" alt="question mark" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-white sm:w-[80px] md:w-[130px] sm:text-[14px] md:text-[.8vw]">
            Điểm chuyển
          </p>
          <div className="flex-1 flex justify-between items-center gap-5">
            <input
              type="text"
              placeholder="Nhập số điểm"
              className="text-[#FFF600] bg-transparent border border-[#767676] py-3 sm:px-2 md:px-5 rounded-[5px] flex-1 sm:text-[14px] md:text-[.8vw] sm:w-1/2 md:w-auto"
            />
            <button className="text-white bg-[#767676] py-3 sm:px-2 md:px-6 rounded-[5px] sm:text-[14px] md:text-[.8vw] sm:flex-1">
              Chuyển hết
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1 flex justify-between items-center gap-5">
            <button className="text-white bg-[#767676] py-3 px-14 rounded-[5px] sm:text-[14px] md:text-[.8vw]">
              Chuyển hết về tài khoản chính
            </button>
            <button className="text-white bg-[#767676] py-3 sm:px-5 md:px-14 rounded-[5px] sm:text-[14px] md:text-[.8vw]">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingModal;
