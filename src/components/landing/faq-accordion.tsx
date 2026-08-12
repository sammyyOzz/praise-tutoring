"use client";

import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionRoot,
  Box,
  Text,
} from "@chakra-ui/react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <AccordionRoot variant="plain" collapsible defaultValue={["0"]}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={String(i)}
          mb={4}
          border="1px solid #85C1E9"
          borderRadius={14}
          overflow="hidden"
          bg="#ffffff"
        >
          <AccordionItemTrigger
            px={6}
            py={5}
            _hover={{ bg: "rgba(133, 193, 233, 0.15)" }}
          >
            <Box
              flex="1"
              textAlign="left"
              fontWeight="bold"
              fontSize={["md", null, "lg"]}
              color="#1A5276"
            >
              {item.question}
            </Box>
            <AccordionItemIndicator>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A5276"
                strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </AccordionItemIndicator>
          </AccordionItemTrigger>
          <AccordionItemContent px={6} pb={6}>
            <Text color="#333333" lineHeight={1.7}>
              {item.answer}
            </Text>
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}

export default FaqAccordion;
