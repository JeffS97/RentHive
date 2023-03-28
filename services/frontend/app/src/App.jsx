import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, NotificationsPage } from "./routes";
import { HomePage, ProfilePage } from "./routes";
import { HomePage, OnboardingPage1, OnboardingPage2 } from "./routes";
import Layout from "./layouts";

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage/>}/>
          {/* <Route path="/profile" element={<ProfilePage/>}/> */}
          <Route path="/onboarding-1" element={<OnboardingPage1 />} />
          <Route path="/onboarding-2" element={<OnboardingPage2 />} />
          {/* <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/blstatus" element={<BLStatusPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
