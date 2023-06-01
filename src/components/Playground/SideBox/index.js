import React from "react";
import List from "./List";
import Upper from "./Upper";

const SideBox = () => {
  return (
    <div
      className="w-[35%] lg:p-4 2xl:p-6 xs:hidden lg:flex flex-col gap-6 overflow-hidden overflow-y-scroll"
      style={{
        background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
      }}
    >
      <Upper />
      <List />
    </div>
  );
};

export default SideBox;
