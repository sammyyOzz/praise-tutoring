"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EnrollButton from "./enroll-button";

function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Box
      pos="fixed"
      bottom={0}
      left={0}
      w="100%"
      zIndex={50}
      bg="#ffffff"
      borderTop="1px solid rgba(26, 82, 118, 0.15)"
      boxShadow="0 -10px 30px -10px rgba(0, 0, 0, 0.15)"
      px={[4, null, 8]}
      py={3}
    >
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto" gap={4}>
        <Box display={["none", null, "block"]}>
          <Text fontWeight="bold" color="#1A5276">
            Limited time: ₦20,000{" "}
            <Text as="span" fontSize="sm" color="#2980B9" textDecoration="line-through">
              ₦35,000
            </Text>
          </Text>
        </Box>
        <Box flex={[1, null, "unset"]}>
          <EnrollButton size="md" fullWidth>
            Enrol Me Now
          </EnrollButton>
        </Box>
      </Flex>
    </Box>
  );
}

export default StickyCtaBar;
