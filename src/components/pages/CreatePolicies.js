import React, { useState } from "react";
// import './CreatePolicy.css';
import OrgNavbar from "./OrgNavbar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const CreatePolicy = () => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/company/listPolicy";
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    policyName: "",
    coverage: "",
    max_coverage: "",
    price: "",
  });

  const { user } = useAuth();
  const [submittedDataList, setSubmittedDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    const arr = formData.coverage.split(",");
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        url,
        {
          name: formData.policyName,
          company: user.name,
          coverage: arr,
          maxAmount: formData.max_coverage,
          price: formData.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    console.log("Form data submitted:", formData);

    // Create a copy of the submitted data list and add the new data
    setSubmittedDataList([...submittedDataList, formData]);

    // Reset form fields after submission
    setFormData({
      policyName: "",
      coverage: "",
      max_coverage: " ",
      price: "",
    });
  };

  return (
    <>
      <OrgNavbar />
      <div className="create-policy-container">
        <br />
        <h2 style={{ fontWeight: "bold", marginLeft: "50px" }}>
          Create Policy
        </h2>

        <form onSubmit={handleSubmit}>
          {/* <div className="form-group2">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div> */}
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
          {/* <div className="form-group">
            <label htmlFor="policyId">Policy ID:</label>
            <input
              type="text"
              id="policyId"
              name="policyId"
              value={formData.policyId}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-group1">
            <label htmlFor="coverage">Coverage</label>
            <input
              type="text"
              id="coverage"
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group2">
            <label htmlFor="max_coverage">Max Coverage</label>
            <input
              type="text"
              id="max_coverage"
              name="max_coverage"
              value={formData.max_coverage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group3">
            <label htmlFor="max_coverage">Premium</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          {/* <button type="submit">Submit</button> */}
          <Button
            isLoading={isLoading}
            loadingText="Loading"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
            type="submit"
          >
            Submit
          </Button>
        </form>

        {submittedDataList.map((submittedData, index) => (
          <div key={index} className="submitted-card">
            <h3>Created Policy {index + 1}</h3>
            <p>Company Name: {user.name}</p>
            <p>Policy Name: {submittedData.policyName}</p>
            <p>Coverage: {submittedData.coverage}</p>
            <p>Coverage: {submittedData.max_coverage}</p>
            <p>Coverage: {submittedData.price}</p>
          </div>
        ))}
      </div>
      <br />

      <br />

      <br />
      <Footer />
    </>
  );
};

export default CreatePolicy;
