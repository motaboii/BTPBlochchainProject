import React, { useState } from "react";
// import OrgNavbar from './OrgNavbar';
import Footer from "./Footer";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Checkbox,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const CreateMedicalRecord = () => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/hospital/addRecord";
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    citizenId: "",
    patientName: "",
    diagnosis: "",
    bill: "",
  });
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
    setSubmittedDataList([...submittedDataList, formData]);
    const arr = formData.diagnosis.split(",");

    try {
      setIsLoading(true);
      const { data } = await axios.post(
        url,
        {
          name: formData.patientName,
          citizenID: formData.citizenId,
          diagnosis: arr,
          bill: formData.bill,
          hospital: user.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      alert("Success");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }

    setFormData({
      citizenId: "",
      diagnosis: "",
      bill: "",
      patientName: "",
    });
  };

  return (
    <>
      {/* <OrgNavbar /> */}
      <Flex
        minH={"100vh"}
        mt={4}
        align={"start"}
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
            <FormControl id="patientName" mb={4}>
              <FormLabel>Patient Name</FormLabel>
              <Input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter patient Name"
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
            <Button
              type="submit"
              colorScheme="green"
              isLoading={isLoading}
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
