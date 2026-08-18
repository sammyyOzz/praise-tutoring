import { Box } from "@chakra-ui/react";
import blueTick from "@/assets/icons/blue-tick.svg";

interface ListItemProps {
  children: React.ReactNode;
  bulletSize?: string;
  [anyProp: string]: unknown;
}

function ListItem({ children, bulletSize = "14px", ...props }: ListItemProps) {
  return (
    <Box
      as="li"
      _before={{
        content: `""`,
        display: "inline-block",
        width: bulletSize,
        height: bulletSize,
        bgImage: `url(${blueTick.src})`,
        bgSize: "contain",
        mr: 2,
        mb: 0.5
      }}
      fontSize={["md", null, null, "xl"]}
      {...props}
    >
      {children}
    </Box>
  );
}

export default ListItem;
