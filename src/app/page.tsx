import Container from "@/components/ui/container";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ListItem from "@/components/ui/list-item";
import ImageSlider from "@/components/image-slider";
import Navbar from "@/components/navbar";
import feelingStuckImage from "@/assets/images/feeling-stuck.jpeg"
import TestimonialCard from "@/components/testimonial-card";
import testimonialImage1 from "@/assets/images/testimonial-1.jpeg"
import testimonialImage2 from "@/assets/images/testimonial-2.jpeg"
import testimonialImage3 from "@/assets/images/testimonial-3.jpeg"
import testimonialImage4 from "@/assets/images/testimonial-4.jpeg"
import testimonialImage5 from "@/assets/images/testimonial-5.jpeg"
import testimonialImage6 from "@/assets/images/testimonial-6.jpeg"
import testimonialImage7 from "@/assets/images/testimonial-7.jpeg"
import testimonialImage8 from "@/assets/images/testimonial-8.jpeg"
import Footer from "@/components/footer";

const whatYouWillLearnList = [
  "Introduction to Online tutoring.",
  "Skills You Need to Succeed as an Online Tutor",
  "How to Secure Your First Tutoring Job (My Blueprints).",
];

// #F7DC6F LIGHT YELLOW
//  #D4AC0D DARK YELLOW
//  #1A5276 DARK BLUE
//  #2980B9 MEDIUM BLUE
//  #85C1E9 LIGHT BLUE

const testimonials = [
  { image: testimonialImage1, name: "Teacher Hannah", description: `I highly recommend Chimy for her amazing help and support. She assisted me in finding my online ESL teaching job and connected me with a great ESL school.
Chimy was always available to answer my questions, no matter the time.

Once I had secured the job my life has changed, and I couldn't have done it without her.
I strongly recommend Chimy to anyone needing guidance and support with  ESL teaching.` },
  { image: testimonialImage2, name: "Teacher Faith", description: `The training was so easy and fun as well. The most interesting part was getting my first job as an ESL Tutor in less than a week after going through the training. It was really worth it.` },
  { image: testimonialImage3, name: "Teacher Ehis", description: `Receiving ESL training from Teacher Chimy 
 gave me the game-changing experience on my journey to becoming a successful ESL teacher. Her exceptional ability to break down complex concepts and encouragement gave me the confidence and skills I needed to excel. 
I also understood the importance of personal effort. I dedicated time to refine my skills and with this, I secured an ESL teaching job.` },
  { image: testimonialImage4, name: "Teacher Zubbi", description: `In 2023, Chimy introduced me to ESL teaching, and it completely transformed my life. With her guidance, I secured my first ESL job and discovered both the joy of teaching and the consistent demand for ESL instruction.` },
  { image: testimonialImage5, name: "Teacher Jay", description: `I wish to thank Chimy for always answering my calls and giving solutions to my career need. I’m in Happy English because of Chimy. God bless you abundantly with every need you desire. I’m so glad I met you.` },
  { image: testimonialImage6, name: "Teacher Phey", description: `Hi, Chimy! I just want to thank you for the training and mentorship you provided me. The teaching tips you also availed me helped me land a good teaching job, and it’s been a smooth ride so far.` },
  { image: testimonialImage7, name: "Teacher Ibi", description: `The outcome of Chimy’s mentorship has been nothing short of remarkable. With her guidance, I landed my first job as an online teacher for Learners Worldwide.` },
  { image: testimonialImage8, name: "Teacher Lola", description: "", video: "https://youtube.com/shorts/p1tnx-kkK4c?feature=share" },
]

export default function Home() {
  return (
    <>
      <Box as="section" pb={[10, null, null, 20]} bg=" #F7DC6F" mb={20}>
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

      <Box as="section" textAlign="center" pb={20}>
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
              <Box pos="relative" aspectRatio="1">
                <Image src={feelingStuckImage} alt="" fill />
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
        </Container>
      </Box>

      <Box as="section" bg=" #F7DC6F" py={20}>
        <Container>
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
          <ImageSlider>
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} image={item.image} name={item.name} description={item.description} video={item?.video} />
            ))}
          </ImageSlider>
        </Box>
        </Container>
      </Box>

      <Box as="section" pt={40} textAlign="center">
        <Container>
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
        I send a weekly newsletter with tips on improving as a teacher, along
        with helpful videos, delivered straight to your email.
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

      <Footer />
    </>
  );
}
