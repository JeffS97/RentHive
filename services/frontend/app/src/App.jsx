import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage,  NotificationsPage} from "./routes";
import { LoginPage } from "./routes"
import { SignupPage } from "./routes";
import { OnboardingPage3 } from "./routes";
import { OnboardingPage4 } from "./routes";
import { ProfileCardPage } from "./routes";
import { SearchPage } from "./routes";


import Layout from "./layouts";

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          {/* <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/blstatus" element={<BLStatusPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/onboarding3" element={<OnboardingPage3 />} />
          <Route path="/onboarding4" element={<OnboardingPage4 />} />
          <Route path="/profilecard" element={<ProfileCardPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
