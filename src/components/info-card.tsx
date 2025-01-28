import { Box, Flex, Text } from "@chakra-ui/react";
import React, { JSX } from "react";

interface InfoCardProps {
  title: string;
  details: string[];
  icon?: JSX.Element;
}

function InfoCard({ title, details, icon }: InfoCardProps) {
  return (
    <Box>
      {icon}<br />
      <Text as="strong">{title}</Text>
      {details.map((detail, j) => (
        <Flex key={j} align="flex-start" mb={2}>
          {/* <Box
            w="5px"
            h="5px"
            ml="7px"
            mt={2}
            mr={5}
            bg="#000000"
            className="rounded"
          /> */}
          <Text w="calc(100% - 25px)">{detail}</Text>
        </Flex>
      ))}
    </Box>
  );
}

export default InfoCard;
