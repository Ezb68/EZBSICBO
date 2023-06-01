import React from "react";
import Card from "./Card";

const data = [1, 2, 3, 4, 5, 6];

const SixthRow = () => {
  return (
    <div className="flex space-x-2 justify-between">
      {data.map((item, i) => (
        <Card key={i} data={item} />
      ))}
    </div>
  );
};

export default SixthRow;
