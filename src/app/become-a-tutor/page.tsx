import Container from "@/components/ui/container";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const trainingProgramDetails = [
  {
    title: "Comprehensive Training Program",
    details: [
      "Gain a strong foundation in English language teaching with practical lessons.",
      "Receive guidance on creating engaging and effective lesson plans tailored to various student needs.",
    ],
  },
  {
    title: "Certification and CV Preparation",
    details: [
      "Assistance in obtaining internationally recognized teaching certifications like TEFL, TESOL, or CELTA.",
      "Support with CV and application processes.",
    ],
  },
  {
    title: "Tech Skills Mastery",
    details: [
      "Hands-on training with online teaching platforms.",
      "Learn to use interactive tools such as shared documents, presentation software, and classroom management systems.",
    ],
  },
  {
    title: "Target Audience Focus",
    details: [
      "Specialized training to teach children, teens, adults, or business professionals.",
      "Understand frameworks like CEFR to align with school expectations.",
    ],
  },
  {
    title: "Personalized Coaching",
    details: [
      "One-on-one sessions to refine your teaching style and adapt to different cultural and linguistic backgrounds.",
      "Enhance soft skills like communication, empathy, and time management.",
    ],
  },
  {
    title: "Workspace Setup Guidance",
    details: [
      "Recommendations for affordable and high-quality equipment like headsets, webcams, and internet packages.",
      "Tips on creating a professional and welcoming teaching environment.",
    ],
  },
  {
    title: "Mock Interviews and Feedback",
    details: [
      "Practice sessions to build confidence and polish your presentation for school applications.",
      "Constructive feedback to refine your approach and make a lasting impression.",
    ],
  },
  {
    title: "Exclusive Job Assistance",
    details: [
      "After completing your training, receive a curated list of schools actively hiring online English tutors.",
      "Direct referrals to schools to fast-track your job placement.",
    ],
  },
  {
    title: "Ongoing Support",
    details: [
      "Access to a community of experienced tutors for advice and collaboration.",
      "Continued resources and updates on industry trends to stay ahead.",
    ],
  },
];

function BecomeATutor() {
  return (
    <>
      <Box as="section" pb={[10, null, null, 20]}>
        <Container textAlign="center">
          <Heading
            as="h1"
            fontSize={["2xl", null, null, "5xl"]}
            maxW={["100%", null, null, "70%"]}
            mx="auto"
            mb={3}
            lineHeight={1.5}
          >
            Become an Online Tutor
          </Heading>

          <Heading
            as="h2"
            fontSize={["xl", null, null, "3xl"]}
            maxW={["100%", null, null, "50%"]}
            mx="auto"
            mb={10}
            lineHeight={1.5}
          >
            How Prouda Tutors Helps You Become the Most Sought-After English
            Tutor
          </Heading>

          <Container
            textAlign="center"
            maxW="600px"
            p={0}
            fontSize={["md", null, null, "xl"]}
          >
            {trainingProgramDetails.map((item, i) => (
              <Box key={i} mb={8}>
                <Flex mb={2}>
                  <Text w="25px">{i + 1}.</Text>
                  <Text as="strong" w="calc(100% - 25px)">
                    {item.title}
                  </Text>
                </Flex>
                {item.details.map((detail, j) => (
                  <Flex key={j} align="flex-start" mb={2}>
                    <Box
                      w="5px"
                      h="5px"
                      ml="7px"
                      mt={2}
                      mr={5}
                      bg="#000000"
                      className="rounded"
                    />
                    <Text w="calc(100% - 25px)">{detail}</Text>
                  </Flex>
                ))}
              </Box>
            ))}
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default BecomeATutor;
