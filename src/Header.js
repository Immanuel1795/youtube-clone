import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState([]);

  function handleChange(e){
    setInputSearch(e.target.value);

  }

  function handleClick(){
    setInputSearch("");
  }


  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="menu-icon"/>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Youtube_Logo_2005.png/250px-Youtube_Logo_2005.png"
            alt="utube"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={handleChange}
          value={inputSearch}
          placeholder="Search for Videos"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon onClick={handleClick}/>
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          className="img-av"
          alt="avatb"
          src=""
        />
      </div>
    </div>
  );
}

export default Header;
