import React from "react";

const DropDown = ({ data }) => {
  return (
    <div className="rounded-[5px] border border-[#FF005C] text-white p-2 px-5 flex items-center gap-3 bg-[#110012]">
      <p>{data}</p>
      <img src="./assets/menu-right/dropdown.png" alt="drowpdown" />
    </div>
  );
};

export default DropDown;
