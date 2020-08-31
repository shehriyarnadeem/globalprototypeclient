import React, { useState, useEffect } from "react";
import SidebarOption from "./SidebarOption/SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AppsIcon from "@material-ui/icons/Apps";
import CreateIcon from "@material-ui/icons/Create";

import "./Sidebar.css";
// import { useStatevalue } from "./StateProvider";
function Sidebar() {
  //const [{ user }] = useStatevalue();

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Global Prototype</h2>
        </div>
      </div>

      <SidebarOption Icon={AppsIcon} title="Option 1" />
      <SidebarOption Icon={AppsIcon} title="Option 2" />
      <SidebarOption Icon={AppsIcon} title="Option 3" />

      {/* Connect to db and list all the channels  */}
      {/* SidebarOption.... */}

      {/* {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))} */}
    </div>
  );
}

export default Sidebar;
