import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, ProfilePage } from "./routes";
import Layout from "./layouts";

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage/>}/>
          {/* <Route path="/profile" element={<ProfilePage/>}/> */}
          {/* <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/blstatus" element={<BLStatusPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
