import React from "react";

const User = () => {
  return (
    <div className="flex flex-col justify-center items-center px-3 py-5 gap-3 border-b border-b-[#767676] last:border-b-0">
      <img
        src="./assets/contact-icon.png"
        alt="user"
        className="w-[50px] h-[50px]"
      />
      <button className="relative py-5 w-full h-[40px]">
        <p className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold xs:text-[14px] xl:text-[.8vw]">
          MrKevin
        </p>
        <img
          src="./assets/gold-button.png"
          alt="button"
          className="absolute top-0 left-0"
        />
      </button>
    </div>
  );
};

export default User;
