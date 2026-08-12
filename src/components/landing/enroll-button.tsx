import { Box } from "@chakra-ui/react";
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
    <a href={ENROLL_LINK} target="_blank" rel="noopener noreferrer">
      <Button
        as={Box}
        variant="solid"
        bg=" #1A5276"
        color="#ffffff"
        fontSize={isLarge ? ["md", null, null, "xl"] : ["sm", null, "md"]}
        fontWeight="bold"
        px={isLarge ? [8, null, null, 14] : 8}
        py={isLarge ? [6, null, null, 8] : 5}
        borderRadius="full"
        w={fullWidth ? "100%" : "auto"}
        boxShadow="0 10px 30px -8px rgba(26, 82, 118, 0.55)"
        transition="all 0.2s ease"
        _hover={{
          bg: " #2980B9",
          transform: "translateY(-3px) scale(1.02)",
          boxShadow: "0 16px 36px -8px rgba(26, 82, 118, 0.7)",
        }}
        _active={{ transform: "translateY(0) scale(0.99)" }}
      >
        {children}
      </Button>
    </a>
  );
}

export default EnrollButton;
