import React from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

const Header = () => {
  return (
    <div className="sm:h-[50px] md:h-[60px] bg-[#26001A] w-full flex justify-between items-center">
      <MenuLeft />
      <MenuRight />
    </div>
  );
};

export default Header;
