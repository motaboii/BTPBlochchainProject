import React from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
// import Card from "../utils/Card";
import {
  Flex,
  Heading,
  Grid,
  GridItem,
  CardHeader,
  CardBody,
  Stack,
  Box,
  Text,
  Divider,
  Card,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import PriceWrapperCard from "../utils/PriceWrapperCard";
import DashboardNavbar from "./HospitalNavbar";

const HospitalMedicalRecords = () => {
  const url =
    "https://btp-backend-bu0a.onrender.com/api/v1/hospital/getMyRecords";
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      getData(url);
    }
  }, []);
  const token = localStorage.getItem("token");
  const getData = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <DashboardNavbar />
      <Heading as="h1" size="2xl" textAlign="center" p={4}>
        Medical Records
      </Heading>
      {/* <Flex
        wrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        p={4}
        m={4}
      >
    </Flex> */}
      <Grid p={12} gap={4} templateColumns="repeat(3, 1fr)">
        {data.map((record) => {
          const str = record.diagnosis.toString();
          return (
            <GridItem w="100%" key={record._id}>
              <Card data-type="Card">
                <CardHeader data-type="CardHeader">
                  <Heading data-type="Heading" size="md">
                    {record.name}
                  </Heading>
                </CardHeader>

                <CardBody data-type="CardBody">
                  <Stack data-type="Stack" spacing="4">
                    <Box data-type="Box">
                      <Heading
                        data-type="Heading"
                        size="xs"
                        textTransform="uppercase"
                      >
                        {`CitizenID: ${record.citizenID}`}
                      </Heading>
                    </Box>
                    <Divider
                      data-type="Divider"
                      orientation="horizontal"
                    ></Divider>
                    <Box data-type="Box">
                      <Heading
                        data-type="Heading"
                        size="xs"
                        textTransform="uppercase"
                      >
                        Diagnosis
                      </Heading>
                      <Text data-type="Text" pt="2" fontSize="sm">
                        {str}
                      </Text>
                    </Box>
                    <Divider
                      data-type="Divider"
                      orientation="horizontal"
                    ></Divider>
                    <Box data-type="Box">
                      <Heading
                        data-type="Heading"
                        size="xs"
                        textTransform="uppercase"
                      >
                        Bill
                      </Heading>
                      <Text data-type="Text" pt="2" fontSize="sm">
                        {`Rs ${record.bill}`}
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
export default HospitalMedicalRecords;
