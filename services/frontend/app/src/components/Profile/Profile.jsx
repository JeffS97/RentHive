import {
  Box,
} from '@chakra-ui/react';
import { Link, useNavigate, useEffect } from "react-router-dom";
import {React, useState} from "react";
import './Profile.css';
import wave from "../../img/wave.jpg";
import pic1 from "../../img/JessicaPicture1.png";
import pic2 from "../../img/JessicaPicture2.jpg";
import pic3 from "../../img/JessicaPicture3.jpg";
import pic4 from "../../img/JessicaPicture4.jpg";
import pic5 from "../../img/JessicaPicture5.jpg";
import pic6 from "../../img/JessicaPicture6.jpg";
import pic7 from "../../img/JessicaPicture7.jpg";
import pic8 from "../../img/JessicaPicture8.jpg";
import {MdOutlineMoreVert} from "react-icons/md";
import OrangeTag from "./OrangeTag";
import BlueTag from "./BlueTag";
import SaveUserButton from './SaveUserButton';
import SendInviteButton from './SendInviteButton';
import Navbar from '../Navbars/Navbar';
import users from "./MOCK_DATA.json";
// import profilepic from "../../../public/Profilepics/guy2.png";

export default function Profile({name}) {
    /*-------------------------------
    GETTING USER DATA (Stored as user)
    --------------------------------*/
    var user = [];
    //we know what user to display because when profilecard is clicked, 
    //it passes the profilename to localstorage
    const profilename = localStorage.getItem('profilename');
    for (let i = 0; i < users.length; i++) {
        if (users[i].full_name == profilename) {
            user = users[i];
            console.log(user);
        }
    }
    /*-------------------------------------
    PATH FORMATTING FOR GETTING PROFILE PIC
    --------------------------------------*/
    const profilePicPath = "../../../public" + JSON.stringify(user.icon).substring(1, JSON.stringify(user.icon).length-1);
    console.log(profilePicPath);

    return (
      <>
      <Navbar/>
      <Box bg="#F0F0F0">
        <div className="grey-background">
            <div className="white-background">
                <div className="banner-container">
                    <img src={wave}>
                    </img>
                </div>

                <div className="profile-header-main-info-and-buttons">
                    <div className="profile-header-top-row">
                        <div className="profile-picture-container">
                            <img src={user.icon}></img>
                        </div>

                        <div className="name-age-gender-buttons-wrapper">
                            
                            <div className="name-age-gender-wrapper">
                                <text className="title-text" style={{lineHeight:"28px"}}>{user.full_name}</text>
                                <text className="grey-subtitle-text" style={{lineHeight:"28px"}}>{user.age} • {user.gender}</text>
                            </div>

                            <div className="profile-buttons-wrapper">
                                <SaveUserButton/>

                                <SendInviteButton/>

                                <button className="transparent-profile-button-container">
                                    <MdOutlineMoreVert/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="profile-header-contact-details">
                        <div className="social-media-detail">
                            <i class="fa-brands fa-telegram" />
                            <text className="grey-subtitle-text">
                                {"@TeleMe!_" + user.full_name}
                            </text>
                        </div>
                        <div className="social-media-detail">
                            <i class="fa-brands fa-instagram" />
                            <text className="grey-subtitle-text">
                                {"@InstaTime_" + user.full_name}
                            </text>
                        </div>
                        <div className="social-media-detail">
                            <i class="fa-brands fa-facebook" />
                            <text className="grey-subtitle-text">
                                {"facebook.com/" + user.full_name}
                            </text> 
                        </div>
                    </div>

                    <div className="profile-header-description">
                        <text className="black-subtitle-text">
                            {user.bio} 
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
                    <OrangeTag name={"" + user.tag1}/>
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
                    <OrangeTag name={"" + user.tag2}/>
                    <OrangeTag name="Music"/>
                    <BlueTag name="Painting"/>
                    <BlueTag name="Dancing"/>
                  </div>
                </div>
                <div className="profile-line"/>

                <div className="picture-grid">
                  <div className="picture-item">
                    <img src={pic1}/>
                  </div>
                  <div className="picture-item">
                    <img src={pic2}/>
                  </div>
                  <div className="picture-item">
                    <img src={pic3}/>
                  </div>
                  <div className="picture-item">
                    <img src={pic4}/>
                  </div>
                  <div className="picture-item">
                    <img src={pic5}/>
                  </div>
                  <div className="picture-item">
                    <img src={pic6}/>
                  </div>
                  <div className="picture-item">
                    <img src={pic7}/>
                  </div>
                  <div className="picture-item">
                    <img src={pic8}/>
                  </div>
                </div>

            </div>
        </div>
        </Box>
        </>
      );
}