
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calcLength } from "framer-motion";

const Navbar = () => {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const navbarStyle = {
    backgroundColor: '#333333', // Dark grey background color
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff', // Text color
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginRight: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    
  };

  const dropdownContainerStyle = {
    position: 'relative',
    marginLeft: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#555555',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  const lightGreenButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#8aff8a',
    color: '#000',
    
  };

  const dropdownContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: '#555555',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    borderRadius: '5px',
    zIndex: 1,
    top: '40px',
  };
  
  const dropdownItemStyle = {
    padding: '12px 16px',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out', // Add transition for color change on hover
    borderBottom: '1px solid #777',
    backgroundColor: '#555555',
  };
  
 
  const handleRegisterDropdownToggle = () => {
    setShowRegisterDropdown(!showRegisterDropdown);
    // Close login dropdown if open
    setShowLoginDropdown(false);
  };

  const handleLoginDropdownToggle = () => {
    setShowLoginDropdown(!showLoginDropdown);
    // Close register dropdown if open
    setShowRegisterDropdown(false);
  };


  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Dapp</div>

      <div style={buttonContainerStyle}>
        <div style={dropdownContainerStyle}>
          <button
            style={buttonStyle}
            onClick={handleRegisterDropdownToggle}
          >
            Register
          </button>
          {showRegisterDropdown && (
            <div style={dropdownContentStyle}>

            <Link to="/register"><button style={dropdownItemStyle}>Register as an Individual</button></Link>
            <Link to="/orgregister"> <button style={dropdownItemStyle}>Register as Organisation</button></Link>
            </div>
          )}
        </div>

        <div style={dropdownContainerStyle}>
          <button
            style={buttonStyle}
            onClick={handleLoginDropdownToggle}
          >
            Login
          </button>
          {showLoginDropdown && (
            <div style={dropdownContentStyle}>
            <Link to="/login">   <button style={dropdownItemStyle}>Login as an Individual</button></Link>
            <Link to="/orglogin">  <button style={dropdownItemStyle}>Login as Organisation</button></Link>
            </div>
          )}
        </div>




        <div style={dropdownContainerStyle}>
        <Link to="/">

        
          <button
            style={buttonStyle}
            onClick={handleLoginDropdownToggle}
          >
            Logout
          </button>
          </Link>
</div>
        <div className="top-right-button-container">
          <button
            style={lightGreenButtonStyle}
            className="connect-button"
          >
                        Connect with MetaMask Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
