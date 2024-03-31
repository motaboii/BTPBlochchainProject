import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Card({ medicalRecord }) {
  //   console.log(medicalRecord);
  let { name, mrId, diagnosis, bill, hospital } = medicalRecord;
  let str = diagnosis.toString();
  console.log(diagnosis);

  const navigate = useNavigate();

  return (
    <Center py={6}>
      <Box
        cursor={"pointer"}
        minW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        {/* <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                src={
                  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                fill
                alt="Example"
              />
            </Box> */}
        <Stack>
          <Text
            color={"orange.300"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"xl"}
            letterSpacing={1.1}
          >
            {`ID: ${mrId}`}
          </Text>
          <Text
            color={"blue.300"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"3xl"}
            letterSpacing={1.1}
          >
            {name}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            {`Hospital: ${hospital}`}
          </Heading>
          <Text
            color={"red.500"}
            textTransform={"capitalize"}
            fontWeight={600}
            fontSize={"xl"}
            letterSpacing={1.1}
          >
            {`Coverage: ${str}`}
          </Text>
          <Text
            color={"green.500"}
            textTransform={"capitalize"}
            fontWeight={600}
            fontSize={"xl"}
            letterSpacing={1.1}
          >
            {`Bill: Rs ${bill}`}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
