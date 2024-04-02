import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/components/Footer";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
// import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import DashBoard from "./components/pages/DashBoard";
import CompanyDashboard from "./components/pages/DashboardCompany";
import HospitalDashboard from "./components/pages/Dashboardhospital";
import { AuthProvider } from "./components/context/AuthContext";
import FullPolicy from "./components/pages/fullpolicy";
import CreatePolicies from "./components/pages/CreatePolicies";
import MedicalRecord from "./components/pages/CreateMedicalRecord";
import { Policy } from "./components/pages/Policy";
import Claiminsurance from "./components/pages/ClaimInsurance";
import Policies from "./components/pages/Policies";
import UserPolicies from "./components/pages/UserPolicies";
import UserMedicalRecord from "./components/pages/UserMedicalRecord";
import HospitalMedicalRecords from "./components/pages/HospitalMedicalRecords";
import ListedInsurance from "./components/pages/ListedInsurance";

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
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/companydashboard" element={<CompanyDashboard />} />
            <Route path="/hospitaldashboard" element={<HospitalDashboard />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/fullpolicy" element={<FullPolicy />} />
            <Route path="/addmedicalrecord" element={<MedicalRecord />} />
            <Route path="/claiminsurance" element={<Claiminsurance />} />
            <Route path="/createinsurance" element={<CreatePolicies />} />
            <Route path="/shop-policies" element={<Policies />} />
            <Route path="/current-insurance" element={<UserPolicies />} />
            <Route path="/listed-insurance" element={<ListedInsurance />} />
            <Route
              path="/medicalRecords"
              element={<HospitalMedicalRecords />}
            />
            <Route path="/current-records" element={<UserMedicalRecord />} />

            {/* <Route path="/forget-password" element={<ForgetPasswordPage />} /> */}

            <Route path="/CreatePolicies" element={<CreatePolicies />} />
            <Route path="/policy/:id" element={<Policy />} />
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
