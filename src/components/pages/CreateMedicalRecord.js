import React, { useState } from "react";
// import OrgNavbar from './OrgNavbar';
import Footer from './Footer';
import { Flex, Box, FormControl, FormLabel, Input, Button, Heading, Checkbox, Text, useColorModeValue } from "@chakra-ui/react";

const CreateMedicalRecord = () => {
  const [formData, setFormData] = useState({
    citizenId: '',
    diagnosis: '',
    bill: '',
    hospitalName: '',
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
      citizenId: '',
      diagnosis: '',
      bill: '',
      hospitalName: '',
    });
  };

  return (
    <>
      {/* <OrgNavbar /> */}
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
            Create Medical Record
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="citizenId" mb={4}>
              <FormLabel>Citizen ID</FormLabel>
              <Input
                type="text"
                name="citizenId"
                value={formData.citizenId}
                onChange={handleChange}
                placeholder="Enter Citizen ID"
              />
            </FormControl>
            <FormControl id="diagnosis" mb={4}>
              <FormLabel>Diagnosis</FormLabel>
              <Input
                type="text"
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                placeholder="Enter Diagnosis"
              />
            </FormControl>
            <FormControl id="bill" mb={4}>
              <FormLabel>Bill</FormLabel>
              <Input
                type="text"
                name="bill"
                value={formData.bill}
                onChange={handleChange}
                placeholder="Enter Bill"
              />
            </FormControl>
            <FormControl id="hospitalName" mb={4}>
              <FormLabel>Hospital Name</FormLabel>
              <Input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                placeholder="Enter Hospital Name"
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
      <Footer />
    </>
  );
};

export default CreateMedicalRecord;
