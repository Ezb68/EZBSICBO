import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import Tracking from "./Tracking";

const Web = () => {
  return (
    <div className="flex-col xs:hidden md:flex">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <FourthRow />
      <Tracking />
    </div>
  );
};

export default Web;
