import { Flex } from "@chakra-ui/react";
import Logo from "@/components/logo";
import Container from "@/components/ui/container";
import EnrollButton from "./enroll-button";

function LandingNavbar() {
  return (
    <Flex
      as="header"
      pos="sticky"
      top={0}
      zIndex={40}
      bg="rgba(255, 255, 255, 0.85)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(26, 82, 118, 0.1)"
    >
      <Container w="100%" px={["16px", null, "30px"]}>
        <Flex justify="space-between" align="center" py={3}>
          <Logo />
          <EnrollButton size="md">Enrol Now</EnrollButton>
        </Flex>
      </Container>
    </Flex>
  );
}

export default LandingNavbar;
