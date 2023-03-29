import { Link, useNavigate } from "react-router-dom";
import React from "react";
import './Profile.css';
import wave from "../../img/wave.jpg";
import profilePic from "../../img/JessicaProfilePic.png";
import pic1 from "../../img/JessicaPicture1.png";
import pic2 from "../../img/JessicaPicture2.jpg";
import pic3 from "../../img/JessicaPicture3.jpg";
import pic4 from "../../img/JessicaPicture4.jpg";
import pic5 from "../../img/JessicaPicture5.jpg";
import pic6 from "../../img/JessicaPicture6.jpg";
import pic7 from "../../img/JessicaPicture7.jpg";
import pic8 from "../../img/JessicaPicture8.jpg";
import { FiBookmark } from "react-icons/fi";
import {BiSend} from "react-icons/bi";
import {MdOutlineMoreVert} from "react-icons/md";
import OrangeTag from "./OrangeTag";
import BlueTag from "./BlueTag";

export default function Profile() {
    return (
        <div className="grey-background">
            <div className="white-background">

                <div className="banner-container">
                    <img src={wave}>
                    </img>
                </div>

                <div className="profile-header-main-info-and-buttons">
                    <div className="profile-header-top-row">
                        <div className="profile-picture-container">
                            <img src={profilePic}></img>
                        </div>

                        <div className="name-age-gender-buttons-wrapper">
                            
                            <div className="name-age-gender-wrapper">
                                <text className="title-text" style={{lineHeight:"28px"}}>Jessica Jameson</text>
                                <text className="grey-subtitle-text" style={{lineHeight:"28px"}}>24 years • Female</text>
                            </div>

                            <div className="profile-buttons-wrapper">
                                <button className="yellow-profile-button-container" >
                                    <FiBookmark/>
                                    <text className="black-subtitle-text">
                                        Save User
                                    </text>
                                </button>

                                <button className="yellow-profile-button-container" >
                                    <BiSend/>
                                    <text className="black-subtitle-text">
                                        Send Invite
                                    </text>
                                </button>
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
                                @JessyJ
                            </text>
                        </div>
                        <div className="social-media-detail">
                            <i class="fa-brands fa-instagram" />
                            <text className="grey-subtitle-text">
                                @JessyJami
                            </text>
                        </div>
                        <div className="social-media-detail">
                            <i class="fa-brands fa-facebook" />
                            <text className="grey-subtitle-text">
                                facebook.com/doublej
                            </text> 
                        </div>
                    </div>

                    <div className="profile-header-description">
                        <text className="black-subtitle-text">
                            What’s up! I am an international student from America looking for someone to split rental costs with! 
                            I am an avid vegan. 
                            I am hoping to help local animal welfare groups by fostering cats when I move in :) 
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
                    <OrangeTag name="Cooking"/>
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
      );
}