import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

const UserNavbar = () => {
  const [name, setName] = useState("Name");
  const navigate = useNavigate();
  useEffect(() => {
    const n = localStorage.getItem("scmName");
    if (n) {
      setName(n);
    } else {
      navigate("/orglogin");
    }
  });
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">D APP</div>
        <div className="nav-links">
          <Link to="/CreatePolicies" className="nav-link">
            Create Policies
          </Link>
          <Link to="/CreatePolicies" className="nav-link">
            Company Profile
          </Link>
          <Link to="/dashboard" className="nav-link">
            Transaction
          </Link>
        </div>
        <div>
          <p className="usr">{name}</p>
          <Link to="/" className="dapp-link">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
