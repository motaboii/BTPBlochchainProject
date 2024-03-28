import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333333', // Dark grey background color
    color: '#fff', // Text color
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    marginTop:'30px'
  };

  const dappLogoStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#fff',
    marginLeft: '20px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle}>
      <div style={dappLogoStyle}>DApp</div>

      <div style={linkContainerStyle}>
        <a href="#" style={linkStyle}>Community</a>
        <a href="#" style={linkStyle}>Source Code</a>
        <a href="#" style={linkStyle}>Connect Us</a>
        <a href="#" style={linkStyle}>Login</a>
        <a href="#" style={linkStyle}>Register</a>
      </div>
    </footer>
  );
};

export default Footer;
