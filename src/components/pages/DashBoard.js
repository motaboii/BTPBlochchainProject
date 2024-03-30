// import React from "react";
// import { Link } from "react-router-dom";
// import "./DashBoard.css";
// import UserNavbar from "./UserNavbar";
// import Footer from "./Footer";
// import Card from "../utils/Card";
// import { Flex, Heading } from "@chakra-ui/react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Loader from "../components/Loader";
// import { useNavigate } from "react-router-dom";

// const policiesData = [
//   {
//     id: 1,
//     policyName: "Policy 1",
//     companyName: "Company A",
//     policyId: "P001",
//   },
//   {
//     id: 2,
//     policyName: "Policy 2",
//     companyName: "Company B",
//     policyId: "P002",
//   },
//   {
//     id: 3,
//     policyName: "Policy 3",
//     companyName: "Company C",
//     policyId: "P003",
//   },
//   {
//     id: 4,
//     policyName: "Policy 4",
//     companyName: "Company D",
//     policyId: "P004",
//   },
//   {
//     id: 5,
//     policyName: "Policy 5",
//     companyName: "Company E",
//     policyId: "P005",
//   },
//   {
//     id: 6,
//     policyName: "Policy 6",
//     companyName: "Company F",
//     policyId: "P006",
//   },
// ];

// const Policies = () => {
//   const url = "https://misty-ray-threads.cyclic.app/api/v1/company/policies";
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState([false]);
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     } else {
//       getData(url);
//     }
//   }, []);
//   const token = localStorage.getItem("token");
//   const getData = async (url) => {
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
//     <UserNavbar />
//       <Heading as="h1" size="2xl" textAlign="center" p={4}>
//         Policies
//       </Heading>
//       <Flex
//         wrap="wrap"
//         justifyContent="space-around"
//         alignItems="center"
//         p={4}
//         m={4}
//       >
//         {data.map((policy) => (
//           <Card key={policy._id} policy={policy} />
//         ))}
//       </Flex>
//     </>
//   );
// };

// export default Policies;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserNavbar from "./UserNavbar";
// import { Heading, Flex, Box, Text, Spinner, Divider } from '@chakra-ui/react';
// import { VStack } from '@chakra-ui/react';

// import {
//   Stack,
//   HStack,
//   useColorModeValue,
//   List,
//   ListItem,
//   ListIcon,
//   Button,
// } from '@chakra-ui/react'
// import { FaCheckCircle } from 'react-icons/fa'


// const ClaimantDashboard = () => {
//     const [profileInfo, setProfileInfo] = useState({
//         name: "John Doe",
//         email: "john.doe@example.com",
//         address: "123 Main Street, Cityville"
//     });

//     const [activePolicies, setActivePolicies] = useState([
//         {
//             id: 1,
//             policyName: "Home Insurance",
//             companyName: "ABC Insurance"
//         },
//         {
//             id: 2,
//             policyName: "Auto Insurance",
//             companyName: "XYZ Insurance"
//         }
//     ]);

//     const [claimStatus, setClaimStatus] = useState([
//         {
//             id: 1,
//             description: "Claim for Home Insurance",
//             status: "Pending"
//         },
//         {
//             id: 2,
//             description: "Claim for Auto Insurance",
//             status: "Approved"
//         }
//     ]);

//     const [claimHistory, setClaimHistory] = useState([
//         {
//             id: 1,
//             claimNumber: "123456",
//             date: "2023-01-15"
//         },
//         {
//             id: 2,
//             claimNumber: "789012",
//             date: "2023-03-20"
//         }
//     ]);

//     const [isLoading, setIsLoading] = useState(false);

//     // Simulate loading effect for demonstration purposes
//     useEffect(() => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 1000);
//     }, []);

//     function PriceWrapper(props) {
//       const { children } = props
    
//       return (
//         <Box
//           mb={4}
//           shadow="base"
//           borderWidth="1px"
//           alignSelf={{ base: 'center', lg: 'flex-start' }}
//           borderColor={useColorModeValue('gray.200', 'gray.500')}
//           borderRadius={'xl'}>
//           {children}
//         </Box>
//       )
//     }

//     return (
//         <>
//         <UserNavbar />
//       <Box py={12}>
//       <VStack spacing={2} textAlign="center">
//         <Heading as="h1" fontSize="4xl">
//           Active Policies
//         </Heading>
//       </VStack> 
//       <Stack
//         direction={{ base: 'column', md: 'row' }}
//         textAlign="center"
//         justify="center"
//         spacing={{ base: 4, lg: 10 }}
//         py={10}>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//               Claimants
//             </Text>
//             {/* <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 79
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack> */}
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Easy insurance claim process.
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Hassle free.
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reduced Fraud Risk
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Increased Transparency
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Streamlined Documentation
//               </ListItem>
//             </List>
//           </VStack>
//         </PriceWrapper>

//         <PriceWrapper>
//           <Box position="relative">
//             <Box
//               position="absolute"
//               top="-16px"
//               left="50%"
//               style={{ transform: 'translate(-50%)' }}>
//               {/* <Text
//                 textTransform="uppercase"
//                 bg={useColorModeValue('green.300', 'green.700')}
//                 px={3}
//                 py={1}
//                 color={useColorModeValue('gray.900', 'gray.300')}
//                 fontSize="sm"
//                 fontWeight="600"
//                 rounded="xl">
//                 Most Popular
//               </Text> */}
//             </Box>
//             <Box py={4} px={12}>
//               <Text fontWeight="500" fontSize="2xl">
//                 Insurance Companies
//               </Text>
//               {/* <HStack justifyContent="center">
//                 <Text fontSize="3xl" fontWeight="600">
//                   $
//                 </Text>
//                 <Text fontSize="5xl" fontWeight="900">
//                   149
//                 </Text>
//                 <Text fontSize="3xl" color="gray.500">
//                   /month
//                 </Text>
//               </HStack> */}
//             </Box>
//             <VStack
//               bg={useColorModeValue('gray.50', 'gray.700')}
//               py={4}
//               borderBottomRadius={'xl'}>
//               <List spacing={3} textAlign="start" px={12}>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Cost Reduction
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Faster Settlements.
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Enhanced Customer Experience.
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Fraud Prevention
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Streamlined Reinsurance
//                 </ListItem>
//               </List>
//             </VStack>
//           </Box>
//         </PriceWrapper>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//               Government Agencies
//             </Text>
//             {/* <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 349
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack> */}
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Secured Storage
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reduced Administrative Burden
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Decentralized Identity Management
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Cost Savings and Efficiency
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Interoperability and Data Sharing
//               </ListItem>
//             </List>
//           </VStack>
//         </PriceWrapper>
//       </Stack>
//     </Box>

//     <Box py={12}>
//       <VStack spacing={2} textAlign="center">
//         <Heading as="h1" fontSize="4xl">
//           Claim status
//         </Heading>
//       </VStack> 
//       <Stack
//         direction={{ base: 'column', md: 'row' }}
//         textAlign="center"
//         justify="center"
//         spacing={{ base: 4, lg: 10 }}
//         py={10}>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//               Claimants
//             </Text>
//             {/* <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 79
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack> */}
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Easy insurance claim process.
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Hassle free.
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reduced Fraud Risk
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Increased Transparency
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Streamlined Documentation
//               </ListItem>
//             </List>
            
//           </VStack>
//         </PriceWrapper>

//         <PriceWrapper>
//           <Box position="relative">
//             <Box
//               position="absolute"
//               top="-16px"
//               left="50%"
//               style={{ transform: 'translate(-50%)' }}>
//               {/* <Text
//                 textTransform="uppercase"
//                 bg={useColorModeValue('green.300', 'green.700')}
//                 px={3}
//                 py={1}
//                 color={useColorModeValue('gray.900', 'gray.300')}
//                 fontSize="sm"
//                 fontWeight="600"
//                 rounded="xl">
//                 Most Popular
//               </Text> */}
//             </Box>
//             <Box py={4} px={12}>
//               <Text fontWeight="500" fontSize="2xl">
//                 Insurance Companies
//               </Text>
//               {/* <HStack justifyContent="center">
//                 <Text fontSize="3xl" fontWeight="600">
//                   $
//                 </Text>
//                 <Text fontSize="5xl" fontWeight="900">
//                   149
//                 </Text>
//                 <Text fontSize="3xl" color="gray.500">
//                   /month
//                 </Text>
//               </HStack> */}
//             </Box>
//             <VStack
//               bg={useColorModeValue('gray.50', 'gray.700')}
//               py={4}
//               borderBottomRadius={'xl'}>
//               <List spacing={3} textAlign="start" px={12}>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Cost Reduction
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Faster Settlements.
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Enhanced Customer Experience.
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Fraud Prevention
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Streamlined Reinsurance
//                 </ListItem>
//               </List>
            
//             </VStack>
//           </Box>
//         </PriceWrapper>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//               Government Agencies
//             </Text>
//             {/* <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 349
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack> */}
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Secured Storage
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reduced Administrative Burden
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Decentralized Identity Management
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Cost Savings and Efficiency
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Interoperability and Data Sharing
//               </ListItem>
//             </List>
            
//           </VStack>
//         </PriceWrapper>
//       </Stack>
//     </Box>

//     <Box py={12}>
//       <VStack spacing={2} textAlign="center">
//         <Heading as="h1" fontSize="4xl">
//           Claim History
//         </Heading>
//       </VStack> 
//       <Stack
//         direction={{ base: 'column', md: 'row' }}
//         textAlign="center"
//         justify="center"
//         spacing={{ base: 4, lg: 10 }}
//         py={10}>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//               Claimants
//             </Text>
//             {/* <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 79
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack> */}
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Easy insurance claim process.
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Hassle free.
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reduced Fraud Risk
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Increased Transparency
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Streamlined Documentation
//               </ListItem>
//             </List>
           
//           </VStack>
//         </PriceWrapper>

//         <PriceWrapper>
//           <Box position="relative">
//             <Box
//               position="absolute"
//               top="-16px"
//               left="50%"
//               style={{ transform: 'translate(-50%)' }}>
//               {/* <Text
//                 textTransform="uppercase"
//                 bg={useColorModeValue('green.300', 'green.700')}
//                 px={3}
//                 py={1}
//                 color={useColorModeValue('gray.900', 'gray.300')}
//                 fontSize="sm"
//                 fontWeight="600"
//                 rounded="xl">
//                 Most Popular
//               </Text> */}
//             </Box>
//             <Box py={4} px={12}>
//               <Text fontWeight="500" fontSize="2xl">
//                 Insurance Companies
//               </Text>
//               {/* <HStack justifyContent="center">
//                 <Text fontSize="3xl" fontWeight="600">
//                   $
//                 </Text>
//                 <Text fontSize="5xl" fontWeight="900">
//                   149
//                 </Text>
//                 <Text fontSize="3xl" color="gray.500">
//                   /month
//                 </Text>
//               </HStack> */}
//             </Box>
//             <VStack
//               bg={useColorModeValue('gray.50', 'gray.700')}
//               py={4}
//               borderBottomRadius={'xl'}>
//               <List spacing={3} textAlign="start" px={12}>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Cost Reduction
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Faster Settlements.
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Enhanced Customer Experience.
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Fraud Prevention
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaCheckCircle} color="green.500" />
//                   Streamlined Reinsurance
//                 </ListItem>
//               </List>
              
//             </VStack>
//           </Box>
//         </PriceWrapper>
//         <PriceWrapper>
//           <Box py={4} px={12}>
//             <Text fontWeight="500" fontSize="2xl">
//               Government Agencies
//             </Text>
//             {/* <HStack justifyContent="center">
//               <Text fontSize="3xl" fontWeight="600">
//                 $
//               </Text>
//               <Text fontSize="5xl" fontWeight="900">
//                 349
//               </Text>
//               <Text fontSize="3xl" color="gray.500">
//                 /month
//               </Text>
//             </HStack> */}
//           </Box>
//           <VStack
//             bg={useColorModeValue('gray.50', 'gray.700')}
//             py={4}
//             borderBottomRadius={'xl'}>
//             <List spacing={3} textAlign="start" px={12}>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Secured Storage
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Reduced Administrative Burden
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Decentralized Identity Management
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Cost Savings and Efficiency
//               </ListItem>
//               <ListItem>
//                 <ListIcon as={FaCheckCircle} color="green.500" />
//                 Interoperability and Data Sharing
//               </ListItem>
//             </List>
            
//           </VStack>
//         </PriceWrapper>
//       </Stack>
//     </Box>
//         </>
//     );
// };

// export default ClaimantDashboard;

// import React, { useState, useEffect } from 'react';
// import UserNavbar from "./UserNavbar";
// import { Heading, Flex, Box, Text, Button, VStack, Divider, useColorModeValue } from '@chakra-ui/react';

// const ClaimantDashboard = () => {
//     const [profileInfo, setProfileInfo] = useState({
//         name: "John Doe",
//         email: "john.doe@example.com",
//         address: "123 Main Street, Cityville"
//     });

//     const [activePolicies, setActivePolicies] = useState([
//         {
//             id: 1,
//             policyName: "Home Insurance",
//             companyName: "ABC Insurance"
//         },
//         {
//             id: 2,
//             policyName: "Auto Insurance",
//             companyName: "XYZ Insurance"
//         }
//     ]);

//     const [claimStatus, setClaimStatus] = useState([
//         {
//             id: 1,
//             description: "Claim for Home Insurance",
//             status: "Pending"
//         },
//         {
//             id: 2,
//             description: "Claim for Auto Insurance",
//             status: "Approved"
//         }
//     ]);

//     const [claimHistory, setClaimHistory] = useState([
//         {
//             id: 1,
//             claimNumber: "123456",
//             date: "2023-01-15"
//         },
//         {
//             id: 2,
//             claimNumber: "789012",
//             date: "2023-03-20"
//         }
//     ]);

//     const [isLoading, setIsLoading] = useState(false);

//     // Simulate loading effect for demonstration purposes
//     useEffect(() => {
//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 1000);
//     }, []);

//     return (
//         <>
//             <UserNavbar />
//             <Flex direction="column" align="center" p={4}>
//                 <Heading as="h1" size="2xl" textAlign="center" my={4}>
//                     Welcome, {profileInfo.name}
//                 </Heading>

//                 <Box mb={8}>
//                     <Heading as="h2" size="lg" mb={4}>Active Policies</Heading>
//                     {/* Active Policies Card */}
//                     <Box
//                         p={6}
//                         maxW="sm"
//                         borderWidth="1px"
//                         borderRadius="lg"
//                         overflow="hidden"
//                         shadow="md"
//                         bg={useColorModeValue('white', 'gray.800')}
//                         color={useColorModeValue('gray.800', 'white')}
//                     >
//                         <VStack align="start" spacing={2}>
//                             {activePolicies.map(policy => (
//                                 <Text key={policy.id}>{policy.policyName} - {policy.companyName}</Text>
//                             ))}
//                         </VStack>
//                         <Box mt={4}>
//                             <Button colorScheme="green" size="sm">View Details</Button>
//                         </Box>
//                     </Box>
//                 </Box>


//                 <Box mb={8}>
//                     <Heading as="h2" size="lg" mb={4}>Claim Status</Heading>
//                     {/* Claim Status Card */}
//                     <Box
//                         p={6}
//                         maxW="sm"
//                         borderWidth="1px"
//                         borderRadius="lg"
//                         overflow="hidden"
//                         shadow="md"
//                         bg={useColorModeValue('white', 'gray.800')}
//                         color={useColorModeValue('gray.800', 'white')}
//                     >
//                         <VStack align="start" spacing={2}>
//                             {claimStatus.map(claim => (
//                                 <Text key={claim.id}>{claim.description} - {claim.status}</Text>
//                             ))}
//                         </VStack>
//                         <Box mt={4}>
//                             <Button colorScheme="green" size="sm">View Details</Button>
//                         </Box>
//                     </Box>
//                 </Box>



//                 <Box mb={8}>
//                     <Heading as="h2" size="lg" mb={4}>Claim History</Heading>
//                     {/* Claim History Card */}
//                     <Box
//                         p={6}
//                         maxW="sm"
//                         borderWidth="1px"
//                         borderRadius="lg"
//                         overflow="hidden"
//                         shadow="md"
//                         bg={useColorModeValue('white', 'gray.800')}
//                         color={useColorModeValue('gray.800', 'white')}
//                     >
//                         <VStack align="start" spacing={2}>
//                             {claimHistory.map(history => (
//                                 <Text key={history.id}>{history.claimNumber} - {history.date}</Text>
//                             ))}
//                         </VStack>
//                         <Box mt={4}>
//                             <Button colorScheme="green" size="sm">View Details</Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Flex>
//         </>
//     );
// };

// export default ClaimantDashboard;


import { Heading } from "@chakra-ui/react";
import { React } from "react";
import ColorModeSwitcher from "../utils/ColorModeSwitcher";
import UserNavbar from "./UserNavbar";
import UserInfo from "../components/UserInfo";
import MiddleSection from "./MiddleSection";
import Features from "../components/Features";
import HomePage from "./HomePage";

const LandingPage = () => {
  return (
    <div>
      <UserNavbar />
      <UserInfo />
      <Features />
    </div>
  );
};

export default LandingPage;

