// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Flex, Heading, Box, Text } from "@chakra-ui/react";
// import HospitalNavbar from "./HospitalNavbar";

// const HospitalDashboard = () => {
//   const navigate = useNavigate();
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//     } else {
//       fetchData(token);
//     }
//   }, []);

//   const fetchData = (token) => {
//     // Simulated appointments data
//     const dummyAppointments = [
//       { id: 1, patientName: "John Doe", appointmentDate: "2024-04-01" },
//       { id: 2, patientName: "Jane Doe", appointmentDate: "2024-04-02" },
//       { id: 3, patientName: "Alice Smith", appointmentDate: "2024-04-03" },
//     ];

//     setAppointments(dummyAppointments);
//   };

//   return (
//     <>
//       <HospitalNavbar />
//       <Flex direction="column" align="center" justify="center" p={4}>
//         <Heading as="h1" size="2xl" textAlign="center" mb={4}>
//           Hospital Dashboard
//         </Heading>
//         <Text fontSize="xl" mb={4}>
//           Welcome to the hospital dashboard. Here are your upcoming appointments:
//         </Text>
//         <Box textAlign="center">
//           {appointments.length > 0 ? (
//             appointments.map((appointment) => (
//               <Text key={appointment.id} fontSize="lg" mb={2}>
//                 {appointment.patientName} - {appointment.appointmentDate}
//               </Text>
//             ))
//           ) : (
//             <Text fontSize="lg">No upcoming appointments</Text>
//           )}
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default HospitalDashboard;


import { Heading } from "@chakra-ui/react";
import { React } from "react";
import ColorModeSwitcher from "../utils/ColorModeSwitcher";
import HospitalNavbar from "./HospitalNavbar";
import HospitalInfo from "../components/HospitalInfo";
import MiddleSection from "./MiddleSection";
import Features from "../components/Features";
import HomePage from "./HomePage";

const LandingPage = () => {
  return (
    <div>
      <HospitalNavbar />
      <HospitalInfo />
      <Features />
    </div>
  );
};

export default LandingPage;