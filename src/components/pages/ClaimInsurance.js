import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import Footer from "../components/Footer";
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
import { useGlobalContext } from "../../context";

const CreateMedicalRecord = () => {
  const [formData, setFormData] = useState({
    medicalRecordID: "",
    InsuranceID: "",
  });
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const { account, setAccount, contract, setContract } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

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
    await claimInsurance();
    setFormData({
      medicalRecordID: "",
      InsuranceID: "",
    });
  };

  const claimInsurance = async () => {
    if (!formData.medicalRecordID || !formData.InsuranceID) {
      alert("Enter medical record and insurance id");
      return;
    }
    try {
      setIsLoading(true);
      const tx = await contract.methods
        .claimInsurance(
          parseInt(formData.InsuranceID),
          parseInt(formData.medicalRecordID)
        )
        .call();
      console.log(Number(tx));
      if (Number(tx) != 0) {
        const tx1 = await contract.methods
          .claimInsurance(
            parseInt(formData.InsuranceID),
            parseInt(formData.medicalRecordID)
          )
          .send({
            from: account,
          });
        alert(`Your Claim: Rs ${Number(tx)}`);
      } else {
        alert("Can't Claim");
      }
      setIsLoading(false);

      // const tx = await contract.methods.claimInsurance(1000, 1000).call();
      // console.log(tx);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
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
                name="InsuranceID"
                value={formData.InsuranceID}
                onChange={handleChange}
                placeholder="Enter Insurance ID"
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
      {/* <Footer /> */}
    </>
  );
};

export default CreateMedicalRecord;
