import React from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import Card2 from "../utils/Card2";
import { Button, Flex, Heading, Input, Grid, GridItem, Box } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const UserMedicalRecord = () => {
  const url =
    "https://btp-backend-bu0a.onrender.com/api/v1/hospital/getMyRecords";
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  const token = localStorage.getItem("token");
  const getData = async () => {
    if (!name || !id) {
      alert("Enter name and ID");
      return;
    }
    const str = "?name=" + name + "&citizenID=" + id;
    const uri = url + str;
    // console.log(uri);
    try {
      setIsLoading(true);
      const { data } = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.items);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  //   console.log(data);
  return (
    <>
      <UserNavbar />
      <Flex mt={4} gap={1} align={"center"} justify={"center"}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          w={"25vw"}
          placeholder="Enter Name"
        ></Input>
        <Input
          value={id}
          onChange={(e) => setId(e.target.value)}
          w={"25vw"}
          placeholder="Enter Citizen ID"
        ></Input>
        <Button onClick={getData} variant={"solid"} colorScheme="green">
          Get
        </Button>
      </Flex>
      <Heading as="h2" size="xl" textAlign="center" p={10}>
        Medical Records
      </Heading>
      <Grid p={12} gap={4} templateColumns="repeat(4, 1fr)">
        {data?.map((record) => (
          <GridItem w="100%">
            <Card2 key={record._id} medicalRecord={record} /> </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default UserMedicalRecord;
