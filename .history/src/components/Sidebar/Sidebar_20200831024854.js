import React, { useState, useEffect } from "react";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AppsIcon from "@material-ui/icons/Apps";
import CreateIcon from "@material-ui/icons/Create";
import db from "./firebase";
import "./Sidebar.css";
import { useStatevalue } from "./StateProvider";
function Sidebar() {
  const [{ user }] = useStatevalue();
  const [channels, setChannels] = useState([]);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Workspace</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
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
