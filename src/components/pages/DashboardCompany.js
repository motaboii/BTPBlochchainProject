// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Flex, Heading, Box, Text } from "@chakra-ui/react";
// import CompanyNavbar from "./CompanyNavbar";

// const CompanyDashboard = () => {
//   const url = "https://example-api.com/api/v1/company/dashboard"; // Replace with your API endpoint
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);

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
//       const response = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setData(response.data.items);
//     } catch (error) {
//       console.error("Error fetching company dashboard data:", error);
//     }
//   };

//   return (
//     <>
//       <CompanyNavbar />
//       <Flex direction="column" align="center" justify="center" p={4}>
//         <Heading as="h1" size="2xl" textAlign="center" mb={4}>
//           Company Dashboard
//         </Heading>
//         <Text fontSize="xl" mb={4}>
//           Welcome to the company dashboard. Here is your dashboard information:
//         </Text>
//         <Box textAlign="center">
//           {data.map((item) => (
//             <Text key={item.id} fontSize="lg" mb={2}>
//               {item.name} - {item.value}
//             </Text>
//           ))}
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default CompanyDashboard;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Flex, Heading, Box, Text, Button, VStack, Divider, useColorModeValue } from "@chakra-ui/react";
// import CompanyNavbar from "./CompanyNavbar";

// const CompanyDashboard = () => {
//   const url = "https://example-api.com/api/v1/company/dashboard"; // Replace with your API endpoint
//   const navigate = useNavigate();
//   const [companyInfo, setCompanyInfo] = useState({
//     companyName: "ABC Inc.",
//     location: "Cityville",
//     revenue: "$1,000,000",
//     employees: 50,
//     products: ["Product A", "Product B", "Product C"],
//   });

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
//       const response = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCompanyInfo(response.data);
//     } catch (error) {
//       console.error("Error fetching company dashboard data:", error);
//     }
//   };

//   return (
//     <>
//       <CompanyNavbar />
//       <Flex direction="column" align="center" p={4}>
//         <Heading as="h1" size="2xl" textAlign="center" mb={4}>
//           Company Dashboard
//         </Heading>
//         <Box mb={8}>
//           <Heading as="h2" size="lg" mb={4}>Company Information</Heading>
//           {/* Company Information Card */}
//           <Box
//             p={6}
//             maxW="sm"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             shadow="md"
//             bg={useColorModeValue('white', 'gray.800')}
//             color={useColorModeValue('gray.800', 'white')}
//           >
//             <VStack align="start" spacing={2}>
//               <Text>Company Name: {companyInfo.companyName}</Text>
//               <Text>Location: {companyInfo.location}</Text>
//               <Text>Revenue: {companyInfo.revenue}</Text>
//               <Text>Number of Employees: {companyInfo.employees}</Text>
//               <Text>Products: {companyInfo.products.join(", ")}</Text>
//             </VStack>
//           </Box>
//         </Box>

//         {/* Other components can be added here based on the company dashboard requirements */}
//       </Flex>
//     </>
//   );
// };

// export default CompanyDashboard;


import { Heading } from "@chakra-ui/react";
import { React } from "react";
import ColorModeSwitcher from "../utils/ColorModeSwitcher";
import CompanyNavbar from "./CompanyNavbar";
import UserInfo from "../components/UserInfo";
import MiddleSection from "./MiddleSection";
import Features from "../components/Features";
import HomePage from "./HomePage";

const LandingPage = () => {
  return (
    <div>
      <CompanyNavbar />
      <UserInfo />
      <Features />
    </div>
  );
};

export default LandingPage;