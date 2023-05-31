import React, { useContext, useEffect } from "react";
import SoundModal from "./MenuModal/SoundModal";
import { Context } from "../../App";
import CoinRangeModal from "./CoinRangeModal";
import PlayBackModal from "./PlayBackModal";
import BettingModal from "./BettingModal";
import MobileMenu from "./MenuModal/MobileMenu";
import SelectCoinModal from "./SelectCoinModal";

const Modals = () => {
  const { modal, ModalTypes } = useContext(Context);

  const getComponent = () => {
    if (modal.active) {
      if (modal.modal_type === ModalTypes.sound) {
        return <SoundModal />;
      } else if (modal.modal_type === ModalTypes.coinRangeModal) {
        return <CoinRangeModal />;
      } else if (modal.modal_type === ModalTypes.playBackModal) {
        return <PlayBackModal />;
      } else if (modal.modal_type === ModalTypes.bettingModal) {
        return <BettingModal />;
      } else if (modal.modal_type === ModalTypes.menuModal) {
        return <MobileMenu />;
      } else if (modal.modal_type === ModalTypes.selectCoinModal) {
        return <SelectCoinModal />;
      }
    }
  };

  useEffect(() => {
    if (modal.active) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modal]);

  return (
    <div className="fixed w-full xs:h-[calc(100vh_-_50px)] md:h-[calc(100vh_-_60px)] top-[50px] xs:md:top-[60px] left-0 bg-none z-50 flex justify-center items-center">
      {getComponent()}
    </div>
  );
};

export default Modals;
