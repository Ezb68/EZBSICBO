import React from "react";

const data = [
  {
    lable: "50 - 2,500",
    value: "",
  },
  {
    lable: "50 - 100,000",
    value: "",
  },
  {
    lable: "500 - 30,000",
    value: "",
  },
  {
    lable: "50.000 - 100,000",
    value: "",
  },
  {
    lable: "1,000 - 50,000",
    value: "",
  },
  {
    lable: "51,000 - 20,000",
    value: "",
  },
];

const Buttons = () => {
  return (
    <>
      <div className="flex-1 flex flex-wrap gap-3">
        {data.map((item, i) => (
          <button
            key={i}
            className="border border-[#FFCDCC] p-2 text-white rounded-[5px] xs:w-[80px] md:w-[160px] xs:text-[11px] sm:text-[12px] xl:text-[.8vw]"
          >
            {item.lable}
          </button>
        ))}
      </div>
      <button
        className="xs:w-[60px] md:w-[90px] rounded-[5px] text-white xs:text-[12px] sm:text-[14px] xl:text-[.8vw] p-2"
        style={{
          background: "linear-gradient(180deg, #FF005C 0%, #7B005B 100%)",
        }}
      >
        Xác nhận
      </button>
    </>
  );
};

export default Buttons;
