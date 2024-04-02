import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "./Footer";
import Card1 from "../utils/Card1";
import { Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import PriceWrapperCard from "../utils/PriceWrapperCard";

const ListedInsurance = () => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/user/policies";
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      getData(url, token);
    }
  }, []);

  const getData = async (url, token) => {
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

//   if (isLoading) {
//     return <Loader />;
//   }

  return (
    <>
      <CompanyNavbar />
      <Heading as="h1" size="2xl" textAlign="center" p={4}>
       Listed Insurance
      </Heading>
      <Flex
        wrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        p={4}
        m={2}
        minH={"60vh"}
      >
        {data.map((policy) => (
          <PriceWrapperCard key={policy._id} policy={policy} />
        ))}
      </Flex>
    
    </>
  );
};

export default ListedInsurance;
