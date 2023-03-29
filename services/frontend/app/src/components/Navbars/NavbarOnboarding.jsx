import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarOnboarding.css';
import Logo from "../../img/Icon.png"
import RentHive from "../../img/RentHive.png"

export default function NavbarOnboarding(){
  const navigate = useNavigate();

    return (
      <div className="navbar">
        <div className="spacer"></div>
        <div className="logo">
          <img className="beelogo" src={Logo} alt="Logo" />
          <img className="renthivelogo" src={RentHive} alt="RentHive" />
        </div>
        <div className="spacer"></div>
      </div>
    );
};