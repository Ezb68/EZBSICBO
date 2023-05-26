import React from "react";

const Tracking = () => {
  let results = [];

  const getResults = () => {
    for (let i = 0; i < 78; i++) {
      results = [...results, ""];
    }
  };

  getResults();

  return (
    <table className="flex-1 flex flex-col flex-wrap border-collapse w-[95%] mx-auto my-4">
      <tbody>
        <tr className="flex flex-wrap">
          {results.map((item, i) => (
            <td
              key={i}
              className="h-[30px] border border-[#767676] bg-[#0E0508]"
              style={{ width: `${100 / 13}%` }}
            >
              {item}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Tracking;
