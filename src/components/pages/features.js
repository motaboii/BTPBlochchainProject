import React from 'react';
import './features.css';


const Features = () => {
  return (
    <>


    <div className="features-container">
      <h1 className="features-heading">FEATURES</h1>

      <div className="feature-grid">
        {/* Feature 1 */}
        <div className="feature-section">
          <h2>Redefining the way you vote</h2>
          <p>
            Our blockchain-based voting system ensures fair and transparent decision-making for DAOs
            with customizable parameters, real-time tracking, and robust analytics.
          </p>
        
        </div>

        {/* Feature 2 */}
        <div className="feature-section">
          <h2>Secure and transparent blockchain technology</h2>
          <p>
            Our system utilizes blockchain technology to ensure the security and transparency of
            every vote, eliminating the risk of tampering and fraud.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-section">
          <h2>Preferential voting system for fair and efficient decision-making</h2>
          <p>
            Our preferential voting system allows for fair and efficient decision-making by allowing
            members to rank their choices and eliminating the need for multiple rounds of voting.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature-section">
          <h2>Real-time vote tracking and result display</h2>
          <p>
            Our system provides real-time tracking and display of votes, allowing members to stay
            informed and engaged throughout the voting process.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Features;
