import React from "react";
import NetworkMap from "../NetworkMap"
import Navbar from "../Navbars/Navbar"
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
            marginTop:"40px",
            marginBottom: "42px",
            boxShadow: "0px 4px 4px #c0c0c0"
          }}> <h1>Hello, Angela!</h1>
          <span style={{color:"#818181", fontWeight:"600", marginTop:"28px"}}>You have <b><a href="/notifications" style={{textDecoration:"none", color:"#818181"}}>2 unread pending invites</a></b>. How about saying hi?</span>
          </div>
          <div style={{
            background:"#ffffff",
            padding: "40px",
            borderRadius:"16px",
            width:"75%",
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
            }}> 
            <MatchedSection/>
            </div>
          
          </div>
          </div>
      );
}