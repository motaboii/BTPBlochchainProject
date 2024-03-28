import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/components/Footer";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

// import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import DashBoard from "./components/pages/DashBoard";
import { AuthProvider } from "./components/context/AuthContext";
import FullPolicy from "./components/pages/fullpolicy";
import CreatePolicies from "./components/pages/CreatePolicies";
import MedicalRecord from "./components/pages/CreateMedicalRecord";
// import Orglogin from './components/pages/orglogin'
// import Orgregister from './components/pages/orgregister'
// import OrgNavbar from './components/pages/OrgNavbar'
// import Home2 from './components/pages/home2'
// import UserProfile from './components/pages/UserProfile'

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/fullpolicy" element={<FullPolicy />} />
            <Route path="/medicalrecord" element={<MedicalRecord />} />
            {/* <Route path="/forget-password" element={<ForgetPasswordPage />} /> */}

            <Route path="/CreatePolicies" element={<CreatePolicies />} />
            {/* <Route path="/orglogin" element={<Orglogin />} />
          <Route path="/orgregister" element={<Orgregister />} />
          <Route path="/OrgNavbar" element={<OrgNavbar />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/UserProfile" element={<UserProfile />} />  */}
          </Routes>
        </AuthProvider>
      </Router>

      <Footer />
    </ChakraProvider>
  );
}
