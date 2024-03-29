import {
    Box,
    FormControl,
    FormLabel,
    Input, InputLeftElement,
    Stack,
    Button,
    IconButton,
    Text,
    Image,
    Flex,
    Select,
    // FormErrorMessage,
    Heading,
    Icon,
    InputGroup,
    InputRightElement,
    ChakraProvider,
  
  } from '@chakra-ui/react';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Navbar.css';
  import Logo from "../../img/Icon.png"
  import RentHive from "../../img/RentHive.png"
  import HomeButton from "../../img/HomeButton.png"
  import SavedButton from "../../img/SavedButton.png"
  import NotificationButton from "../../img/NotificationButton.png"
  import UserIcon from "../../img/UserIcon.png"
  import { AiOutlineSearch } from "react-icons/ai";
  
  
  export default function NavbarSearch(){
    const navigate = useNavigate();
  
    const handleClick = (path) => {
        navigate(path);
    }
  
    
      return (
        <div className="navbar">
          <div className="logo" onClick={()=>{navigate("/")}}>
            <img className="beelogo" src={Logo} alt="Logo" />
            <img className="renthivelogo" src={RentHive} alt="RentHive" />
          </div>
          
          <div className="spacer"></div>
          <div className="icons-container">
            <div className="icons">
                <button onClick={()=>handleClick('/')} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer", marginRight: "20px"  }}><img src={HomeButton} alt="icon1" style={{ height: "30px"}} /></button>
                <button onClick={()=>handleClick('/savedprofile')} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer", marginRight: "20px" }}><img src={SavedButton} alt="icon2" style={{ height: "30px"}} /></button>
                <button onClick={()=>handleClick('/notifications')} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer", marginRight: "20px"  }}><img src={NotificationButton} alt="icon3" style={{ height: "30px"}} /></button>
                <button onClick={()=>handleClick('/selfprofile')} style={{ border: "none", backgroundColor: "transparent", cursor:"pointer" }}><img src={UserIcon} alt="icon4" style={{ height: "30px" }} /></button>
            </div>
          </div>
        </div>
      );
  };