import {
  Box,
} from '@chakra-ui/react';
import { Link, useNavigate, useEffect } from "react-router-dom";
import {React, useState} from "react";
import './SelfProfile.css';
import purplefield from "../../img/PurpleField.jpg";
import OrangeTag from "./OrangeTag";
import BlueTag from "./BlueTag";
import EditUserButton from './EditUserButton';
import SendInviteButton from './SendInviteButton';
import Navbar from '../Navbars/Navbar';
import users from "./MOCK_DATA.json";
import profile from "./profile.jpeg"
import profile2 from "./Kyedae2.jpeg"
import profile3 from "./profile3.jpg"
// import profilepic from "../../../public/Profilepics/guy2.png";

export default function SelfProfile({name}) {
    /*-------------------------------
    GETTING SELF USER DATA
    --------------------------------*/
    const myName = localStorage.getItem("myName").substring(1, localStorage.getItem("myName").length -1);
    const myAge = localStorage.getItem("myAge").substring(1, localStorage.getItem("myAge").length -1);
    const myGender = localStorage.getItem("myGender").substring(1, localStorage.getItem("myGender").length -1);
    const myDescription = localStorage.getItem("myDescription");

    return (
      <>
      <Navbar/>
      <Box bg="#F0F0F0">
        <div className="grey-background">
            <div className="white-background">
                <div className="banner-container">
                    <img src={purplefield}>
                    </img>
                </div>

                <div className="profile-header-main-info-and-buttons">
                    <div className="profile-header-top-row">
                        <div className="profile-picture-container">
                            <img src={profile}></img>
                        </div>

                        <div className="name-age-gender-buttons-wrapper">
                            
                            <div className="name-age-gender-wrapper">
                                <text className="title-text" style={{lineHeight:"28px"}}>{myName}</text>
                                <text className="grey-subtitle-text" style={{lineHeight:"28px"}}>{myAge} • {myGender}</text>
                            </div>

                            <div className="profile-buttons-wrapper">
                                <EditUserButton/>
                            </div>

                        </div>
                    </div>

                    <div className="profile-header-contact-details">
                        <div className="social-media-detail">
                            <i class="fa-brands fa-telegram" />
                            <text className="grey-subtitle-text">
                                {"@TeleMe!_" + myName}
                            </text>
                        </div>
                        <div className="social-media-detail">
                            <i class="fa-brands fa-instagram" />
                            <text className="grey-subtitle-text">
                                {"@InstaTime_" + myName}
                            </text>
                        </div>
                        <div className="social-media-detail">
                            <i class="fa-brands fa-facebook" />
                            <text className="grey-subtitle-text">
                                {"facebook.com/" + myName}
                            </text> 
                        </div>
                    </div>

                    <div className="profile-header-description">
                        <text className="black-subtitle-text">
                            {myDescription} 
                        </text>
                    </div>

                    <div className="profile-header-mutuals-section">
                        <text className="grey-body-text">
                            You both follow
                        </text>
                        <div className="mutual-container">
                            <i class="fa-brands fa-facebook"/>
                            <text className="grey-body-text">
                                Felice Nevihat
                            </text>
                        </div>
                        <text className="grey-body-text"> 
                            ,
                        </text>
                        <div className="mutual-container">
                            <i class="fa-brands fa-instagram"/>
                            <text className="grey-body-text">
                                Mark Imar
                            </text>
                        </div>
                        <div className="mutual-container">
                            <text className="grey-body-text">
                                + 3 others.
                            </text>
                        </div>
                    </div>

                </div>

                <div className="profile-line"/>
                <div className="tags-grid">
                  <div className="tag-label-location">
                    <text className="grey-small-text">
                      Location: 
                    </text>
                  </div>
                  <div className="location-tags">
                    <OrangeTag name="Bedok"/>
                    <BlueTag name="Tanah Merah"/>
                    <BlueTag name="Pasir Ris"/>
                  </div>
                  <div className="tag-label-traits">
                    <text className="grey-small-text">
                      Traits: 
                    </text>
                  </div>
                  <div className="traits-tags">
                    <OrangeTag name="Early Bird"/>
                    <BlueTag name="Vegan"/>
                    <BlueTag name="Christian"/>
                    <BlueTag name="Cats"/>
                  </div>
                  <div className="tag-label-interests">
                    <text className="grey-small-text">
                      Interests: 
                    </text>
                  </div>
                  <div className="interests-tags">
                    <OrangeTag name="Basketball"/>
                    <OrangeTag name="Music"/>
                    <BlueTag name="Painting"/>
                    <BlueTag name="Dancing"/>
                  </div>
                </div>
                <div className="profile-line"/>

                <div className="picture-grid">
                  <div className="picture-item">
                    <img src={profile2}/>
                  </div>
                  <div className="picture-item">
                    <img src={profile3}/>
                  </div>
                  {/* <div className="picture-item">
                    <img src={pic3}/>
                  </div> */}
                </div>

            </div>
        </div>
        </Box>
        </>
      );
}