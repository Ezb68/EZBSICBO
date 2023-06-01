import React, { useState } from "react";
import DropdownList from "./DropdownList";

const Buttons = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex justify-between items-center text-white w-full border border-[#7C1F58] border-b-0 last:border-b py-3 px-5 listHover"
        style={{
          background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
        }}
        onClick={() => (data.isDropdown ? setIsOpen(!isOpen) : false)}
      >
        <span className="sm:text-[14px] xl:text-[.8vw]">{data.label}</span>
        <span>
          {data.isDropdown && (
            <img
              src={`./assets/icons/${isOpen ? "menu-down" : "menu-right"}.png`}
              alt="dropdown"
              className="w-[15px]"
            />
          )}
        </span>
      </button>
      {isOpen && data.isDropdown && <DropdownList item={data.lists} />}
    </div>
  );
};

export default Buttons;
