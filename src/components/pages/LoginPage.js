import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { color } from "framer-motion";

export default function SignInPage() {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/register");
  };

  const {
    login,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    setIsLoading,
  } = useAuth();

  return (
    <div>
      {/* <Navbar /> */}
      <Flex
        minH={"81vh"}
        align={"center"}
        justify={"start"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>Forgot password?</Text>
                </Stack>
                <Button
                  isLoading={isLoading}
                  loadingText="Signing in"
                  colorScheme="green"
                  onClick={login}
                >
                  Sign in
                </Button>
                <Text align={"center"}>
                  Don't have an account?{" "}
                  <Link
                    onClick={signUp}
                    style={{ color: "#90E4C1", fontWeight: "bold" }}
                  >
                    SignUp
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
