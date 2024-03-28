// MiddleSection.js

import React from 'react';
// import './MiddleSection.css'; // Import CSS for styling

const MiddleSection = () => {
  return (
    <div className="middle-container">
      <div className="left-section">
        <h2 className="section-heading">
          <span className="purple">Empire</span>
          <span className="grey">Token</span>
        </h2>
        <p className="section-text">
          <strong>Empire will keep building and delivering innovative DeFi products that are designed to meet the needs of our users and partners.</strong><br /><br />
          This promotes the circulation of our token within the Empire Ecosystem, providing utility and value to Empire Token.
        </p>
        <div className="token-details">
          <p><strong>ETHERSCAN</strong></p>
          <p><strong>WHITEPAPER</strong></p>
          <p>Token name: Empire Token</p>
          <p>Symbol: EMPIRE</p>
          <p>Decimal: 9</p>
          <p>Supply: 1,000,000,000</p>
          <p><strong>TOKEN ADDRESS</strong></p>
          <p>0x9A2Af0AbB12bee5369B180976Be01E8c80D0e7B6</p>
          <p>COPY</p>
        </div>
      </div>
      <div className="right-section card">
        <img
          src="https://www.empiretoken.world/assets/images/keep-climbing-img2.png"
          alt="Empire Token"
          className="token-image"
        />
      </div>
    </div>
  );
};

export default MiddleSection;
