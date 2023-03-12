import React from 'react';
import './Notifications.css';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { BiNoEntry } from "react-icons/bi";
import { IoReturnUpBack } from "react-icons/io5";
import FemalePic from "../../img/ProfileCeleste.png";
import MalePic from "../../img/ProfileTenz.png";
import RandomPic from "../../img/ProfileFemale.png";


// sample data
const receivedInvites = [
  {
    id: 1,
    fullName: 'Celeste Hong',
    age: '22 years',
    gender: 'Female',
    match:'91% Match',
    common1: 'Bedok',
    common2: 'Early Bird',
    details: 'I’m a postgrad student from Korea that loves penguins and peaches! It would be a pleasure to meet you :)',
    image: FemalePic,
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    age: '22 years',
    gender: 'Female',
    match:'91% Match',
    common1: 'Bedok',
    common2: 'Early Bird',
    details: 'I’m a postgrad student from Korea that loves penguins and peaches! It would be a pleasure to meet you :)',
    image: FemalePic,
  },
];

const sentInvites = [
  {
    id: 1,
    fullName: 'Samuel Samson',
    age: '22 years',
    gender: 'Male',
    match:'91% Match',
    common1: 'Bedok',
    common2: 'Early Bird',
    details: 'I’m a professional lawyer and enjoy taking long walks on the beach :) Hope to make friends with my roomie!',
    image: MalePic,
  },
  {
    id: 2,
    fullName: 'Alice Williams',
    age: '22 years',
    gender: 'Female',
    match:'91% Match',
    common1: 'Bedok',
    common2: 'Early Bird',
    details: 'What’s up! I am an international student from America looking for someone to split rental costs with! I am an avid vegan.',
    image: RandomPic,
  },
];

export default function Notifications() {
  const handleAcceptAll = () => {
    console.log('Accept All clicked');
  };

  const handleRejectAll = () => {
    console.log('Reject All clicked');
  };

  const handleIgnoreAll = () => {
    console.log('Ignore All clicked');
  };

  const handleWithdrawAll = () => {
    console.log('Withdraw All clicked');
  };

  const handleAccept = (id) => {
    console.log(`Accept invite with ID ${id} clicked`);
  };

  const handleReject = (id) => {
    console.log(`Reject invite with ID ${id} clicked`);
  };

  const handleIgnore = (id) => {
    console.log(`Ignore invite with ID ${id} clicked`);
  };

  const handleWithdraw = (id) => {
    console.log(`Withdraw invite with ID ${id} clicked`);
  };

  return (
    <div className="notifications">
      <div className="received-invites">
      <h1>Notifications</h1>
      <div className="beepboop">
        <p className="sectionheader">Received Invites</p>
        <div className="spacer"></div>
        <div className="received-invites-buttons">
          <button className="transparent-btn" onClick={handleAcceptAll}><TiTick className="buttonicon"/>Accept All</button>
          <button className="transparent-btn" onClick={handleRejectAll}><RxCross2 className="buttonicon"/>Reject All</button>
          <button className="transparent-btn" onClick={handleIgnoreAll}><BiNoEntry className="buttonicon"/>Ignore All</button>
          </div>
        </div>
        {receivedInvites.map((invite) => (
          <div className="card" key={invite.id}>
            <img src={invite.image} alt={invite.fullName} style={{ width: '90px', height: '86px' }} />
            <span><p><span className="cardname">{invite.fullName}</span> <span className="cardagegender">{invite.age} • {invite.gender}</span> <span className="cardmatch">{invite.match}</span></p><p><span className="carddetails">{invite.details}</span></p><p><span className="cardcommon">You both have in common: </span><span className="cardcommonbadge1">{invite.common1}</span><span className="cardcommonbadge2"> {invite.common2} </span><span className="cardcommon">+ 2 more.</span></p></span>
            <div className="spacer"></div>
            <div className="card-buttons">
              <button className="selectbutton" onClick={() => handleAccept(invite.id)}><TiTick className="buttonicon"/>Accept</button>
              <button className="selectbutton" onClick={() => handleReject(invite.id)}><RxCross2 className="buttonicon"/>Reject</button>
              <button className="selectbutton" onClick={() => handleIgnore(invite.id)}><BiNoEntry className="buttonicon"/>Ignore</button>
            </div>
          </div>
        ))}
      </div>

      <div className="sent-invites">
      <div className="beepboop">
      <p className="sectionheader">Sent Invites</p>
        <div className="spacer"></div>
        <div className="received-invites-buttons">
        <button className="transparent-btn" onClick={handleWithdrawAll}><IoReturnUpBack className="buttonicon"/>Withdraw All</button>
        </div>
        </div>
        {sentInvites.map((invite) => (
          <div className="card" key={invite.id}>
            <img src={invite.image} alt={invite.fullName} style={{ width: '90px', height: '86px' }} />
            <span><p><span className="cardname">{invite.fullName}</span> <span className="cardagegender">{invite.age} • {invite.gender}</span> <span className="cardmatch">{invite.match}</span></p><p><span className="carddetails">{invite.details}</span></p><p><span className="cardcommon">You both have in common: </span><span className="cardcommonbadge1">{invite.common1}</span><span className="cardcommonbadge2"> {invite.common2} </span><span className="cardcommon">+ 2 more.</span></p></span>
            <div className="card-buttons">
              <button className="selectbutton" onClick={() => handleWithdraw(invite.id)}><IoReturnUpBack className="buttonicon"/>Withdraw</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}