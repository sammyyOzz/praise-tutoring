import { Box, Text } from "@chakra-ui/react";

interface PlaceholderBlockProps {
  label: string;
  type?: "image" | "video";
  aspectRatio?: number | string;
  minH?: string;
  [key: string]: unknown;
}

function PlaceholderBlock({
  label,
  type = "image",
  aspectRatio,
  minH,
  ...props
}: PlaceholderBlockProps) {
  return (
    <Box
      pos="relative"
      aspectRatio={aspectRatio}
      minH={minH}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
      border="2px dashed #2980B9"
      borderRadius={14}
      bg="rgba(41, 128, 185, 0.07)"
      textAlign="center"
      p={6}
      {...props}
    >
      <Box
        w="52px"
        h="52px"
        borderRadius="50%"
        bg=" #1A5276"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        {type === "video" ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5Z" />
          </svg>
        )}
      </Box>
      <Text fontWeight="bold" fontSize="sm" color="#1A5276" maxW="85%" lineHeight={1.4}>
        {label}
      </Text>
      <Text
        fontSize="xs"
        color="#2980B9"
        fontWeight="500"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        Placeholder — add before launch
      </Text>
    </Box>
  );
}

export default PlaceholderBlock;
