import { Box, Button, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <Box px={8} py={24} mx="auto">
            <Box
                w={{
                    base: "full",
                    md: 11 / 12,
                    xl: 9 / 12,
                }}
                mx="auto"
                textAlign={{
                    base: "left",
                    md: "center",
                }}
            >
                <Heading
                    mb={6}
                    fontSize={{
                        base: "4xl",
                        md: "6xl",
                    }}
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{
                        base: "normal",
                        md: "tight",
                    }}
                    color="gray.900"
                    _dark={{
                        color: "gray.100",
                    }}
                >
                    {" "}
                    <Text
                        display={{
                            base: "block",
                            lg: "inline",
                        }}
                        w="full"
                        bgClip="text"
                        bgGradient="linear(to-r, teal.400,purple.500)"
                        fontWeight="extrabold"
                    >
                        Empower your DAO
                    </Text>{" "}
                    with the new definition
                    of democracy
                </Heading>
                <Text
                    px={{
                        base: 0,
                        lg: 24,
                    }}
                    mb={6}
                    fontSize={{
                        base: "lg",
                        md: "xl",
                    }}
                    color="gray.600"
                    _dark={{
                        color: "gray.300",
                    }}
                >
                    Our blockchain-based voting system ensures every voice is heard and every vote counts.
                </Text>
            </Box>
            <Box
                w={{
                    base: "full",
                    md: 10 / 12,
                }}
                mx="auto"
                mt={20}
                textAlign="center"
                
            >
                <Image
                    w="full"
                    rounded="2xl"
                    shadow="2xl"
                    src="https://res.cloudinary.com/dpjf6btln/image/upload/v1681148401/Screenshot_2023-04-10_230554_wl4jpk.png"
                    alt="Hero Image"
                />
            </Box>
        </Box>
    )
}

export default Hero