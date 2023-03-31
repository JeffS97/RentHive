import {
  Box,

  Text, Image, Badge,

} from '@chakra-ui/react';

import React from "react";
import NetworkMap from "../NetworkMap"
import Navbar from "../Navbars/Navbar"
import MatchedSection from "../MatchedSection"
import stats from "../../img/stats.png"
import tooltip from "../../img/Tooltip.png"
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    if (localStorage.getItem("myName")=== undefined || localStorage.getItem("myName")=== null) {
        navigate("/login");
    }
    const username = localStorage.getItem("myName").substring(1, localStorage.getItem("myName").length -1);

  return (
    <div>
      <Navbar />
      <div style={{
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
      }}>

        <div
          style={{
            background: "#fef9ec",
            padding: "10px 38px 30px 38px",
            borderRadius: "16px",
            width: "75%",
            marginTop: "20px",
            marginBottom: "22px",
            boxShadow: "0px 4px 4px #c0c0c0"
          }}> <h1>Hello, {username}!</h1>
          <span style={{ height: "10px", color: "#818181", fontWeight: "600", marginTop: "20px" }}>You have <b><a href="/notifications" style={{ textDecoration: "none", color: "#818181" }}>2 unread pending invites</a></b>. How about saying hi?</span>
        </div>

        <div style={{
          background: "#ffffff",
          padding: "10px 48px 30px 38px",
          borderRadius: "16px",
          width: "75%",
          marginBottom: "42px",
          boxShadow: "0px 4px 4px #c0c0c0",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div>
            <Box display="flex">
            <Text fontSize="32px" fontWeight="700" >Recommended Network Map</Text>
            <Image mt="45px" ml="20px" src={tooltip} height="20px"  />
 
            </Box>
            <NetworkMap />
            
          </div>
          <Image ml="25px" mt="150px" src={stats} height="200px" width="200px" />
        </div>

        <div style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          width: "75%",
          boxShadow: "0px 4px 4px #c0c0c0"
        }}>
          <MatchedSection />
        </div>

      </div>
    </div>
  );
}