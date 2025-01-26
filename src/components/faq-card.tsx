import { Box, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";
import QuestionIcon from "./icons/question";

interface FaqCardProps {
  question: string;
  answer: string;
}

function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <Flex textAlign="left" gap={4} fontSize="lg">
      <Box>
        <Square>
          <QuestionIcon width="35px" />
        </Square>
      </Box>
      <Box>
        <Text fontWeight="bold">{question}</Text>
        <Text>{answer}</Text>
      </Box>
    </Flex>
  );
}

export default FaqCard;
