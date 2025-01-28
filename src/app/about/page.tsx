import InfoCard from "@/components/info-card";
import Container from "@/components/ui/container";
import ListItem from "@/components/ui/list-item";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder.png";
import FileHistoryIcon from "@/components/icons/file-history";
import GlobeIcon from "@/components/icons/globe";
import PresentationIcon from "@/components/icons/presentation";
import QuestionaireIcon from "@/components/icons/questionnaire";

const tutorTrainingProgram = [
  {
    title: "Train Tutors Adeptly",
    points: [
      "Offer comprehensive training programs tailored to equip tutors with the skills they need to excel in virtual classrooms.",
      "Guide candidates in earning globally recognized certifications such as TEFL, TESOL, and CELTA.",
    ],
  },
  {
    title: "Enhance Teaching Excellence",
    points: [
      "Provide personalized coaching to develop engaging teaching styles and effective lesson plans.",
      "Deliver hands-on training with the latest online teaching tools and platforms.",
    ],
  },
  {
    title: "Facilitate Job Placement",
    points: [
      "Connect tutors with international opportunities through our curated list of hiring schools and direct referrals.",
      "Ensure a seamless transition into the online teaching profession with resume assistance and mock interviews.",
    ],
  },
  {
    title: "Support Career Growth",
    points: [
      "Offer continuous professional development resources to help tutors stay ahead in their careers.",
      "Build a vibrant community of educators for collaboration and shared learning.",
    ],
  },
];

function About() {
  return (
    <>
      <Box as="section" pb={[10, null, null, 20]} fontSize="lg">
        <Container>
          <SimpleGrid columns={[1, null, null, 2]} gap={8} mb={40}>
            <Box pos="relative" aspectRatio="portrait">
              <Image src={placeholderImage} alt="" fill />
            </Box>

            <Box>
              <Heading
                as="h1"
                fontSize={["2xl", null, null, "5xl"]}
                mb={3}
                lineHeight={1.5}
              >
                What We Do
              </Heading>

              <Heading
                as="h2"
                fontSize={["xl", null, null, "3xl"]}
                mb={10}
                lineHeight={1.5}
              >
                At Prouder Tutors, we:
              </Heading>

              {tutorTrainingProgram.map((item, i) => (
                <Box key={i} mb={4}>
                  <Flex mb={2}>
                    <Text w="25px">{i + 1}.</Text>
                    <Text as="strong" w="calc(100% - 25px)">
                      {item.title}
                    </Text>
                  </Flex>
                  {item.points.map((point, j) => (
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
                      <Text w="calc(100% - 25px)">{point}</Text>
                    </Flex>
                  ))}
                </Box>
              ))}
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={[1, null, null, 2]}
            gap={8}
            alignItems="center"
            mb={40}
          >
            <Box>
              <Heading
                fontSize={["2xl", null, null, "5xl"]}
                mb={3}
                lineHeight={1.5}
              >
                Our Mission
              </Heading>
              <Text fontSize={["md", null, null, "xl"]} mb={5}>
                To inspire, train, and connect aspiring online English tutors
                with life-changing opportunities worldwide, fostering excellence
                in online education.
              </Text>
            </Box>

            <Box pos="relative" aspectRatio="landscape">
              <Image src={placeholderImage} alt="" fill />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={[1, null, null, 2]}
            gap={8}
            alignItems="center"
            mb={40}
          >
            <Box pos="relative" aspectRatio="landscape">
              <Image src={placeholderImage} alt="" fill />
            </Box>

            <Box>
              <Heading
                fontSize={["2xl", null, null, "5xl"]}
                mb={3}
                lineHeight={1.5}
              >
                Our Vision
              </Heading>
              <Text fontSize={["md", null, null, "xl"]} mb={5}>
                To become the leading global hub for online English tutor
                training and placement, empowering educators to create impactful
                and inclusive learning experiences that transcend borders.
              </Text>
            </Box>
          </SimpleGrid>

          <Heading
            fontSize={["2xl", null, null, "5xl"]}
            textAlign="center"
            mb={3}
            lineHeight={1.5}
          >
            Why Choose Us?
          </Heading>

          <SimpleGrid
            columns={[1, null, null, 2]}
            textAlign="center"
            mb={20}
            gap={8}
          >
            <InfoCard
              title="Holistic Training"
              details={[
                "We focus not just on technical skills but also on soft skills, cultural sensitivity, and classroom management to make you a well-rounded educator.",
              ]}
              icon={<PresentationIcon w="80px" color="skyblue" />}
            />
            <InfoCard
              title="Global Reach"
              details={[
                "Our international network ensures that you’ll find opportunities to teach and connect with students across the world.",
              ]}
              icon={<GlobeIcon w="80px" color="skyblue" />}
            />
            <InfoCard
              title="End-to-End Support"
              details={[
                "From training to placement, we’re with you every step of the way, ensuring your success as a tutor.",
              ]}
              icon={<QuestionaireIcon w="80px" color="skyblue" />}
            />
            <InfoCard
              title="Proven Track Record"
              details={[
                "Our alumni have gone on to secure positions at top online schools, making a difference in the lives of their students.",
              ]}
              icon={<FileHistoryIcon w="80px" color="skyblue" />}
            />
          </SimpleGrid>

          {/* // TODO: wrap this in a colourful background */}
          <Heading
            as="h2"
            fontSize={["xl", null, null, "3xl"]}
            maxW={["100%", null, null, "50%"]}
            mx="auto"
            mb={40}
            lineHeight={1.5}
          >
            At Prouda Tutors, we don’t just train teachers; we build careers and
            transform lives. Join us today, and let’s shape the future of online
            education together!
          </Heading>

          <Heading
            fontSize={["2xl", null, null, "5xl"]}
            textAlign="center"
            mb={10}
            lineHeight={1.5}
          >
            Meet Our Founder
          </Heading>

          <Flex justify="center" mb={6}>
            <Box w="200px" h="200px" pos="relative">
              <Image
                src={placeholderImage}
                alt="Chimy Praise"
                fill
                className="rounded"
                style={{ border: "2px solid #F7DC6F" }}
              />
            </Box>
          </Flex>
          <Heading as="h3" textAlign="center" mb={5}>
            Hi there, my name is Chimy Praise.
          </Heading>

          <Text fontSize={["md", null, null, "xl"]} mb={5} textAlign="center">
            Here are a few things about me:
          </Text>

          <Box as="ul" textAlign="center" mb={10}>
            <ListItem>
              I hold a degree in <strong>Mass Communication</strong>.
            </ListItem>
            <ListItem>
              After being let go from my 9-5 job, I started tutoring online just
              two weeks later.
            </ListItem>
            <ListItem>
              Since then, I’ve had the privilege of tutoring hundreds of
              students and training aspiring tutors who have successfully begun
              their own teaching journeys.
            </ListItem>
            <ListItem>
              Outside of tutoring, I have a passion for business and love
              listening to music.
            </ListItem>
          </Box>

          <Heading as="h3" textAlign="center" mb={5}>
            I officially welcome you to Prouda Tutors. We are Prouda for a
            reason!
          </Heading>
        </Container>
      </Box>
    </>
  );
}

export default About;
