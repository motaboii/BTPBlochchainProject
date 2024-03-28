import React from 'react';
import './Meet.css'; // Import CSS for styling

const Meet = () => {
  return (
    <div className="meet-container">
      <h1 className="meet-heading">Meet Our Team</h1>
      <div className="profiles-container">
        <div className="profile-circle">N</div>
        <div className="profile-circle">S</div>
        <div className="profile-circle">P</div>
        <div className="profile-circle">H</div>
      </div>
      <div className="github-buttons-container">
        <button className="github-button">GitHub N</button>
        <button className="github-button">GitHub S</button>
        <button className="github-button">GitHub P</button>
        <button className="github-button">GitHub H</button>
      </div>
    </div>
  );
};

export default Meet;
