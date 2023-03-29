import { Link, useNavigate } from "react-router-dom";
import React from "react";
import NetworkMap from "../NetworkMap"
import Navbar from "../Navbars/Navbar"
import NavbarOnboarding from "../Navbars/NavbarOnboarding"
import NavbarPrelogin from "../Navbars/NavbarPrelogin"
import MatchedSection from "../MatchedSection"

export default function Home() {
    return (
      <div>
      <Navbar/>
        <div style={{
          background: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height:"150vh"
          }}>
            
          <div 
          style={{
            background:"#fef9ec",
            padding: "32px",
            borderRadius:"16px",
            width: "75%",
            // width:"1480px",
            // height: "147px",
            marginTop:"40px",
            marginBottom: "42px",
            boxShadow: "0px 4px 4px #c0c0c0"
          }}> <h1>Hello, Angela!</h1>
          <span style={{color:"#818181", fontWeight:"600", marginTop:"28px"}}>You currently have no notifications. Go out there and explore the world!</span>
          </div>
          <div style={{
            background:"#ffffff",
            padding: "40px",
            borderRadius:"16px",
            width:"75%",
            // height: "723px",
            marginBottom:"42px"
          }}>
            <h1>Recommended Network Map</h1>
            <NetworkMap/>
          </div>

          <div style={{
            background:"#ffffff",
            padding: "40px",
            borderRadius:"16px",
            width:"75%",
            // height: "187px"
            }}> 
            {/* <h1>Matched Roommates</h1>
            <span style={{color:"#818181", fontWeight:"600"}}>
              <p>You have no matched roommates yet.
                <br></br>
                Click on the search bar to start matching now!
              </p>
              <p></p></span> */}
            <MatchedSection/>
            </div>
          
          </div>
          </div>
      );
}