import React from "react";

const Tracking = () => {
  const names = ["Lẻ / Chẵn", "Tài / Xỉu", "Tổng", "Xí ngầu"];
  let results = [];

  const getResults = () => {
    for (let i = 0; i < 200; i++) {
      results = [...results, ""];
    }
  };

  getResults();

  return (
    <div className="flex">
      <div className="w-[200px] flex flex-col">
        {names.map((item, i) => (
          <button
            key={i}
            className="py-2 border-b border-b-[#7C1F58] last:border-b-0 text-white bg-[#110012] listHover"
          >
            {item}
          </button>
        ))}
      </div>

      <table className="flex-1 flex flex-col flex-wrap border-collapse">
        <tbody>
          <tr className="flex flex-wrap">
            {results.map((item, i) => (
              <td
                key={i}
                className="h-[30px] border border-[#767676]"
                style={{ width: `${100 / 40}%` }}
              >
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tracking;
