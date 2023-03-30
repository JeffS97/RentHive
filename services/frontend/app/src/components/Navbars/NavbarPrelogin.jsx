import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarPrelogin.css';
import Logo from "../../img/Icon.png"
import RentHive from "../../img/RentHive.png"

export default function NavbarPrelogin(props){
  const navigate = useNavigate();

  const handleClick = (path) => {
      if(path == 'Log In'){
        navigate('/login')
      }
      else{
        navigate('/signup');
      }
      
  }
    return (
      <div className="navbar">
        <div className="logo">
          <img className="beelogo" src={Logo} alt="Logo" />
          <img className="renthivelogo" src={RentHive} alt="RentHive" />
        </div>
        <div className="spacer"></div>
        <button className="inbutton" onClick={() => handleClick(props.text)}>
            {props.text}
        </button>
      </div>
    );
};