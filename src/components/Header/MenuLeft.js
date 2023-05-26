import React from "react";

const MenuLeft = () => {
  return (
    <div className="flex sm:gap-[10px] md:gap-[80px]">
      {/* ====== Brand Icon ====== */}
      <a href="/" className="sm:hidden md:block">
        <img src="./assets/brand.png" alt="Logo" className="ml-[40px]" />
      </a>
      {/* ====== Return Button ====== */}
      <a
        href="/"
        className="sm:flex md:hidden w-[60px] border-r border-r-[#FFCDCC] justify-center items-center h-[50px]"
      >
        <img
          src="./assets/return.png"
          alt="Return"
          className="w-[20px] m-auto"
        />
      </a>
      <div className="flex items-center gap-2">
        <img
          src="./assets/contact-icon.png"
          alt="contact"
          className="sm:w-[25px] md:w-[40px]"
        />
        <p className="pinkTextColor sm:text-[12px] md:text-[20px]">Mr. Kevin</p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="./assets/coin.png"
          alt="coin"
          className="sm:w-[25px] md:w-[40px]"
        />
        <div className="flex items-center gap-2">
          <p className="text-white sm:text-[12px] md:text-[20px]">Số dư:</p>
          <span className="yellowTextColor sm:text-[12px] md:text-[20px]">
            34,459.80
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
