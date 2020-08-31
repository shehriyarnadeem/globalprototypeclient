import React from "react";
import { useStatevalue } from "../../context/StateProvider";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./Header.css";
function Header() {
  const [{ user }] = useStatevalue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoUrl}
        />
        <AccessTimeIcon />
        {/* Avatars for logged in user */}
        {/* Time Icon */}
      </div>

      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
