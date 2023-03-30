import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, NotificationsPage,ProfilePage, OnboardingPage1, OnboardingPage2 } from "./routes";
import { LoginPage } from "./routes"
import { SignupPage } from "./routes";
import { OnboardingPage3 } from "./routes";
import { OnboardingPage4 } from "./routes";
import { ProfileCardPage } from "./routes";
import { SearchPage } from "./routes";
import {FilterlistPage}from "./routes";
import { MapLinePage } from "./routes";
import Layout from "./layouts";
// import Layout from "./layouts";

import './App.css';
import { SavedProfilePage } from "./routes";


function App() {

  return (
    <>

    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          {/* <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/blstatus" element={<BLStatusPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/onboarding1" element={<OnboardingPage1 />} />
          <Route path="/onboarding2" element={<OnboardingPage2/>} />
          <Route path="/onboarding3" element={<OnboardingPage3 />} />
          <Route path="/onboarding4" element={<OnboardingPage4 />} />
          <Route path="/profilecard" element={<ProfileCardPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filterlist" element={<FilterlistPage />} />
          <Route path="/savedprofile" element={<SavedProfilePage />} />
          <Route path="/roommateprofile" element={<ProfilePage />} />
          <Route path="/mapline" element={<MapLinePage />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
