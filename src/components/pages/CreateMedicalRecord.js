import React, { useState } from "react";
import HospitalNavbar from "./HospitalNavbar";
import Footer from "../components/Footer";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useGlobalContext } from "../../context";

const CreateMedicalRecord = () => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/hospital/addRecord";
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { account, setAccount, contract, setContract } = useGlobalContext();
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

  const createRecord = async (id) => {
    const arr = formData.diagnosis.split(",");
    console.log(arr);

    try {
      setIsLoading(true);
      const { data } = await axios.post(
        url,
        {
          name: formData.patientName,
          citizenID: formData.citizenId,
          mrId: id,
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contract !== null) {
        if (1 === 1) {
          try {
            setIsLoading(true);
            const citizenId = parseInt(formData.citizenId);
            const name = formData.patientName;
            const arr = formData.diagnosis.split(",");
            const diagno = arr;
            const bill = parseInt(formData.bill);
            const hospital = user.name;
            const tx = await contract.methods
              .addMedicalRecord(citizenId, name, diagno, bill, hospital)
              .send({
                from: account,
              });
            const _id = await contract.methods.mrId().call();
            console.log(_id);
            createRecord(Number(_id) - 1);
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
            console.log(error);
          }
        } else {
          alert("Invalid Wallet Address");
        }
      } else {
        alert("Connect Wallet");
      }
    } catch (error) {
      console.log(error);
    }
    setSubmittedDataList([...submittedDataList, formData]);

    setFormData({
      citizenId: "",
      diagnosis: "",
      bill: "",
      patientName: "",
    });
  };

  return (
    <>
      <HospitalNavbar />
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
          width="100%"
          maxWidth="500px"
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
              width="100%"
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
