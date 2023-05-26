import React, { useContext } from "react";
import { Context } from "../../../App";

const Header = () => {
  const { handleModal, ModalTypes } = useContext(Context);
  return (
    <div className="flex justify-between">
      <div className="">
        <h5 className="sm:text-[4vw] md:text-[24px] pinkTextColor">Cao nhất</h5>
        <p className="pinkTextColor sm:text-[14px] md:text-[.8vw]">
          Mời lựa chọn Cao nhất
        </p>
      </div>
      <button
        className="sm:w-[15px] md:w-[20px] sm:h-[15px] md:h-[20px]"
        onClick={() => handleModal(ModalTypes.coinRangeModal)}
      >
        <img src="./assets/icons/cancel.png" alt="cancel" />
      </button>
    </div>
  );
};

export default Header;
