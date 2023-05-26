import React from "react";

const HealthBar = ({ data }) => {
  return (
    <div>
      {data.health && (
        <div
          className="h-full w-[4px] flex items-end"
          style={{
            background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
          }}
        >
          <div
            className="w-full"
            style={{
              height: `${data.health}%`,
              background: `linear-gradient(180deg, ${data.barColor1} 0%, ${data.barColor1} 100%)`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default HealthBar;
