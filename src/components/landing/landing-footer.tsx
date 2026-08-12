import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "@/components/logo";
import Socials from "@/components/socials";
import Container from "@/components/ui/container";

function LandingFooter() {
  return (
    <Box as="footer" bg=" #1A5276" color="#ffffff" py={12} mt={20}>
      <Container>
        <Flex
          direction={["column", null, "row"]}
          justify="space-between"
          align="center"
          gap={6}
        >
          <Box textAlign={["center", null, "left"]}>
            <Logo />
            <Text mt={3} fontSize="sm" opacity={0.85}>
              Prouda Tutors. Proud Africans, earning globally.
            </Text>
          </Box>
          <Socials color="#ffffff" />
        </Flex>
        <Text mt={10} fontSize="xs" opacity={0.7} textAlign="center">
          © {new Date().getFullYear()} Prouda Tutors. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}

export default LandingFooter;
