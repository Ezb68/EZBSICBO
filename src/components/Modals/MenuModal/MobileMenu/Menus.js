import React from "react";
import Buttons from "./Buttons";

const Menus = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => (
        <Buttons data={item} key={i} />
      ))}
    </div>
  );
};

export default Menus;
