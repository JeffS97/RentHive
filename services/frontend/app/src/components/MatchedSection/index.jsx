import React, { useState, useEffect } from "react";

export default function MatchedSection() {
  const [receivedInvites, setReceivedInvites] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("receivedInvites");
    if (data) {
      setReceivedInvites(JSON.parse(data));
    }
  }, []);

    return (
      <div className="notifications">
        <h1>Matched Roommates</h1>
        {receivedInvites.length ? (
          receivedInvites.map(item => (
            <div key={item.id}>
              <p>{item.fullName}</p>
              <p>{item.age}</p>
              <p>{item.gender}</p>
              <p>{item.match}</p>
              <p>{item.common1}</p>
              <p>{item.common2}</p>
              <p>{item.details}</p>
              <img src={item.image}></img>
              </div>
          ))
        ): <span style={{color:"#818181", fontWeight:"600"}}>
            <p>You have no matched roommates yet.
            <br></br>
            Click on the search bar to start matching now!
            </p></span>}
      </div>
    );
  }
