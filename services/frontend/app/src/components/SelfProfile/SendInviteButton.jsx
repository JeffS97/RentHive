import {BiSend, BiMailSend, BiNoEntry} from "react-icons/bi";
import {RiMailCheckLine, RiMailCloseLine} from "react-icons/ri";
import {React, useState} from "react";
import "./SelfProfile.css";

export default function SendInviteButton() {
    const [isInviteSent, setIsInviteSent] = useState(false);
    const [hover, setHover] = useState(false);

    function handleClick() {
        if (isInviteSent == false) {
            setIsInviteSent(true);
        } else {
            setIsInviteSent(false);
        }
        
        console.log("isInviteSent: " + isInviteSent);
    }

    function handleHover() {
        setHover(true);
        console.log("hover: " + hover);

    }

    function handleMouseLeave() {
        setHover(false);
        console.log("hover: " + hover);

    }

    return (
        <>
            {
                isInviteSent == false? 
                <button className="yellow-profile-button-container" onClick={handleClick}>
                    <BiSend/>
                    <text className="black-subtitle-text">
                        Send Invite
                    </text>
                </button>
                :
                <button className="outlined-profile-button-container" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    {
                        hover == false? 
                        <>
                            <RiMailCheckLine/>
                            <text className="black-subtitle-text">
                                Invite Sent!
                            </text>
                        </>

                        :

                        <>
                            <RiMailCloseLine/>
                            <text className="black-subtitle-text">
                                Withdraw?
                            </text>
                        </>

                    }
                    
                    
                </button>
            }
        </>
    )
}