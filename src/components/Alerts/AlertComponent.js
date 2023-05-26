import React from "react";

const AlertComponent = ({ type }) => {
  return (
    <div className="sm:w-[70%] md:w-[400px] sm:h-[80px] md:h-[100px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:mt-0 md:mt-[200px] flex justify-center items-center">
      <p className="text-white font-bold z-10 sm:text-[4vw] md:text-[24px]">
        Đã sẵn sàng, mời đặt cược!
      </p>
      <img
        src={`./assets/alerts/${type}.png`}
        alt="pink"
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default AlertComponent;
