import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const VideoSection = () => {
  return (
    <div>
      <Box
        position="relative"
        height="100vh"
        width="100%"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={useColorModeValue('gray.100', 'gray.900')}
        p={8}
      >
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          position="absolute"
          top="50px"
        >
          How It Works
        </Heading>

        <Box
          width="80%"
          maxW="1200px"
          height="70vh"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="2xl"
        >
          <video
            width="100%"
            height="100%"
            controls
            style={{ objectFit: 'cover' }}
          >
            <source src="/BTP Demo Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
    </div>
  )
}

export default VideoSection
