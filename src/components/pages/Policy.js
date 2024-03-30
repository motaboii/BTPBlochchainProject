import React, { useState } from "react";
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
} from "@chakra-ui/react";
// import "./Product.css";
import { PriceTag } from "../components/PriceTag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Policy = (props) => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/company/policies";

  const location = useLocation();
  //   console.log(location.state);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const [isLoading, setIsLoading] = React.useState(true);
  const [status, setStatus] = React.useState("success");
  const [message, setMessage] = React.useState("okay");
  const [isAdded, setIsAdded] = useState(false);
  const [policy, setPolicy] = useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const uri = url + "/" + `${location.state}`;
        const { data } = await axios.get(uri);
        setPolicy(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const sellPrice = null;

  var data = [];
  if (!isLoading) {
    data = policy.policy;
    data.image =
      "https://res.cloudinary.com/dpjf6btln/image/upload/v1707239356/Insurance-pana_uoq74n.png";
  }

  if (isLoading) {
    return (
      <Stack h={"100vh"} w="100%" justify="center" align="center">
        <Text fontSize={"4xl"}>Loading...</Text>
      </Stack>
    );
  }
  return (
    <>
      <Box
        w={"100%"}
        zIndex={"150"}
        display={"none"}
        className="alert"
        position={"absolute"}
        top="20vh"
        justifyContent="center"
      >
        <Alert
          status={status}
          w={{ base: "100vw", lg: "auto" }}
          variant={"solid"}
        >
          <AlertIcon />
          {message}
        </Alert>
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
              src={data.image}
            ></Image>
          </Box>
        </Box>

        <Box mt={4} w={{ base: "100%", md: "35%" }}>
          <Stack spacing="1" ml={4} mt={2}>
            <Text
              fontWeight="medium"
              color={colorMode === "light" ? "black" : "white"}
              fontSize={"xl"}
            >
              {data.name}
            </Text>
            <PriceTag
              price={data.price}
              salePrice={data.sellPrice}
              currency="INR"
            />
          </Stack>
          <Text
            ml={4}
            mr={2}
            mt={2}
            color={colorMode === "light" ? "gray.600" : "gray.400"}
          >
            {data.description}
          </Text>

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
