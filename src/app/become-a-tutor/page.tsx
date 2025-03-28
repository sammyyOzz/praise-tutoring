import Footer from "@/components/footer";
import FeedbackIcon from "@/components/icons/feedback";
import FocusIcon from "@/components/icons/focus";
import PresentationIcon from "@/components/icons/presentation";
import QuestionaireIcon from "@/components/icons/questionnaire";
import UserSettingsIcon from "@/components/icons/user-settings";
import InfoCard from "@/components/info-card";
import Navbar from "@/components/navbar";
import Container from "@/components/ui/container";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const trainingProgramDetails = [
  {
    title: "Comprehensive Training Program",
    details: [
      "Gain a strong foundation in English language teaching with practical lessons.",
      "Receive guidance on creating engaging and effective lesson plans tailored to various student needs.",
    ],
    icon: <PresentationIcon w="80px" color=" #000000" />,
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
    icon: <FocusIcon w="80px" color=" #000000" />,
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
    icon: <UserSettingsIcon w="80px" color=" #000000" />,
  },
  {
    title: "Mock Interviews and Feedback",
    details: [
      "Practice sessions to build confidence and polish your presentation for school applications.",
      "Constructive feedback to refine your approach and make a lasting impression.",
    ],
    icon: <FeedbackIcon w="80px" color=" #000000" />,
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
    icon: <QuestionaireIcon w="80px" color=" #000000" />,
  },
];

function BecomeATutor() {
  return (
    <>
      <Box as="section" pb={[20, null, null, 20]}>
        <Navbar />
        <Container textAlign="center" pt={20}>
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
            // maxW="600px"
            // border="1px solid red"
            p={0}
            fontSize={["md", null, null, "xl"]}
          >
            <SimpleGrid
              columns={[1, null, 2, null, 3]}
              gap={8}
              p={16}
              // bg=" #1A5276"
              bg=" #F7DC6F"
              // color=" #ffffff"
              borderRadius={5}
            >
              {trainingProgramDetails.map((item, i) => (
                <InfoCard
                  key={i}
                  title={item.title}
                  details={item.details}
                  icon={item?.icon}
                />
              ))}
            </SimpleGrid>
            {/* {trainingProgramDetails.map((item, i) => (
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
            ))} */}
          </Container>
        </Container>
      </Box>

      <Footer bg=" #F7DC6F" mt={0} />
    </>
  );
}

export default BecomeATutor;
