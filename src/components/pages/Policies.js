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
      <UserNavbar />
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
