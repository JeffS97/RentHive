import {BiEdit} from "react-icons/bi";
import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./SelfProfile.css";

export default function EditProfileButton() {
    const navigate = useNavigate();

    return(
        <button className="yellow-profile-button-container" onClick={() => navigate("/onboarding1")}>
            <BiEdit/>
            <text className="black-subtitle-text">
                Edit Profile
            </text>
        </button> 
    )
}