import React from "react";

const data = [
  {
    one: "Tài / Xỉu",
    two: "50 - 2,500",
    three: "Tổng 4/17",
    four: "10 - 50",
  },
  {
    one: "Tài / Xỉu",
    two: "50 - 2,500",
    three: "Tổng 4/17",
    four: "10 - 50",
  },
  {
    one: "Tài / Xỉu",
    two: "50 - 2,500",
    three: "Tổng 4/17",
    four: "10 - 50",
  },
  {
    one: "Tài / Xỉu",
    two: "50 - 2,500",
    three: "Tổng 4/17",
    four: "10 - 50",
  },
  {
    one: "Tài / Xỉu",
    two: "50 - 2,500",
    three: "Tổng 4/17",
    four: "10 - 50",
  },
  {
    one: "Tài / Xỉu",
    two: "50 - 2,500",
    three: "Tổng 4/17",
    four: "10 - 50",
  },
];

const DataTable = () => {
  return (
    <div className="flex py-4">
      <table className="w-full">
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td className="w-1/4 text-left text-[#FEB00C] py-2 sm:text-[12px] md:text-[.8vw]">
                {item.one}
              </td>
              <td className="w-1/4 text-left text-white py-2 sm:text-[12px] md:text-[.8vw]">
                {item.two}
              </td>
              <td className="w-1/4 text-center text-[#FEB00C] py-22 sm:text-[12px] md:text-[.8vw]">
                {item.three}
              </td>
              <td className="w-1/4 text-center text-white py-2 sm:text-[12px] md:text-[.8vw]">
                {item.four}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
