"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ENROLL_LINK = "https://nestuge.com/proudatutorselfpaced";

interface EnrollButtonProps {
  children: React.ReactNode;
  size?: "md" | "lg";
  fullWidth?: boolean;
}

function EnrollButton({ children, size = "lg", fullWidth }: EnrollButtonProps) {
  const isLarge = size === "lg";

  return (
    <motion.div
      animate={{ y: [0, -10, 0, -5, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
    >
      <a href={ENROLL_LINK} target="_blank" rel="noopener noreferrer">
        <Button
          as={Box}
          variant="solid"
          bg="#D4AC0D"
          color="#ffffff"
          fontSize={isLarge ? ["md", null, null, "xl"] : ["sm", null, "md"]}
          fontWeight="bold"
          px={isLarge ? [8, null, null, 14] : 8}
          py={isLarge ? [6, null, null, 8] : 5}
          borderRadius="full"
          w={fullWidth ? "100%" : "auto"}
          maxW="100%"
          whiteSpace="normal"
          textAlign="center"
          boxShadow="0 10px 30px -8px rgba(212, 172, 13, 0.65)"
          transition="all 0.2s ease"
          _hover={{
            bg: "#F7DC6F",
            transform: "translateY(-3px) scale(1.02)",
            boxShadow: "0 16px 36px -8px rgba(212, 172, 13, 0.8)",
          }}
          _active={{ transform: "translateY(0) scale(0.99)" }}
        >
          {children}
        </Button>
      </a>
    </motion.div>
  );
}

export default EnrollButton;
