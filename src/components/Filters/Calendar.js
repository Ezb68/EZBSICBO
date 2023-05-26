import React from "react";

const Calendar = () => {
  return (
    <div className="rounded-[5px] border border-[#FF005C] text-white p-2 sm:px-3 md:px-5 flex items-center sm:gap-1 md:gap-3 bg-[#110012]">
      <img src="./assets/icons/calendar.png" alt="calendar" />
      <p className="sm:text-[14px] md:text-[.8vw]">05-11-2022</p>
    </div>
  );
};

export default Calendar;
