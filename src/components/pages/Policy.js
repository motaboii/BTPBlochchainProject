import React, { useState } from "react";
import { Web3 } from "web3";
import {
  Box,
  Stack,
  Button,
  Image,
  Text,
  HStack,
  useColorModeValue,
  useColorMode,
  Alert,
  AlertIcon,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { PriceTag } from "../components/PriceTag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import { useGlobalContext } from "../../context";

export const Policy = (props) => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/company/policies";
  const url2 = "https://misty-ray-threads.cyclic.app/api/v1/user/createPolicy";
  const token = localStorage.getItem("token");
  const { account, setAccount, contract, setContract } = useGlobalContext();

  const location = useLocation();
  //   console.log(location.state);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const [isLoading, setIsLoading] = React.useState(true);

  const [isAdded, setIsAdded] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const uri = url + "/" + `${location.state}`;
        const { data } = await axios.get(uri);
        setData(data.policy);
        setIsLoading(false);
        // console.log(contract);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const buy = async (id) => {
    try {
      setIsLoading(true);
      const { data1 } = await axios.post(
        url2,
        {
          name: data.name,
          insuranceId: id,
          company: data.company,
          coverage: data.coverage,
          maxAmount: data.maxAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      setIsAdded(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const createinsurance = async () => {
    if (id == "") {
      alert("Enter Citizen Id");
      return;
    }
    try {
      if (contract !== null) {
        setIsLoading(true);

        const tx = await contract.methods
          .createMedicalInsurance(
            parseInt(id),
            data.coverage,
            parseInt(data.maxAmount)
          )
          .send({
            from: account,
          });
        // // await tx.wait();
        const _id = await contract.methods.insuranceId().call();
        buy(Number(parseInt(_id) - 1));
        console.log(_id);
        setIsLoading(false);
        setId("");
      } else {
        alert("Connect Wallet");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  // if (isLoading) {
  //   return (
  //     <Stack h={"100vh"} w="100%" justify="center" align="center">
  //       <Text fontSize={"4xl"}>Loading...</Text>
  //     </Stack>
  //   );
  // }
  return (
    <>
      <UserNavbar />
      <Box
        w={"100%"}
        zIndex={"150"}
        display={"none"}
        className="alert"
        position={"absolute"}
        top="20vh"
        justifyContent="center"
      >
        {/* <Alert
          status={status}
          w={{ base: "100vw", lg: "auto" }}
          variant={"solid"}
        >
          <AlertIcon />
          {message}
        </Alert> */}
      </Box>

      <Stack
        align={"center"}
        w={"100%"}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          className="slider"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "34vh", md: "80vh" }}
          p={4}
        >
          <Box width={"100%"} height={"100%"}>
            <Image
              w={"100%"}
              h={{ base: "30vh", md: "75vh" }}
              fit={"cover"}
              src={
                "https://res.cloudinary.com/dpjf6btln/image/upload/v1707239356/Insurance-pana_uoq74n.png"
              }
            ></Image>
          </Box>
        </Box>

        <Box mt={4} w={{ base: "100%", md: "35%" }}>
          <Stack spacing="1" ml={4} mt={2}>
            <Text
              color={"blue.300"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"3xl"}
              letterSpacing={1.1}
            >
              {data.name}
            </Text>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "white")}
              fontSize={"xl"}
              fontFamily={"body"}
            >
              {`Company: ${data.company}`}
            </Heading>
            <Text
              color={"red.500"}
              textTransform={"capitalize"}
              fontWeight={600}
              fontSize={"xl"}
              letterSpacing={1.1}
            >
              {`Coverage: ${data.coverage}`}
            </Text>
            <Text
              color={"green.500"}
              textTransform={"capitalize"}
              fontWeight={600}
              fontSize={"xl"}
              letterSpacing={1.1}
            >
              {`Max Coverage: Rs ${data.maxAmount}`}
            </Text>
            <Text
              color={"yellow.500"}
              textTransform={"capitalize"}
              fontWeight={600}
              fontSize={"xl"}
              letterSpacing={1.1}
            >
              {`Premium: Rs ${data.price}/anually  `}
            </Text>
          </Stack>
          <Text
            ml={4}
            mr={2}
            mt={2}
            color={colorMode === "light" ? "gray.600" : "gray.400"}
          >
            {data.description}
          </Text>
          <FormControl id="citizenId" mb={4}>
            {/* <FormLabel>Citicen Id</FormLabel> */}
            <Input
              type="text"
              name="citizenId"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Citizen Id"
            />
          </FormControl>

          <Stack mb={{ base: 14, md: 0 }} mt={2} p={4} spacing={4}>
            {isAdded ? (
              <Button variant="outline" colorScheme={"blue"}>
                Added
              </Button>
            ) : (
              <Button
                className="cart"
                // onClick={}
                variant="solid"
                colorScheme={"blue"}
                isLoading={isLoading}
                onClick={createinsurance}
              >
                Buy Policy
              </Button>
            )}
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
