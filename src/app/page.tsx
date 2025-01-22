import Container from "@/components/ui/container";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ListItem from "@/components/ui/list-item";
import ImageSlider from "@/components/image-slider";

const whatYouWillLearnList = [
  "Introduction to Online tutoring.",
  "Skills You Need to Succeed as an Online Tutor",
  "How to Secure Your First Tutoring Job (My Blueprints).",
];

export default function Home() {
  return (
    <>
      <Box as="section" pb={[10, null, null, 20]}>
        <Container textAlign="center">
          <Flex justify="center">
            <Box w="120px" h="120px" pos="relative">
              <Image
                src={placeholderImage}
                alt="Chimy Praise"
                fill
                className="rounded"
                style={{ border: "2px solid #F7DC6F"}}
              />
            </Box>
          </Flex>

          <Heading
            as="h1"
            fontSize={["2xl", null, null, "5xl"]}
            maxW={["100%", null, null, "70%"]}
            mx="auto"
            mb={3}
            lineHeight={1.5}
          >
            Kickstart, Grow, and Thrive in Your Tutoring Business! <br /> No
            Experience Needed!
          </Heading>

          {/* use different color */}
          <Heading
            as="h2"
            fontSize={["xl", null, null, "3xl"]}
            maxW={["100%", null, null, "50%"]}
            mx="auto"
            mb={10}
            lineHeight={1.5}
          >
            Earn Weekly in Dollars!
          </Heading>

          <Text fontSize={["md", null, null, "xl"]} mb={5}>
            Hi, I’m Chimy Praise! 🎉 I help aspiring tutors like YOU land
            tutoring gigs, grow your skills, and scale your career to new
            heights. <br />
            I share the exact strategies that got me international remote
            teaching jobs with companies as well as my own private students and
            a perfect interview streak (okay, almost perfect—back when I was
            figuring it all out 😉). <br />I lost my 9-to-5 job where I was
            earning 150k naira per month ($97.7/month) to an online teaching job
            paying over a million naira a month—let’s make that your story too!
            🚀
          </Text>

          <Link href={"#"}>
            <Button
              as={Box}
              variant="solid"
              color="#ffffff"
              fontSize="lg"
              fontWeight="bold"
              px={12}
              py={6}
            >
              Begin here
            </Button>
          </Link>
        </Container>
      </Box>

      <Box as="section" textAlign="center">
        <Container>
          <Heading
            as="h2"
            fontSize={["2xl", null, null, "4xl"]}
            maxW={["100%", null, null, "50%"]}
            mx="auto"
            mb={10}
            lineHeight={1.5}
          >
            Become a Tutor
          </Heading>

          <Text fontSize={["md", null, null, "xl"]} mb={7}>
            Are you thinking about starting online tutoring but have no teaching
            experience or qualifications? Don’t worry, I’ve been in your shoes!
            Join my free masterclass, where I’ll guide you step-by-step on how
            to secure jobs with international companies and attract private
            students. <br />
            Let’s get started on your tutoring journey together!
          </Text>

          <Heading as="h3" mb={5}>
            What you will learn:
          </Heading>
          <Flex justify="center" mb={16}>
            <Box as="ul" textAlign="left" listStylePosition="outside">
              {whatYouWillLearnList.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </Box>
          </Flex>

          <Flex direction={["column", null, null, "row"]} gap={10} mb={16}>
            <Box w={["100%", null, null, "50%"]}>
              <Box pos="relative" aspectRatio="landscape">
                <Image src={placeholderImage} alt="" fill />
              </Box>
            </Box>

            <Box w={["100%", null, null, "50%"]} textAlign="left">
              <Heading
                as="h2"
                fontSize={["2xl", null, null, "4xl"]}
                textAlign="left"
                mx="auto"
                mb={10}
                lineHeight={1}
              >
                Dear Aspiring Tutors, are you feeling stuck or frustrated?
              </Heading>

              <Text fontSize={["md", null, null, "xl"]} mb={7}>
                Are you stuck in a job you dislike or a 9-to-5 grind and looking
                to transition to remote work for better pay? This could be the
                perfect opportunity for you!
                <Box as="br" mb={3} />
                Here’s what being an aspiring online tutor looks like:
              </Text>

              <Box as="ul" textAlign="left">
                <ListItem>
                  <strong>Earn in dollars weekly</strong> while working
                  comfortably from home.
                </ListItem>
                <ListItem>
                  <strong>No prior teaching experience required</strong> (I
                  started with none!).
                </ListItem>
                <ListItem>
                  <strong>Set your own schedule</strong> —no office politics, no
                  boss hovering over you.
                </ListItem>
                <ListItem>
                  <strong>More time for family and friends</strong> while still
                  growing your income.
                </ListItem>
              </Box>
            </Box>
          </Flex>

          <Heading
            as="h2"
            fontSize={["2xl", null, null, "4xl"]}
            maxW={["100%", null, null, "50%"]}
            mx="auto"
            mb={10}
            lineHeight={1.5}
          >
            This is your chance to take control of your career and lifestyle!{" "}
            <br />
            Explore success stories from tutors we&apos;ve trained.
          </Heading>

          <Box>
            <ImageSlider images={Array(5).fill(placeholderImage)} />
          </Box>
          <Box>
            <ImageSlider images={Array(5).fill(placeholderImage)} rtl />
          </Box>

          <Heading
            as="h2"
            fontSize={["2xl", null, null, "4xl"]}
            maxW={["100%", null, null, "50%"]}
            mx="auto"
            mb={10}
            lineHeight={1.5}
          >
            If you&apos;ve made it to this page and find yourself intrigued,
            here&apos;s a special invitation for you...
          </Heading>

          <Heading as="h3" mb={5}>
            For Aspiring Tutors
          </Heading>

          <Link href={"#"}>
            <Button
              as={Box}
              variant="solid"
              color="#ffffff"
              fontSize="lg"
              fontWeight="bold"
              px={12}
              py={6}
            >
              Sign up for <strong>FREE</strong>
            </Button>
          </Link>

          <Heading as="h3" mt={20} mb={5}>
            Receive weekly expert tips to help you become a better tutor.
          </Heading>
          <Text fontSize={["md", null, null, "xl"]} mb={7}>
            I send a weekly newsletter with tips on improving as a teacher,
            along with helpful videos, delivered straight to your email.
          </Text>

          <Link href={"#"}>
            <Button
              as={Box}
              variant="solid"
              color="#ffffff"
              fontSize="lg"
              fontWeight="bold"
              px={12}
              py={6}
            >
              Get <strong>FREE</strong> Newsletters
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
}
