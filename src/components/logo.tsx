import { Box, HStack, Text } from "@chakra-ui/react";

function Logo() {
  return (
    <HStack>
      <Box bg="#ffffff" w="50px" h="50px" border="1px solid black" />
      <Text textTransform="uppercase" fontWeight="black" color="#02FFE4" fontSize={["md", null, null, "xl"]}>
        some logo text
        {/* <Text as="span" color="#02FFE4">
          logo{" "}
        </Text> */}
      </Text>
    </HStack>
  );
}

export default Logo;
