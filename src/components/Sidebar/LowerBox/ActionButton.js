import React from "react";

const ActionButton = () => {
  return (
    <div className="flex justify-between xs:mt-0 md:mt-4 xs:mb-4 md:mb-10 xs:px-5 md:px-0 space-x-3">
      <button className="relative">
        <img src="./assets/sidebar/done.png" alt="ok" className="h-full" />
      </button>
      <button className="relative">
        <img src="./assets/sidebar/re.png" alt="reset" className="h-full" />
      </button>
      <button className="relative">
        <img src="./assets/sidebar/cancel-icon.png" alt="cancel" />
      </button>
    </div>
  );
};

export default ActionButton;
