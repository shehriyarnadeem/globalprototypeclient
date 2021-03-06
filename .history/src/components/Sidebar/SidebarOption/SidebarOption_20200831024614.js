import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";
import db from "./firebase";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">@</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
