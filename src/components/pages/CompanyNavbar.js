import React from "react";
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../utils/Logo";

export default function DashboardNavbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={"start"}>
          <Logo />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button onClick={() => navigate("/createinsurance")}>
            Add Insurance
          </Button>
          <Button onClick={() => navigate("/current-insurance")}>
            User Data
          </Button>
          <Button onClick={() => navigate("/listed-insurance")}>
            Listed Insurances
          </Button>
          <Button onClick={logout} colorScheme={"red"} variant={"outline"}>
            Logout
          </Button>
          <Avatar
            cursor={"pointer"}
            name={user?.name}
            size={"md"}
          />
        </Stack>
      </Flex>
    </Box>
  );
}
