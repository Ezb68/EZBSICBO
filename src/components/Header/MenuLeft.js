import React from "react";

const MenuLeft = () => {
  return (
    <div className="flex xs:gap-[10px] lg:gap-[80px]">
      {/* ====== Brand Icon ====== */}
      <a href="/" className="xs:hidden md:block">
        <img
          src="./assets/brand.png"
          alt="Logo"
          className="md:ml-4 lg:ml-[40px]"
        />
      </a>
      {/* ====== Return Button ====== */}
      <a
        href="/"
        className="xs:flex md:hidden w-[60px] border-r border-r-[#FFCDCC] justify-center items-center h-[50px]"
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
          className="xs:w-[25px] md:w-[40px]"
        />
        <p className="pinkTextColor xs:text-[12px] lg:text-[14px] xl:text-[20px]">
          Mr. Kevin
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="./assets/coin.png"
          alt="coin"
          className="xs:w-[25px] md:w-[40px]"
        />
        <div className="flex xs:flex-col sm:flex-row items-center xs:gap-0 sm:gap-2">
          <p className="text-white xs:text-[12px] lg:text-[14px] xl:text-[20px]">
            Số dư:
          </p>
          <span className="yellowTextColor xs:text-[12px] lg:text-[14px] xl:text-[20px]">
            34,459.80
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
