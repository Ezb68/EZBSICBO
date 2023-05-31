import React from "react";

const tableHeader = [
  "Mã số phiếu",
  "Thời gian",
  "Bán",
  "Tên trò chơi",
  "Hộp bài",
  "Ván",
  "Loại cược",
  "Tiền cược",
  "Vòng cược có giá trị",
  "Thua / Thắng",
  "Kết quả",
  "Chiếu lại",
];

const tableData = [
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "14/11/2022 14:45:21",
    three: 51,
    four: "Tài xỉu",
    five: 19505,
    six: 85,
    seven: "Tài",
    eight: 50,
    nine: "50.00",
    ten: "50.00",
    eleven: "2.5.5",
  },
  {
    one: "EZB-1267343423",
    two: "",
    three: null,
    four: "",
    five: null,
    six: null,
    seven: "",
    eight: 50,
    nine: "50.00",
    ten: "",
    eleven: "2.5.5",
  },
];

const DataTable = () => {
  return (
    <table class="table-auto w-full border-collapse xs:hidden md:table">
      <thead>
        <tr className="xs:text-[14px] md:text-[.8vw] xs:hidden md:table-row">
          {tableHeader.map((item, i) => (
            <th key={i} className="text-white py-2 px-3 bg-[#7C1F58]">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, i) => (
          <tr
            key={i}
            className="border border-[#FF005C] bg-[#110012] xs:text-[14px] md:text-[.8vw]"
          >
            <td className="text-white py-2 px-3 text-center">{item.one}</td>
            <td className="text-white py-2 px-3 text-center">{item.two}</td>
            <td className="text-white py-2 px-3 text-center">{item.three}</td>
            <td className="text-white py-2 px-3 text-center">{item.four}</td>
            <td className="text-white py-2 px-3 text-center">{item.five}</td>
            <td className="text-white py-2 px-3 text-center">{item.six}</td>
            <td className="text-white py-2 px-3 text-center">{item.seven}</td>
            <td className="text-white py-2 px-3 text-center">{item.eight}</td>
            <td className="text-white py-2 px-3 text-center">{item.nine}</td>
            <td className="text-white py-2 px-3 text-center">{item.ten}</td>
            <td className="text-white py-2 px-3 text-center">{item.eleven}</td>
            <td className="text-white py-2 px-3 text-center">
              <img
                src="./assets/icons/play.png"
                alt="play"
                className="m-auto"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
