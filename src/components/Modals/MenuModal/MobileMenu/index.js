import React, { useState } from "react";
import Switch from "./Switch";
import Menus from "./Menus";

const data = [
  {
    label: "Ngôn ngữ",
    isDropdown: true,
    lists: ["Tiếng Việt", "Tiếng Anh", "Tiếng Campuchia"],
  },
  {
    label: "Báo cáo lịch sử",
    isDropdown: false,
  },
  {
    label: "Chi tiết sự kiện",
    isDropdown: true,
    lists: ["Tiếng Việt", "Tiếng Anh", "Tiếng Campuchia"],
  },
];

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="sm:w-[50%] md:w-[35%] lg:w-[25%] xl:w-[18%] sm:h-[calc(100vh_-_50px)] md:h-[calc(100vh_-_60px)] absolute right-0 top-0"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <Menus data={data} />
      <div
        className="flex justify-between items-center text-white w-full border border-[#7C1F58] border-b-0 last:border-b py-3 px-5"
        style={{
          background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
        }}
      >
        <span className="flex items-center gap-2">
          <img
            src="./assets/coins/res.png"
            alt="dropdown"
            className="xs:w-[20px] sm:w-[25px] md:w-[30px]"
          />

          <span className="xs:text-[12px] sm:text-[14px] xl:text-[.8vw]">
            Cá cược tự động
          </span>
        </span>
        <Switch active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default MobileMenu;
