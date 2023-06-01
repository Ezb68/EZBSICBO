import React, { useContext } from "react";
import { Context } from "../../App";

const MenuRight = () => {
  const { handleModal, ModalTypes, handleAlert } = useContext(Context);
  const data = [
    {
      keyword: "dollar",
      xs: "hidden",
      sm: "block",
      md: "hidden",
      lg: "block",
      alert_type: "pink",
    },
    {
      keyword: "call",
      xs: "hidden",
      sm: "hidden",
      md: "hidden",
      lg: "block",
      modal_type: ModalTypes.bettingModal,
    },
    {
      keyword: "sound",
      xs: "hidden",
      sm: "block",
      md: "block",
      lg: "block",
      modal_type: ModalTypes.sound,
    },
    {
      keyword: "home",
      xs: "hidden",
      sm: "hidden",
      md: "block",
      lg: "block",
      modal_type: ModalTypes.playBackModal,
    },
    {
      keyword: "hamb-menu",
      xs: "block",
      sm: "block",
      md: "block",
      lg: "block",
      modal_type: ModalTypes.menuModal,
    },
  ];

  const getButtons = (value, i) => {
    if (value.alert_type) {
      return (
        <button
          key={i}
          className={`xs:${value.xs} sm:${value.sm} md:${value.md} lg:${value.lg} cursor-pointer xs:w-[25px] md:w-[40px]`}
          onClick={() => handleAlert("pink")}
        >
          <img
            src={`./assets/menu-right/${value.keyword}.png`}
            alt={value.keyword}
          />
        </button>
      );
    } else if (value.modal_type) {
      return (
        <button
          key={i}
          className={`xs:${value.xs} sm:${value.sm} md:${value.md} lg:${value.lg} cursor-pointer xs:w-[25px] md:w-[40px]`}
          onClick={() => handleModal(value.modal_type)}
        >
          <img
            src={`./assets/menu-right/${value.keyword}.png`}
            alt={value.keyword}
          />
        </button>
      );
    } else {
      return (
        <button
          key={i}
          className={`xs:${value.xs} sm:${value.sm} md:${value.md} lg:${value.lg} cursor-pointer xs:w-[25px] md:w-[40px]`}
        >
          <img
            src={`./assets/menu-right/${value.keyword}.png`}
            alt={value.keyword}
          />
        </button>
      );
    }
  };

  return (
    <div className="flex items-center gap-[12px] mx-5">
      <div className="xs:hidden md:flex items-center justify-between gap-6 h-[40px] border-x border-x-[#FFCDCC] px-3 mr-4 cursor-pointer">
        <p className="pinkTextColor text-[12px]">Tiếng Việt</p>
        <img src="./assets/menu-right/dropdown.png" alt="dropdown-icon" />
      </div>
      {data.map((item, i) => getButtons(item, i))}
    </div>
  );
};

export default MenuRight;
