import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./logo";
import Link from "next/link";
import Socials from "./socials";
import Container from "./ui/container";
import { routes } from "@/routes";

function Footer() {
  return (
    <Box as="footer" mt={40} pb={20}>
      <Container>
        <Box as="hr" borderBlock="1px solid #b9b8b8" mb={8} />
        <Flex justify="space-between">
          <Box>
            <Box display={["none", null, null, "block"]} mb={16}>
              <Logo />
            </Box>

            <Socials />
          </Box>

          <Flex
            display={["none", null, null, "flex"]}
            direction="column"
            align="flex-end"
            gap={7}
          >
            {routes.map((route, i) => (
              <Link key={i} href={route.path}>
                <Text as="span">{route.name}</Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
