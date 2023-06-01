import React from "react";
import Buttons from "./Buttons";
import InputButtons from "./InputButtons";

const Filters = () => {
  return (
    <div className="flex xs:flex-col lg:flex-row gap-3 py-5">
      <InputButtons />
      <div className="md:px-0 lg:px-4 py-1 xs:hidden lg:block">
        <div className="h-full w-[1px] bg-[#D65114]"></div>
      </div>
      <Buttons />
    </div>
  );
};

export default Filters;
