import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import Footer from "../components/Footer";
import { Flex, Box, FormControl, FormLabel, Input, Button, Heading, Checkbox, Text, useColorModeValue } from "@chakra-ui/react";

const CreateMedicalRecord = () => {
  const [formData, setFormData] = useState({
    medicalRecordID: '',
    InsuranceID: '',
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
        medicalRecordID: '',
        InsuranceID: '',
    });
  };

  return (
    <>
      <UserNavbar />
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
            Claim Insurance
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="medicalRecordID" mb={4}>
              <FormLabel>Medical Record ID</FormLabel>
              <Input
                type="text"
                name="medicalRecordID"
                value={formData.medicalRecordID}
                onChange={handleChange}
                placeholder="Enter Medical Record ID"
              />
            </FormControl>
            <FormControl id="InsuranceId" mb={4}>
              <FormLabel>Insurance ID</FormLabel>
              <Input
                type="text"
                name="InsuranceId"
                value={formData.citizenId}
                onChange={handleChange}
                placeholder="Enter Insurance ID"
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

export default CreateMedicalRecord;
