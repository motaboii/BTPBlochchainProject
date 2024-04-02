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
import { useGlobalContext } from "../../context";
import Web3 from "web3";
import abi from "../utils/contract-abi.json";

export default function DashboardNavbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const { account, setAccount, contract, setContract } = useGlobalContext();

  async function connectMetamask() {
    //check metamask is installed
    if (window.ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3(window.ethereum);

      //request user to connect accounts (Metamask will prompt)
      await window.ethereum.request({ method: "eth_requestAccounts" });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setAccount(accounts[0]);
      console.log(account);
      let contractAddress = "0x2e9eC300c8732e5d2F8B25093679895d938002b1";
      let contract = new web3.eth.Contract(abi.abi, contractAddress);
      setContract(contract);

      // const tx = await contract.methods.mrId().call();
      // console.log(Number(tx));
    } else {
      alert("Please download metamask");
    }
  }

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
          <Button onClick={() => navigate("/addmedicalrecord")}>
            Add Medical Record
          </Button>
          <Button onClick={() => navigate("/medicalRecords")}>
            Patient's Record
          </Button>
          <Button
            variant={"solid"}
            colorScheme="teal"
            onClick={connectMetamask}
          >
            Connect to Wallet
          </Button>
          <Button onClick={logout} colorScheme={"red"} variant={"outline"}>
            Logout
          </Button>
          <Avatar cursor={"pointer"} name={user?.name} size={"md"} />
        </Stack>
      </Flex>
    </Box>
  );
}
