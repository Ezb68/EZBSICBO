import React from "react";

const Calendar = () => {
  return (
    <div className="rounded-[5px] border border-[#FF005C] text-white p-2 xs:px-3 md:px-5 flex items-center xs:gap-1 md:gap-3 bg-[#110012] xs:w-[90vw] sm:w-max">
      <img src="./assets/icons/calendar.png" alt="calendar" />
      <p className="xs:text-[12px] sm:text-[14px] lg:text-[1vw] xl:text-[.8vw]">
        05-11-2022
      </p>
    </div>
  );
};

export default Calendar;
