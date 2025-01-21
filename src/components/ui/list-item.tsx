import { Box } from "@chakra-ui/react";
import blueTick from "@/assets/icons/blue-tick.svg";

interface ListItemProps {
  children: React.ReactNode;

}

function ListItem({ children, ...props }: ListItemProps) {
  return (
    <Box
      as="li"
      _before={{
        content: `""`,
        display: "inline-block",
        width: "22px",
        height: "22px",
        bgImage: `url(${blueTick.src})`,
        bgSize: "contain",
        mr: 2,
        mb: -0.5
      }}
      fontSize={["md", null, null, "xl"]}
      {...props}
    >
      {children}
    </Box>
  );
}

export default ListItem;
