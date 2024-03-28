import { Heading } from "@chakra-ui/react";
import React from "react";

const Logo = (props) => {
  return (
    <Heading as="h1" size="lg" fontWeight="bold" color="green.400" {...props}>
      BlockSure
    </Heading>
  );
};

export default Logo;
