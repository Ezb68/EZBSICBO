import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";
import SixthRow from "./SixthRow";
import SeventhRow from "./SeventhRow";
import Coins from "../../../Sidebar/LowerBox/Coins";
import ActionButton from "../../../Sidebar/LowerBox/ActionButton";
import EigthRow from "./EightRow";
import NinthRow from "./NinthRow";
import Tracking from "./Tracking";
import CubeStats from "./CubeStats";
import PlayerStats from "./PlayerStats";
import WarmStats from "./WarmStats";

const Mobile = () => {
  return (
    <div>
      <div className="flex-col xs:flex lg:hidden gap-2 xs:px-3 md:px-0">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <FourthRow />
        <FifthRow />
        <SixthRow />
        <SeventhRow />
      </div>
      <div className="flex-col xs:flex lg:hidden gap-2 pb-10">
        <Coins mobile />
        <ActionButton />
        <EigthRow />
      </div>

      <div className="flex-col xs:flex lg:hidden gap-2 xs:px-3 md:px-0">
        <NinthRow />
        <NinthRow />
        <NinthRow />
        <NinthRow />
        <NinthRow />
        <NinthRow />
        <Tracking />
        <div className="flex border border-[#FFCDCC] rounded-[8px] text-white text-[14px] font-bold overflow-hidden">
          <button className="py-2 px-5 w-full border-r border-r-[#FFCDCC] last:border-r-0 btnHoverPink">
            50 Ván
          </button>
          <button className="py-2 px-5 w-full border-r border-r-[#FFCDCC] last:border-r-0 btnHoverPink">
            100 Ván
          </button>
          <button className="py-2 px-5 w-full border-r border-r-[#FFCDCC] last:border-r-0 btnHoverPink">
            200 Ván
          </button>
          <button className="py-2 px-5 w-full border-r border-r-[#FFCDCC] last:border-r-0 btnHoverPink">
            500 Ván
          </button>
        </div>
        <CubeStats />
        <PlayerStats />
        <WarmStats />
      </div>
    </div>
  );
};

export default Mobile;
