import { Box, HStack, Text } from "@chakra-ui/react";

function Logo({ ...props }) {
  return (
    <HStack {...props}>
      <Box bg="#ffffff" w="50px" h="50px" border="1px solid black" />
      <Text textTransform="uppercase" fontWeight="black" color={props?.color || "#85c1e9"} fontSize={["md", null, null, "xl"]}>
        prouda tutors
      </Text>
    </HStack>
  );
}

export default Logo;
