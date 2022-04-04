import React from "react";
import "./Header.css";
import searchIcon from "../assets/header/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          src={process.env.PUBLIC_URL + "/cryptopunk-logo.png"}
          className="punkLogo"
          alt=""
        />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        ></input>
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={process.env.PUBLIC_URL + "/theme-switch.png"} alt="" />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
