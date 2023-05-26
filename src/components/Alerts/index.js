import React, { useContext } from "react";
import { Context } from "../../App";
import AlertComponent from "./AlertComponent";

const Alerts = () => {
  const { alert, AlertTypes } = useContext(Context);

  const getComponent = () => {
    if (alert.active) {
      if (alert.alert_type === AlertTypes.pink) {
        return <AlertComponent type={"pink"} />;
      } else if (alert.alert_type === AlertTypes.yellow) {
        return <AlertComponent type={"yellow"} />;
      } else if (alert.alert_type === AlertTypes.grey) {
        return <AlertComponent type={"grey"} />;
      } else if (alert.alert_type === AlertTypes.green) {
        return <AlertComponent type={"green"} />;
      }
    }
  };

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-none z-50 flex justify-center items-center">
      {getComponent()}
    </div>
  );
};

export default Alerts;
