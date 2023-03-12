import React from 'react';
import './Navbar.css';
import Logo from "../img/Icon.png"
import RentHive from "../img/RentHive.png"
import HomeButton from "../img/HomeButton.png"
import SavedButton from "../img/SavedButton.png"
import NotificationButton from "../img/NotificationButton.png"
import UserIcon from "../img/UserIcon.png"

export default function Navbar(){

const handleClick = () => {
    console.log("clicked");
}
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <img src={RentHive} alt="RentHive" />
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input className="search-text" type="text" placeholder="Search" />
      </div>
      <div className="spacer"></div>
      <div className="icons-container">
        <div className="icons">
            <button onClick={handleClick} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer", marginRight: "20px"  }}><img src={HomeButton} alt="icon1" style={{ height: "30px"}} /></button>
            <button onClick={handleClick} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer", marginRight: "20px" }}><img src={SavedButton} alt="icon2" style={{ height: "30px"}} /></button>
            <button onClick={handleClick} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer", marginRight: "20px"  }}><img src={NotificationButton} alt="icon3" style={{ height: "30px"}} /></button>
            <button onClick={handleClick} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer" }}><img src={UserIcon} alt="icon4" style={{ height: "30px" }} /></button>
        </div>
      </div>
    </div>
  );
};