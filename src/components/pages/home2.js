import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';
import OrgNavbar from './OrgNavbar';
import Footer from './Footer';

export default function HomePage() {
  return (
    <>
   <OrgNavbar/>
    <div className="text-center">
      <h1 className="main-title home-page-title">Welcome to Our App</h1>
      
      <div className="card-container">
        <div className="card">
          <h2>For Insurance Companies</h2>
          <p>Discover the benefits of our Blockchain-based Accident Data Storage and Insurance Process Automation.</p>
        </div>

        <div className="card">
          <h2>For Police Officers</h2>
          <p>Explore how our platform simplifies Accident Data Storage and enhances the insurance process for law enforcement.</p>
        </div>

        <div className="card">
          <h2>For Drivers</h2>
          <p>Learn why drivers who have faced accidents should utilize our platform for secure data storage and insurance process automation.</p>
        </div>
      </div>

      {/* Button for Dashboard */}
      <Link to="/CreatePolicies" style={{ textDecoration: 'none' }}>
        <button className="primary-button" style={{ marginTop: '1.5rem' }}>Create </button>
      </Link>

      <Link to="/">
        <button className="primary-button">Log out</button>
      </Link>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </>
  );
}
