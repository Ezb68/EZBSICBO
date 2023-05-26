import React from "react";

const DropdownList = ({ item }) => {
  return (
    <div>
      {item.map((val, i) => (
        <button
          key={i}
          className="flex justify-center items-center text-white w-full border border-[#7C1F58] border-b-0 last:border-b py-3 px-5 listHover sm:text-[14px] md:text-[.8vw]"
          style={{
            background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
          }}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default DropdownList;
