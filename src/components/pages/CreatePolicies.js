import React, { useState } from 'react';
// import './CreatePolicy.css';
import OrgNavbar from './OrgNavbar';
import Footer from './Footer';

const CreatePolicy = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    policyName: '',
    policyId: '',
  });
  const [submittedDataList, setSubmittedDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log('Form data submitted:', formData);

    // Create a copy of the submitted data list and add the new data
    setSubmittedDataList([...submittedDataList, formData]);

    // Reset form fields after submission
    setFormData({
      companyName: '',
      policyName: '',
      policyId: '',
    });
  };

  return (
    <>

<OrgNavbar/>
    <div className="create-policy-container">
    <br/>
    <h2 style={{ fontWeight: 'bold' ,marginLeft:'50px'}}>Create Policy</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group2">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="policyName">Policy Name:</label>
          <input
            type="text"
            id="policyName"
            name="policyName"
            value={formData.policyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="policyId">Policy ID:</label>
          <input
            type="text"
            id="policyId"
            name="policyId"
            value={formData.policyId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedDataList.map((submittedData, index) => (
        <div key={index} className="submitted-card">
          <h3>Created Policy {index + 1}</h3>
          <p>Company Name: {submittedData.companyName}</p>
          <p>Policy Name: {submittedData.policyName}</p>
          <p>Policy ID: {submittedData.policyId}</p>
        </div>
      ))}
    </div>
    <br/>
    
    <br/>
    
    <br/>
    <Footer/>
    </>
  );
};

export default CreatePolicy;





