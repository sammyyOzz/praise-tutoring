import Container from "@/components/ui/container";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder.webp";

export default function Home() {
  return (
    <Box as="section" pb={[10, null, null, 40]}>
      <Container textAlign="center">
        <Flex justify="center">
          <Box w="120px" h="120px" pos="relative">
            <Image src={placeholderImage} alt="Chimy Praise" fill className="rounded" />
          </Box>
        </Flex>

        <Heading as="h1" fontSize={["2xl", null, null, "4xl"]} maxW={["100%", null, null, "50%"]} mx="auto" mb={3} lineHeight={1.5}>
          Kickstart, Grow, and Thrive in Your Tutoring Business! <br /> No Experience Needed!
        </Heading>

        {/* use different color */}
        <Heading as="h2" fontSize={["xl", null, null, "3xl"]} maxW={["100%", null, null, "50%"]} mx="auto" mb={16} lineHeight={1.5}>
          Earn Weekly in Dollars!
        </Heading>

        <Text fontSize={["md", null, null, "xl"]}>
          Hi, I’m Chimy Praise! 🎉 I help aspiring tutors like YOU land tutoring gigs, grow your skills, and scale your career to new heights. <br />
          I share the exact strategies that got me international remote teaching jobs with companies as well as my own private students and a perfect interview streak (okay, almost perfect—back when I was figuring it all out 😉). <br />
          I lost my 9-to-5 job where I was earning 150k naira per month ($97.7/month) to an online teaching job paying over a million naira a month—let’s make that your story too! 🚀
        </Text>
      </Container>
    </Box>
  );
}
