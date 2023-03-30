import {BiSend, BiMailSend} from "react-icons/bi";
import {React, useState} from "react";
import "./Profile.css";

export default function SendInviteButton() {
    const [isInviteSent, setIsInviteSent] = useState(false);

    return (
        <>
            {
                isInviteSent == false? 
                <button className="yellow-profile-button-container" onClick={()=>{setIsInviteSent(true)}}>
                    <BiSend/>
                    <text className="black-subtitle-text">
                        Send Invite
                    </text>
                </button>
                :
                <button className="outlined-profile-button-container">
                    <BiMailSend/>
                    <text className="black-subtitle-text">
                        Invite Sent!
                    </text>
                </button>
            }
        </>
    )
}