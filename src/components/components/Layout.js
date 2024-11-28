import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Footer from "./Footer"; 

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      {/* Main content area with flex-grow */}
      <Box flex="1">
        {children}
      </Box>
      {/* Footer at the bottom */}
      <Footer />
    </Flex>
  );
};

export default Layout;
