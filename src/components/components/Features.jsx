"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcSalesPerformance,
  FcElectricity,
  FcPrivacy,
  FcSearch,
  FcGlobe ,
} from "react-icons/fc";
import { GrSecure } from "react-icons/gr";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box
      p={10}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Features
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Features that makes our project easy to use and better than the traditional approach.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Fast"}
            icon={<Icon as={FcElectricity} w={10} h={10} />}
            description={
              "Our project utilizes smart contracts to automate processes, resulting in faster operations compared to traditional methods."
            }
            href={"#"}
          />
          <Card
            heading={"Secure"}
            icon={<Icon as={FcPrivacy} w={10} h={10} />}
            description={
              "Built on blockchain technology, our project ensures data immutability to enhance data security."
            }
            href={"#"}
          />
          <Card
            heading={"Transparent"}
            icon={<Icon as={FcSearch} w={10} h={10} />}
            description={
              "Blockchain technology enables data to be audited and traced back to its origin, fostering transparency and trust in digital transactions."
            }
            href={"#"}
          />
          <Card
            heading={"Economic"}
            icon={<Icon as={FcSalesPerformance} w={10} h={10} />}
            description={
              "Blockchain eliminates the need for intermediaries and manual reconciliation processes, leading to faster transaction settlement and lower costs."
            }
            href={"#"}
          />
          <Card
            heading={"Global Accessibility"}
            icon={<Icon as={FcGlobe } w={10} h={10} />}
            description={
              "Blockchain networks are accessible globally, allowing for seamless cross-border transactions without the need for intermediaries or delays. "
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
