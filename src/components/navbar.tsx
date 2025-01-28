"use client";

import { Box, Flex, HStack } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import Sidebar from "./sidebar";
import Container from "./ui/container";
import { routes } from "@/routes";

function Navbar() {
  const router = useRouter();

  return (
    <Container>
      <Flex justify="space-between" align="center" py={7}>
        <Logo />

        <HStack display={["none", null, null, "flex"]}>
          {routes.map((route, i) => (
            <Button
              key={i}
              w="130px"
              fontWeight="bold"
              variant="solid"
              onClick={() => router.push(route.path)}
            >
              {route.name}
            </Button>
          ))}
        </HStack>

        <Box display={["block", null, null, "none"]}>
          <Sidebar />
        </Box>
      </Flex>
    </Container>
  );
}

export default Navbar;
