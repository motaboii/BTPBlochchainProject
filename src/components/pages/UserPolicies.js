import React from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import Card1 from "../utils/Card1";
import { Flex, GridItem, Heading, Grid } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import PriceWrapper2 from "../utils/PriceWrapper2";

const UserPolicies = () => {
  const url = "https://btp-backend-bu0a.onrender.com/api/v1/user/policies";
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
  console.log(token)
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
        Active Insurances
      </Heading>
      <Grid p={12} gap={4} templateColumns="repeat(4, 1fr)">
        {data.map((policy) => (
          <GridItem w="100%">
            <PriceWrapper2 key={policy._id} policy={policy} /> </GridItem>
        ))}
      </Grid >
    </>

  );
};
export default UserPolicies;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import UserNavbar from "./UserNavbar";
// import Footer from "./Footer";
// import { Box, Heading, VStack, HStack, useColorModeValue, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
// import axios from "axios";
// import Loader from "../components/Loader";
// import { FaCheckCircle } from "react-icons/fa";

// const UserPolicies = () => {
//   const url = "https://btp-backend-bu0a.onrender.com/api/v1/user/policies";
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     } else {
//       getData(url, token);
//     }
//   }, []);

//   const getData = async (url, token) => {
//     try {
//       setIsLoading(true);
//       const { data } = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setData(data.items);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <UserNavbar />
//       <Heading as="h1" size="2xl" textAlign="center" p={4}>
//         Policies
//       </Heading>
//       <HStack spacing={4} align="center">
//         {data.map((policy) => (
//           <PriceWrapper key={policy._id} policy={policy} />
//         ))}
//       </HStack>
//     </>
//   );
// };

// const PriceWrapper = ({ policy }) => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       mb={4}
//       shadow="base"
//       borderWidth="1px"
//       alignSelf={{ base: 'center', lg: 'flex-start' }}
//       borderColor={useColorModeValue('gray.200', 'gray.500')}
//       borderRadius={'xl'}
//       p={6}
//       w="sm"
//     >
//       <Heading fontSize="2xl" textAlign="center" mb={4}>
//         {policy.name}
//       </Heading>
//       <List spacing={3}>
//         <ListItem>
//           <ListIcon as={FaCheckCircle} color="green.500" />
//           {policy.description}
//         </ListItem>
//         <ListItem>
//           <ListIcon as={FaCheckCircle} color="green.500" />
//           Policy ID: {policy.id}
//         </ListItem>
//         <ListItem>
//           <ListIcon as={FaCheckCircle} color="green.500" />
//           Amount: {policy.amount}
//         </ListItem>
//       </List>
//       <Button onClick={() => navigate("/details")} colorScheme="green" variant="outline" mt={4} w="full">
//         View Details
//       </Button>
//     </Box>
//   );
// };

// export default UserPolicies;
