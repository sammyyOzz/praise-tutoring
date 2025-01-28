import { Box, Flex, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface TestimonialCardProps {
  image: StaticImageData;
  name: string;
  description?: string;
  video?: string;
}

function TestimonialCard({ image, name, description, video }: TestimonialCardProps) {
  // return (
  //   <Box p={4} border="1px solid #1A5276" bg=" #ffffff" borderRadius={2} minH="700px" mr={10}>
  //     <Box aspectRatio={1} pos="relative">
  //       <Image src={image} alt="" fill />
  //       <Text
  //         pos="absolute"
  //         w="calc(100% - 30px)"
  //         textAlign="center"
  //         bottom={0}
  //         left="50%"
  //         bg=" #F7DC6F"
  //         px={6}
  //         py={1}
  //         fontWeight="bold"
  //         borderRadius={10}
  //         transform="translate(-50%, 50%)"
  //       >
  //         {name}
  //       </Text>
  //     </Box>
  //     <Text mt={7}>{description}</Text>
  //   </Box>
  // );

  return (
    <Flex justify="center">
      <Box
        w={{ base: "250px", md: "300px", xl: "350px" }}
        h={{ base: "650px", md: "600px", xl: "650px" }}
        // pos="relative"
        p={4}
        border="1px solid #1A5276"
        bg=" #ffffff"
        borderRadius={2}
      >
        {/* <Box
          h="100%"
          w="100%"
          p={4}
          border="1px solid #1A5276"
          borderRadius={2}
        > */}
          <Box aspectRatio={1} pos="relative">
            <Image src={image} alt="" fill />
            <Text pos="absolute" w="calc(100% - 30px)" textAlign="center" bottom={0} left="50%" bg=" #F7DC6F" px={6} py={1} fontWeight="bold" borderRadius={10} transform="translate(-50%, 50%)">
              {name}
            </Text>
          </Box>
          <Text mt={7} textAlign="center">{description}</Text>
          {video && (
            <a href={video} target="_blank" style={{ textDecoration: "underline" }}><Text mt={7} textAlign="center">Watch her testimonial video here</Text></a>
          )}
        {/* </Box> */}
      </Box>
    </Flex>
  );
}

export default TestimonialCard;
