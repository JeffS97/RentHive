import { FiBookmark } from "react-icons/fi";
import {BiCheck} from "react-icons/bi";
import {React, useState} from "react";
import "./Profile.css";

export default function SaveUserButton() {
    const [isUserSaved, setIsUserSaved] = useState(false);
    function toggleUserSaved() {
        if (isUserSaved == false) {
            setIsUserSaved(true);
        } else {
            setIsUserSaved(false);
        }

        console.log("isUserSaved: " + isUserSaved);
    }

    return(
        <>
            {
                isUserSaved == false ?
            
            <button className="yellow-profile-button-container" onClick={toggleUserSaved}>
                <FiBookmark/>
                <text className="black-subtitle-text">
                    Save User
                </text>
            </button> 
    
            :
    
            <button className="outlined-profile-button-container" onClick={toggleUserSaved}>
                <BiCheck/>
                <text className="black-subtitle-text">
                    User saved!
                </text>
            </button> 
            }
        </>
    )
}