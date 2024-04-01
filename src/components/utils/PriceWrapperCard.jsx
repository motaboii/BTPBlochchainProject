import React from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PriceWrapperCard({ policy }) {
  const navigate = useNavigate();
  let { name, company, coverage, maxAmount, insuranceId, _id, price } = policy;
  let str = coverage.toString();
  const search = () => {
    navigate(`/policy/${_id}`, { state: _id });
  };

  function PriceWrapper(props) {
    const { children } = props;

    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor={useColorModeValue("gray.200", "gray.500")}
        borderRadius={"xl"}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box onClick={search} cursor={"pointer"}>
      <PriceWrapper>
        <Box py={4} px={12}>
          <Text color={"red.400"} fontWeight="600" fontSize="2xl">
            {name}
          </Text>
          {/* <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack> */}
        </Box>
        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
          textTransform={"capitalize"}
        >
          <List spacing={3} textAlign="start" px={12}>
            {insuranceId && (
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {`ID: ${insuranceId}`}
              </ListItem>
            )}
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {`Company: ${company}`}
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {`Coverage: ${str}`}
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {`Max Coverage: Rs ${maxAmount}`}
            </ListItem>
            {price && (
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {`Premium: Rs ${price} / annually`}
              </ListItem>
            )}
          </List>
          <Box w="80%" pt={7}>
            {/* <Button  onClick={() => {
                navigate("/login");
                }} w="full" colorScheme="green" variant="outline">
                Get Started
              </Button> */}
          </Box>
        </VStack>
      </PriceWrapper>
    </Box>
  );
}

export default PriceWrapperCard;
