import React, { useState } from "react";

const Row = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#110012] xs:text-[12px] md:text-[.8vw]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white py-3 px-5 text-center bg-[#7C1F58] border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center w-full"
      >
        {item.two.split(" ")[0]}
        <div className="flex gap-8 items-center">
          <span>Tổng: 100.00</span>
          <img
            src={`./assets/icons/${isOpen ? "menu-up" : "menu-down"}.png`}
            alt={isOpen ? "menu-up" : "menu-down"}
            className="w-[12px] h-max"
          />
        </div>
      </button>

      <div className={isOpen ? "block" : "hidden"}>
        <div className="text-white py-3 px-5 text-center bg-[#7C1F58] border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center">
          {`${item.four} ${item.three}`}
          <div className="flex gap-8 items-center">
            <span className="font-bold">{`Trò chơi  ${item.five} / ${item.six}`}</span>
          </div>
        </div>

        <div className="text-white py-3 px-5 text-center border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center">
          <div className="flex flex-col gap-2 items-start">
            <span>Kết quả</span>
            <div className="flex gap-2">
              <img
                src="./assets/cube/2.png"
                alt="two"
                className="xs:w-[20px] sm:w-[30px] h-max"
              />
              <img
                src="./assets/cube/5.png"
                alt="five"
                className="xs:w-[20px] sm:w-[30px] h-max"
              />
              <img
                src="./assets/cube/5.png"
                alt="five"
                className="xs:w-[20px] sm:w-[30px] h-max"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span>TG bắt đầu</span>
            <span>{item.two.split(" ")[1]}</span>
            <span>Chiếu lại</span>
            <img
              src="./assets/icons/play.png"
              alt="menu-up"
              className="w-[25px] h-max"
            />
          </div>
        </div>

        <div className="text-white py-3 px-5 text-center border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <span className="px-3">Loại cược</span>
            <span className="px-3">Tiền cược</span>
            <span className="px-3">Vòng cược có giá trịi</span>
            <span className="px-3">Tỷ lệ</span>
            <span className="px-3">Thua / Thắng</span>
          </div>
        </div>

        <div
          className="text-white py-3 px-5 text-center border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center"
          style={{
            background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
          }}
        >
          <span className="font-bold">
            {`Giờ cược ${item.two.split(" ")[1]} ${item.three}`}
          </span>
          <span>Mã số phiếu {item.one}</span>
        </div>

        <div className="text-white py-3 px-5 text-center border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <span className="px-3 text-[#FF005C]">Tài</span>
            <span className="px-3">{item.eight}</span>
            <span className="px-3">{item.nine}</span>
            <span className="px-3">1</span>
            <span className="px-3">{item.ten}</span>
          </div>
        </div>

        <div
          className="text-white py-3 px-5 text-center border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center"
          style={{
            background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
          }}
        >
          <span className="font-bold">
            {`Giờ cược ${item.two.split(" ")[1]} ${item.three}`}
          </span>
          <span>Mã số phiếu {item.one}</span>
        </div>

        <div className="text-white py-3 px-5 text-center border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <span className="px-3 text-[#60BF3F]">Lẻ</span>
            <span className="px-3">{item.eight}</span>
            <span className="px-3">{item.nine}</span>
            <span className="px-3">-</span>
            <span className="px-3">{item.ten}</span>
          </div>
        </div>

        <div className="text-white py-3 px-5 text-center border border-[#FF005C] border-b-0 last:border-b flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <span className="px-3">Tổng</span>
            <span className="px-3">100.00</span>
            <span className="px-3">100.00</span>
            <span className="px-3"></span>
            <span className="px-3">0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
