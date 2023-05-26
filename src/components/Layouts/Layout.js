import React, { useContext } from "react";
import Modals from "../Modals";
import { Context } from "../../App";
import Alerts from "../Alerts";

const Layout = ({ children }) => {
  const { modal, alert } = useContext(Context);
  return (
    <div>
      {modal.active && <Modals />}
      {alert.active && <Alerts />}
      {children}
    </div>
  );
};

export default Layout;
