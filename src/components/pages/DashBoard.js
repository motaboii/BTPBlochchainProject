import React from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import Card from "../utils/Card";
import { Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const policiesData = [
  {
    id: 1,
    policyName: "Policy 1",
    companyName: "Company A",
    policyId: "P001",
  },
  {
    id: 2,
    policyName: "Policy 2",
    companyName: "Company B",
    policyId: "P002",
  },
  {
    id: 3,
    policyName: "Policy 3",
    companyName: "Company C",
    policyId: "P003",
  },
  {
    id: 4,
    policyName: "Policy 4",
    companyName: "Company D",
    policyId: "P004",
  },
  {
    id: 5,
    policyName: "Policy 5",
    companyName: "Company E",
    policyId: "P005",
  },
  {
    id: 6,
    policyName: "Policy 6",
    companyName: "Company F",
    policyId: "P006",
  },
];

const Policies = () => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/company/policies";
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);
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
      <Heading as="h1" size="2xl" textAlign="center" p={4}>
        Policies
      </Heading>
      <Flex
        wrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        p={4}
        m={4}
      >
        {data.map((policy) => (
          <Card key={policy._id} policy={policy} />
        ))}
      </Flex>
    </>
  );
};

export default Policies;
