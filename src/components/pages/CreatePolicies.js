import React, { useState } from "react";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "../components/Footer";
import { Flex, Box, FormControl, FormLabel, Input, Button, Heading, useColorModeValue } from "@chakra-ui/react";

const CreateInsurance = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    policyName: '',
    policyID: '',
    amount: '',
    description: ''
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
    setSubmittedDataList([...submittedDataList, formData]);
    setFormData({
      companyName: '',
      policyName: '',
      policyID: '',
      amount: '',
      description: ''
    });
  };

  return (
    <>
      <CompanyNavbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Heading fontSize={"2xl"} textAlign={"center"} mb={6}>
            Create Insurance
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="companyName" mb={4}>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter Company Name"
              />
            </FormControl>
            <FormControl id="policyName" mb={4}>
              <FormLabel>Policy Name</FormLabel>
              <Input
                type="text"
                name="policyName"
                value={formData.policyName}
                onChange={handleChange}
                placeholder="Enter Policy Name"
              />
            </FormControl>
            <FormControl id="policyID" mb={4}>
              <FormLabel>Policy ID</FormLabel>
              <Input
                type="text"
                name="policyID"
                value={formData.policyID}
                onChange={handleChange}
                placeholder="Enter Policy ID"
              />
            </FormControl>
            <FormControl id="amount" mb={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
            </FormControl>
            <FormControl id="description" mb={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter Description"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="green"
              isLoading={false}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
      {/* <Footer /> */}
    </>
  );
};

export default CreateInsurance;
