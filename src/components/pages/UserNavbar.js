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
import abi from "../utils/contract-abi.json";
import { useGlobalContext } from "../../context";
import Web3 from "web3";
import { ethers } from "ethers";
import WalletIcon from "@mui/icons-material/Wallet";
export default function DashboardNavbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isAndroid = false;
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
  // async function ButtonClick() {
  //   // console.log("window.ethereum:", window.ethereum);
  //   if (typeof window.ethereum !== "undefined") {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     // console.log("provider:", provider);
  //     const loadProvider = async () => {
  //       window.ethereum.on("chainChanged", () => {
  //         window.location.reload();
  //       });

  //       window.ethereum.on("accountsChanged", () => {
  //         window.location.reload();
  //       });
  //       await provider.send("eth_requestAccounts", []);
  //       const signer = provider.getSigner();
  //       const address = await signer.getAddress();
  //       setAccount(address);
  //       console.log(address);
        // let contractAddress = "0x3B117Ff72803eadECDc3944e414B5fb0931d872C";
        // const contract = new ethers.Contract(contractAddress, SCM.abi, signer);

        // setContract(contract);
        // setProvider(provider);
        // console.log(typeof contract);
      //};
      //provider && loadProvider();
    //}
    // else {
    //   if (!isAndroid) alert("Install Metamask");
    // }
    // console.log(account);
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
          <Button onClick={() => navigate("/claiminsurance")}>
            Claim Insurance
          </Button>
          <Button onClick={() => navigate("/current-insurance")}>
            See Current Insurance
          </Button>
          <Button onClick={() => navigate("/shop-policies")}>
            Shop Policies
          </Button>
          <Button onClick={() => navigate("/current-records")}>
            View Medical records
          </Button>
          {/* <Button
            variant={"solid"}
            colorScheme="teal"
            onClick={connectMetamask}
          >
            Connect to Wallet
          </Button> */}
          <Button
            onClick={connectMetamask}
            rightIcon={<WalletIcon />}
            colorScheme="green"
            variant="solid"
            overflow={"hidden"}
            maxWidth={"100%"}
            mr={4}
            // p={4}
            width={{ base: "50%", md: "auto", lg: "auto" }}
          >
            {isAndroid === false ? (
              account === null ? (
                "Connect"
              ) : (
                "Connected"
              )
            ) : (
              <a href="https://metamask.app.link/dapp/supply-chain-management-l0j5ryepd-nrs08.vercel.app/">
                Connect
              </a>
            )}
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
