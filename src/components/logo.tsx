import { Flex, HStack } from "@chakra-ui/react";
import proudaLogo from "@/assets/icons/prouda-no-bg.png";
import Image from "next/image";
import Link from "next/link";

function Logo({ ...props }) {
  return (
    <Link href="/">
      <HStack {...props}>
      <Flex
        justify="center"
        align="center"
        pos="relative"
        w="70px"
        h="70px"
        css={{
          "& > img": {
            transform: "scale(2.4)",
          },
        }}
      >
        <Image src={proudaLogo} alt="logo" fill />
      </Flex>
    </HStack>
    </Link>
  );
}

export default Logo;
