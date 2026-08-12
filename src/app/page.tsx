import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Container from "@/components/ui/container";
import ListItem from "@/components/ui/list-item";
import LandingNavbar from "@/components/landing/landing-navbar";
import LandingFooter from "@/components/landing/landing-footer";
import EnrollButton from "@/components/landing/enroll-button";
import MediaBlock from "@/components/landing/media-block";
import Reveal from "@/components/landing/reveal";
import FaqAccordion from "@/components/landing/faq-accordion";
import StickyCtaBar from "@/components/landing/sticky-cta-bar";
import founderImage from "@/assets/images/chimy-professional-headshot.jpeg";
import blueTick from "@/assets/icons/blue-tick.svg";

const heroChecklist = [
  "Understand exactly how the global online teaching industry works, and where you fit into it",
  "Build the professional package international recruiters actually respond to: your CV, your cover letter, your introduction video",
  "Learn to teach real online lessons with confidence, even if you have never taught before",
  "Master the demo lessons and interviews that decide who gets hired",
  "Get the list of companies hiring, and the strategy for applying to them in the right order",
];

const founderHighlights = [
  "Some of them were classroom teachers looking to go global.",
  "Many of them had never taught a single lesson in their lives.",
  "What they had in common was not talent or luck or connections abroad.",
  "What they had in common is that somebody finally showed them the right order to do things.",
];

const hiringProblems = [
  "Nobody told them which countries and companies actually hire African teachers, so they wasted months applying to doors that were never open.",
  "Nobody told them what recruiters look for in the first thirty seconds, so their CV, written for a local job market, was filtered out before a human ever read it.",
  "Nobody told them that most serious platforms expect an introduction video, or that there is a right way and a wrong way to record one.",
  "Nobody told them that the demo lesson is scored against specific criteria, so they walked into it blind.",
  "Nobody told them what questions come up in interviews, so they answered like beginners.",
];

const beforeAfterList = [
  {
    before:
      "The online teaching world is a fog. Everyone says something different. You do not know what is true.",
    after:
      "You can see the whole industry clearly: the markets, the employers, the pay structures, and exactly where a beginner like you enters.",
  },
  {
    before:
      "Your CV is written for a Nigerian or Ghanaian employer, and international recruiters scroll past it.",
    after:
      "Your CV, cover letter and introduction video are built to international standards, using the same approach our hired tutors used.",
  },
  {
    before:
      "The idea of teaching a child who does not speak English, through a screen, sounds impossible.",
    after:
      "You have a lesson structure, teaching methods, and classroom tools that work even with a five year old who does not share a single word of your language.",
  },
  {
    before:
      "The words demo lesson and interview make your stomach tight, because you have no idea what they want from you.",
    after:
      "You know what recruiters score, what questions they ask, and how to prepare answers that sound like a professional, because you will be one.",
  },
  {
    before: "Applying means spraying applications everywhere and praying.",
    after:
      "You apply strategically: the right companies, in the right order, with the right materials, and you follow up like someone who expects a reply.",
  },
];

const modules = [
  {
    title: "The Global ESL Industry, Demystified",
    description:
      "This is the map. You will finally understand how this industry works: the different markets inside it, which countries hire online teachers, what the qualifications landscape really looks like, and honestly, where Africans are welcome and where the doors are narrower. No sugar coating in either direction. When you finish this section, you will stop asking, is this real, and start asking, which part of it is mine.",
  },
  {
    title: "Teaching Skills That Make You Hireable",
    description:
      "Anyone can talk at a screen. Teaching is different. You will learn lesson planning that follows a clear structure, teaching methodologies that actually work online, and how to run a classroom you cannot physically stand in. This is the section that turns you from someone applying for teaching jobs into someone who can teach, and recruiters can tell the difference within minutes.",
  },
  {
    title: "Teaching Young Learners",
    description:
      "Children are the largest market in online English teaching, and they are wonderful and chaotic in equal measure. You will learn how to hold a young child's attention through a screen, how to use energy, games and props, and how to teach a student who does not speak a word of your language. Once you can do this, you can teach almost anyone.",
  },
  {
    title: "Platforms & Tools",
    description:
      "You will get comfortable with the actual classroom platforms and online teaching tools employers use, plus the digital resources that make lessons come alive. And then we go one step further: how to plan lessons faster, create materials in minutes, and work like a modern teacher. Most applicants have no idea this shift is happening. You will walk in ahead of them.",
  },
  {
    title: "Your Professional Package",
    description:
      "Three things decide whether a recruiter ever speaks to you: your CV, your cover letter, and your introduction video. You will build all three properly, to international standard, with guidance at every step. This section alone is the difference between being seen and being skipped.",
  },
  {
    title: "Demo Lessons and Interviews",
    description:
      "The final doors. You will learn how demo lessons are structured and what is being scored, and you will prepare for interviews using the real kinds of questions international schools ask, with frameworks for answering them. You will walk into these rooms prepared, and preparation reads as confidence.",
  },
  {
    title: "Application Strategy and Your Career Roadmap",
    description:
      "Where to apply, how to apply, in what order, and how to keep going until the yes comes. Plus the longer view: how your first role becomes a career, and how teachers grow their income over time. You are not just learning to get a job. You are learning to build a career that answers to you.",
  },
];

const moduleAccents = [" #1A5276", " #2980B9", " #D4AC0D"];

const bonuses = [
  {
    title: "The Job Opportunities Database",
    description:
      "A curated database of international companies that hire online English teachers, with their requirements. This saves you weeks of research and months of applying to the wrong places. Honestly, some people would pay for this alone.",
  },
  {
    title: "CV and Cover Letter Templates",
    description:
      "Not advice about templates. Actual templates, built to international standard. You fill in your story. The structure is already right.",
  },
  {
    title: "The Introduction Video Guide",
    description:
      "Exactly how to record the video recruiters want to see: what to say, how long, how to set up your camera, and the mistakes that quietly disqualify people.",
  },
  {
    title: "The Demo Lesson Guide",
    description:
      "Your preparation companion for the moment that decides most hires. Structure, timing, and what the person watching is actually looking for.",
  },
  {
    title: "Lesson Materials, Worksheets and Games",
    description:
      "Over 100 ready to use ESL teaching materials. When you get hired, you will not be starting from an empty folder. Your classroom resources are already waiting.",
  },
  {
    title: "ESL Books",
    description:
      "More than 50 ESL books, free, yours to download and keep. Familiarise yourself with them, teach from them, grow with them.",
  },
  {
    title: "Community Access",
    description:
      "A private support community where your questions get answered, live sessions are announced, and you are surrounded by people walking the same road. Self paced does not mean alone. Nobody here gets left to figure it out by themselves.",
  },
  {
    title: "Live Intensive Training",
    description:
      "Two live intensive sessions of four hours each, with real demonstrations and live questions and answers. This is where the recorded lessons become real skills, with proper breaks, because intensive should not mean exhausting.",
    tag: "PLUS",
  },
];

const proofStats = [
  { value: "Hundreds", label: "African educators trained" },
  { value: "170+", label: "Placed in international teaching roles" },
  { value: "China · Vietnam · Japan +", label: "Countries our tutors now teach in" },
];

const proofMedia: { label: string; type: "image" | "video"; src: string }[] = [
  { label: "Testimonial video 1", type: "video", src: "/sect9/testimonial-video-1.mp4" },
  { label: "Offer letter screenshot", type: "image", src: "/sect9/offer-letter-screenshot-1.jpeg" },
  { label: "WhatsApp screenshot 1", type: "image", src: "/sect9/whatsapp-screenshot-1.jpeg" },
  { label: "Testimonial video 2", type: "video", src: "/sect9/testimonial-video-2.mp4" },
  { label: "WhatsApp screenshot 2", type: "image", src: "/sect9/whatsapp-screenshot-2.jpeg" },
  { label: "Testimonial video 3", type: "video", src: "/sect9/testimonial-video-3.mp4" },
];

const faqs = [
  {
    question: "I have never taught before. Is this really for me?",
    answer:
      "Yes, and you are in good company. Many of the people we have trained had zero teaching experience when they started: graduates, undergraduates, bankers, customer service staff, stay at home mums. The programme assumes you are starting from nothing and teaches you to teach. That is the whole point of it.",
  },
  {
    question: "I do not have a TEFL certificate. Do I need one before enrolling?",
    answer:
      "No. You do not need any certificate to start this course. Inside the training, we cover the qualifications landscape so you know exactly where you stand.",
  },
  {
    question: "I do not have an education degree. Am I wasting my time?",
    answer:
      "No. Here is the honest picture: some employers require a degree, often for regulatory reasons. Many others do not, and care far more about your teaching, your presentation, and your reliability. The course shows you clearly which doors need what, so you spend your energy on the doors that open for you.",
  },
  {
    question: "My English is not perfect, and I have an African accent. Will anyone hire me?",
    answer:
      "Listen carefully, because this fear stops more people than anything else. The goal is not to sound American or British. The goal is to be clearly understood. Clear, well paced, grammatically sound English. What hurts candidates is mumbling, rushing, poor enunciation of words and shaky grammar. Those are skills, and skills can be trained. We train them.",
  },
  {
    question: "I am not a confident person. I freeze in interviews.",
    answer:
      "Confidence is not a personality type you either have or lack. Confidence is what preparation feels like from the inside. When you know the lesson structure, the interview questions, the demo criteria and the tools, the fear loses most of its material. You will still feel nerves. You will also know exactly what you are doing. That combination is enough.",
  },
  {
    question: "I do not have a powerful laptop or perfect internet.",
    answer:
      "The course covers your setup honestly and affordably: what you actually need, what you do not, and how to handle the realities of power and internet on this continent, including how to present your setup to employers professionally. You need less than you think, and you need to present it better than most people do.",
  },
  {
    question: "I am very busy. How much time does this take?",
    answer:
      "The course is self paced. An hour a day moves most people through it comfortably within a few weeks. The two live intensive sessions are announced well ahead of time in the community. This was built for people with real lives, not for people with empty calendars.",
  },
  {
    question: "Is this live or recorded?",
    answer:
      "Both, and that is deliberate. The core training is recorded, so you learn at your pace and revisit anything forever. Then there are two live intensive sessions of four hours each, with demonstrations and live questions and answers, so you are not learning from videos alone.",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "Yes, on completion, after a compulsory timed quiz. We do it that way on purpose. A certificate you get just for paying means nothing to an employer. A certificate that confirms you actually learned means something, for you and for them.",
  },
  {
    question: "Why is it ₦20,000 instead of ₦35,000? What is the catch?",
    answer:
      "There is no catch. Short version: too many of you told us you would have to save up first, so for a limited period, we opened the door wider. Same full course. Nothing removed.",
  },
  {
    question: "How do I pay, and can I pay from outside Nigeria?",
    answer:
      "Payment is right here on this page. The moment payment confirms, you get instant access and your invitation to the community. Please check your email.",
  },
];

const finalOfferChecklist = [
  "The complete training programme: industry, teaching skills, young learners, platforms and tools, AI for teachers, your professional package, demos, interviews, and application strategy",
  "Two live intensive training sessions, four hours each, with demonstrations and live Q&A",
  "The Job Opportunities Database: international companies that hire, with requirements (nearly 80)",
  "CV and cover letter templates, international standard",
  "The Introduction Video Guide and the Demo Lesson Guide",
  "Over 100 lesson materials, worksheets and games",
  "Over 50 ESL books, free, yours forever",
  "Private community access: questions answered, sessions announced, nobody left behind",
  "Certificate of Completion, earned through a timed quiz",
];

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <Text
      display="inline-block"
      fontSize="xs"
      fontWeight="bold"
      letterSpacing="widest"
      textTransform="uppercase"
      color={light ? "#F7DC6F" : " #1A5276"}
      bg={light ? "rgba(255,255,255,0.12)" : "rgba(26, 82, 118, 0.08)"}
      px={4}
      py={2}
      borderRadius="full"
      mb={4}
    >
      {children}
    </Text>
  );
}

export default function Home() {
  return (
    <>
      <LandingNavbar />

      {/* SECTION 1: HERO */}
      <Box
        as="section"
        pos="relative"
        overflow="hidden"
        bgGradient="linear(to-b, #F7DC6F, #ffffff)"
        pb={[16, null, null, 24]}
      >
        <Box
          pos="absolute"
          top="-120px"
          right="-120px"
          w="360px"
          h="360px"
          borderRadius="50%"
          bg="rgba(41, 128, 185, 0.18)"
          filter="blur(10px)"
        />
        <Box
          pos="absolute"
          bottom="-100px"
          left="-100px"
          w="300px"
          h="300px"
          borderRadius="50%"
          bg="rgba(212, 172, 13, 0.18)"
          filter="blur(10px)"
        />

        <Container textAlign="center" pt={[12, null, 16]} pos="relative">
          <Eyebrow>Teach English Online &amp; Get Hired Globally</Eyebrow>

          <Heading
            as="h1"
            fontSize={["3xl", null, null, "5xl"]}
            maxW={["100%", null, null, "80%"]}
            mx="auto"
            mb={5}
            lineHeight={1.4}
            color=" #1A5276"
          >
            {`They Are Hiring African Teachers Right Now. The Only Question Is Whether You Will Be Ready.`}
          </Heading>

          <Text fontSize={["md", null, null, "xl"]} maxW={["100%", null, null, "70%"]} mx="auto" mb={10}>
            {`Teach English online to students in China, Vietnam, Japan and beyond. Earn in foreign currencies. Work from your bedroom. This programme shows you the entire path, from complete beginner to hired, in the right order.`}
          </Text>

          <Reveal>
            <Box
              bg="#ffffff"
              borderRadius={20}
              boxShadow="0 20px 50px -20px rgba(26, 82, 118, 0.35)"
              p={[6, null, 10]}
              maxW="750px"
              mx="auto"
              mb={10}
              textAlign="left"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4} color=" #1A5276">
                In this training, you will:
              </Text>
              <Box as="ul" listStylePosition="outside">
                {heroChecklist.map((item) => (
                  <ListItem key={item} mb={3}>
                    {item}
                  </ListItem>
                ))}
              </Box>
            </Box>
          </Reveal>

          <Flex direction="column" align="center" gap={2} mb={8}>
            <Flex align="baseline" gap={3}>
              <Text as="span" fontSize="xl" color="rgba(0,0,0,0.45)" textDecoration="line-through">
                ₦35,000
              </Text>
              <Text as="span" fontSize={["3xl", null, "4xl"]} fontWeight="bold" color=" #D4AC0D">
                ₦20,000
              </Text>
            </Flex>
            <Text fontSize="sm" color="rgba(0,0,0,0.6)">
              for a limited period
            </Text>
          </Flex>

          <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>

          <Box mt={14} maxW="280px" mx="auto">
            <MediaBlock
              src="/sect1/hero-testimonial-screenshot.jpeg"
              alt="Testimonial screenshot from a Prouda Tutors student"
              aspectRatio={9 / 16}
            />
          </Box>

          <Text mt={8} fontSize="sm" fontStyle="italic" color="rgba(0,0,0,0.55)">
            Prouda Tutors. Helping Africans build global online teaching careers.
          </Text>
        </Container>
      </Box>

      {/* SECTION 2: CREDIBILITY GAP */}
      <Box as="section" bg="#ffffff" py={[16, null, 24]}>
        <Container maxW="850px" textAlign="center">
          <Reveal>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} mb={8} lineHeight={1.4} color=" #1A5276">
              Can I be honest with you for a minute?
            </Heading>
          </Reveal>

          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} mb={6} lineHeight={1.8}>
              {`You have probably seen the videos. Someone sitting in their room in Lagos or Accra or Nairobi, laptop open, teaching a small child on the other side of the world. Then the caption says something about earning in dollars.`}
            </Text>
          </Reveal>

          <Reveal delay={0.1}>
            <Text fontSize={["md", null, "xl"]} mb={6}>
              And two things happened inside you at the same time.
            </Text>
          </Reveal>

          <Reveal delay={0.15}>
            <Box borderLeft="4px solid #2980B9" pl={6} py={2} mb={8} textAlign="left" maxW="500px" mx="auto">
              <Text fontSize={["lg", null, "2xl"]} fontStyle="italic" mb={3} color=" #1A5276">
                The first thing said, I could do that.
              </Text>
              <Text fontSize={["lg", null, "2xl"]} fontStyle="italic" color="rgba(0,0,0,0.6)">
                {`The second thing said, but that kind of thing does not happen for people like me.`}
              </Text>
            </Box>
          </Reveal>

          <Reveal delay={0.2}>
            <Text fontSize={["md", null, "xl"]} mb={8} lineHeight={1.8}>
              {`Teachers from this continent are logging into international classrooms every single morning. So if the opportunity is real, and people like you are already doing it, then the real question becomes uncomfortable but useful:`}
            </Text>
          </Reveal>

          <Reveal delay={0.25}>
            <Heading as="h3" fontSize={["xl", null, "3xl"]} mb={10} color=" #D4AC0D">
              What do they know that you do not?
            </Heading>
          </Reveal>

          <Box maxW="600px" mx="auto">
            <MediaBlock src="/sect2/credibility-testimonial-video.mp4" type="video" aspectRatio={16 / 9} />
          </Box>
        </Container>
      </Box>

      {/* SECTION 3: THE FOUNDER STORY */}
      <Box as="section" bg="rgba(247, 220, 111, 0.25)" py={[16, null, 24]}>
        <Container>
          <Reveal>
            <Flex justify="center" mb={3}>
              <Eyebrow>The Founder Story</Eyebrow>
            </Flex>
          </Reveal>

          <Box
            display="grid"
            gridTemplateColumns={["1fr", null, null, "3fr 2fr"]}
            gap={12}
            alignItems="start"
          >
            <Box>
              <Reveal>
                <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
                  {`My name is Praise Chimy Onaga, and I am the founder of Prouda Tutors.`}
                </Text>
              </Reveal>
              <Reveal delay={0.05}>
                <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
                  {`Prouda stands for Proud Africans. That name is not decoration. It is the entire mission in two words: Africans, earning globally, without leaving home, and without apologising for where they come from.`}
                </Text>
              </Reveal>
              <Reveal delay={0.1}>
                <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
                  {`I discovered international online teaching through a friend. At the time I was a Social Media Manager. Months later, I got fired and I had no choice than to focus on online teaching. I will be honest with you: nobody handed me a map. I figured this industry out the hard way. The confusing videos, the conflicting advice, the applications that went nowhere. I sat in interviews with international schools and learned, question by question, what they were actually looking for.`}
                </Text>
              </Reveal>
              <Reveal delay={0.15}>
                <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
                  {`I learned that they would ask about my internet before they asked about my passion, so I started sending my speed test results before they could even ask. I learned that a demo class is scored, not only watched. I learned the difference between applying and applying strategically.`}
                </Text>
              </Reveal>
              <Reveal delay={0.2}>
                <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
                  {`And then something happened that changed the direction of my whole life: I earned six successful interview outcomes across five countries and four continents, all within the same time frame. But the real turning point wasn't my own success. It was the first time I helped someone else get hired. Watching that happen did something to me. Because I realised the gap between the people who make it and the people who give up was never talent, or accent, or passport. It was information. Somebody either shows you how this industry works, or you wander in it until you quit.`}
                </Text>
              </Reveal>
              <Reveal delay={0.25}>
                <Text fontSize={["md", null, "xl"]} mb={8} lineHeight={1.8}>
                  {`Since then, Prouda Tutors has trained hundreds of African educators across Nigeria, Ghana, Kenya, South Africa, Benin and Cameroon, and over 170 of them have gone on to secure international online teaching opportunities, teaching students in multiple countries.`}
                </Text>
              </Reveal>

              <Reveal delay={0.3}>
                <Box as="ul" listStylePosition="outside" mb={6}>
                  {founderHighlights.map((item) => (
                    <ListItem key={item} mb={3}>
                      {item}
                    </ListItem>
                  ))}
                </Box>
              </Reveal>

              <Reveal delay={0.35}>
                <Text
                  fontSize={["lg", null, "2xl"]}
                  fontWeight="bold"
                  color=" #1A5276"
                  mb={10}
                  lineHeight={1.6}
                >
                  This course is that order, written down, recorded, and handed to you.
                </Text>
              </Reveal>

              <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>
            </Box>

            <Reveal delay={0.1}>
              <Box pos="sticky" top="100px">
                <Box
                  pos="relative"
                  aspectRatio={4 / 5}
                  borderRadius={20}
                  overflow="hidden"
                  boxShadow="0 20px 50px -20px rgba(26, 82, 118, 0.4)"
                  border="6px solid #ffffff"
                >
                  <Image src={founderImage} alt="Praise Chimy Onaga, founder of Prouda Tutors" fill style={{ objectPosition: "top" }} />
                </Box>
                <Text mt={4} textAlign="center" fontWeight="bold" color=" #1A5276">
                  Praise Chimy Onaga
                </Text>
                <Text textAlign="center" fontSize="sm" color="rgba(0,0,0,0.6)">
                  Founder, Prouda Tutors
                </Text>
              </Box>
            </Reveal>
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: THE REAL REASON PEOPLE DO NOT GET HIRED */}
      <Box as="section" bg="#ffffff" py={[16, null, 24]}>
        <Container maxW="900px">
          <Reveal>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} textAlign="center" mb={10} lineHeight={1.4} color=" #1A5276">
              The Real Reason People Do Not Get Hired
            </Heading>
          </Reveal>

          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
              Let me describe a pattern, and you tell me if it sounds familiar.
            </Text>
          </Reveal>
          <Reveal delay={0.1}>
            <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
              {`Someone decides to become an online teacher. They watch some YouTube videos. Maybe they buy a TEFL certificate because someone said they should. Then they start applying. Everywhere. Any company whose name they can find.`}
            </Text>
          </Reveal>
          <Reveal delay={0.15}>
            <Text fontSize={["md", null, "xl"]} mb={2} lineHeight={1.8}>
              Then they wait.
            </Text>
          </Reveal>
          <Reveal delay={0.18}>
            <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
              Nothing comes back.
            </Text>
          </Reveal>
          <Reveal delay={0.2}>
            <Text fontSize={["md", null, "xl"]} mb={8} lineHeight={1.8}>
              {`They apply to more places. Still nothing. Maybe one automatic rejection email that stings more than silence. And slowly they conclude the thing everyone concludes: this does not work for people like me.`}
            </Text>
          </Reveal>

          <Reveal delay={0.25}>
            <Box bg="rgba(26, 82, 118, 0.06)" borderRadius={16} p={[6, null, 8]} mb={10}>
              <Text fontSize={["md", null, "xl"]} mb={4}>
                Here is what I need you to understand, because it changes everything.
              </Text>
              <Text fontSize={["lg", null, "2xl"]} fontWeight="bold" color=" #1A5276" lineHeight={1.6}>
                {`Schools were not rejecting them because they could not teach. Schools were rejecting them because nobody ever showed them how international hiring actually works.`}
              </Text>
            </Box>
          </Reveal>

          <Box as="ul" listStyleType="none" mb={10}>
            {hiringProblems.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <Flex as="li" gap={4} align="flex-start" mb={5}>
                  <Flex
                    flexShrink={0}
                    w="28px"
                    h="28px"
                    borderRadius="50%"
                    border="2px solid #1A5276"
                    align="center"
                    justify="center"
                    fontSize="sm"
                    fontWeight="bold"
                    color=" #1A5276"
                  >
                    ×
                  </Flex>
                  <Text fontSize={["md", null, "lg"]} lineHeight={1.7}>
                    {item}
                  </Text>
                </Flex>
              </Reveal>
            ))}
          </Box>

          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8} fontWeight="bold" color=" #1A5276">
              {`They were not unqualified. They were uninformed. And in this industry, uninformed looks exactly like unqualified from the recruiter's side of the screen.`}
            </Text>
          </Reveal>
          <Reveal delay={0.1}>
            <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
              This is actually good news, and I want you to sit with it for a second.
            </Text>
          </Reveal>
          <Reveal delay={0.15}>
            <Text fontSize={["md", null, "xl"]} mb={5} lineHeight={1.8}>
              {`Because if the problem was your background, there would be nothing to do about it. But if the problem is information and preparation, then the problem has a solution. A very learnable one.`}
            </Text>
          </Reveal>
          <Reveal delay={0.2}>
            <Text fontSize={["md", null, "xl"]} mb={10} lineHeight={1.8}>
              That solution is this programme.
            </Text>
          </Reveal>

          <SimpleGrid columns={[1, null, 3]} gap={6} mb={10}>
            {[1, 2, 3].map((i) => (
              <MediaBlock
                key={i}
                src={`/sect4/reason-testimonial-${i}.jpeg`}
                alt={`Testimonial screenshot ${i}`}
                aspectRatio={9 / 16}
              />
            ))}
          </SimpleGrid>

          <Flex justify="center">
            <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>
          </Flex>
        </Container>
      </Box>

      {/* SECTION 5: WHAT CHANGES AFTER THIS COURSE */}
      <Box as="section" bg="rgba(133, 193, 233, 0.15)" py={[16, null, 24]}>
        <Container maxW="1100px">
          <Reveal>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} textAlign="center" mb={4} lineHeight={1.4} color=" #1A5276">
              What Changes After This Course
            </Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} textAlign="center" maxW="700px" mx="auto" mb={12}>
              Let me be specific about what will be different, because vague promises help nobody.
            </Text>
          </Reveal>

          <SimpleGrid columns={[1, null, null, 2]} gap={6} mb={12}>
            {beforeAfterList.map((item, i) => (
              <Reveal key={item.before} delay={(i % 2) * 0.08}>
                <Box borderRadius={16} overflow="hidden" bg="#ffffff" boxShadow="0 12px 30px -18px rgba(26, 82, 118, 0.4)" h="100%">
                  <Box p={5} borderBottom="1px solid rgba(26, 82, 118, 0.1)">
                    <Text fontSize="xs" fontWeight="bold" letterSpacing="wide" textTransform="uppercase" color="rgba(0,0,0,0.4)" mb={2}>
                      Before
                    </Text>
                    <Text color="rgba(0,0,0,0.7)" lineHeight={1.7}>
                      {item.before}
                    </Text>
                  </Box>
                  <Box p={5} bg="rgba(41, 128, 185, 0.07)">
                    <Text fontSize="xs" fontWeight="bold" letterSpacing="wide" textTransform="uppercase" color=" #1A5276" mb={2}>
                      After
                    </Text>
                    <Text color="#000000" fontWeight="500" lineHeight={1.7}>
                      {item.after}
                    </Text>
                  </Box>
                </Box>
              </Reveal>
            ))}
          </SimpleGrid>

          <Reveal>
            <Text
              fontSize={["lg", null, "2xl"]}
              fontWeight="bold"
              textAlign="center"
              color=" #1A5276"
              maxW="700px"
              mx="auto"
              mb={12}
              lineHeight={1.6}
            >
              {`That is the transformation. Not motivation. Clarity, skill, and a professional package that gets taken seriously.`}
            </Text>
          </Reveal>

          <Box maxW="600px" mx="auto" mb={10}>
            <MediaBlock src="/sect5/transformation-testimonial-video.mp4" type="video" aspectRatio={16 / 9} />
          </Box>

          <Flex justify="center">
            <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>
          </Flex>
        </Container>
      </Box>

      {/* SECTION 6: INSIDE THE PROGRAMME */}
      <Box as="section" bg="#ffffff" py={[16, null, 24]}>
        <Container>
          <Reveal>
            <Flex justify="center" mb={3}>
              <Eyebrow>Inside The Programme</Eyebrow>
            </Flex>
          </Reveal>
          <Reveal delay={0.05}>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} textAlign="center" mb={4} maxW="750px" mx="auto" lineHeight={1.4} color=" #1A5276">
              Here is what you are actually getting, module by module
            </Heading>
          </Reveal>
          <Reveal delay={0.1}>
            <Text fontSize={["md", null, "xl"]} textAlign="center" maxW="700px" mx="auto" mb={14}>
              {`I am not going to just list topics at you. I want you to see what each part does for you.`}
            </Text>
          </Reveal>

          <SimpleGrid columns={[1, null, 2, null, 3]} gap={6} mb={14}>
            {modules.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.06}>
                <Box
                  p={7}
                  borderRadius={18}
                  bg="#ffffff"
                  border="1px solid rgba(26, 82, 118, 0.12)"
                  boxShadow="0 10px 26px -16px rgba(26, 82, 118, 0.3)"
                  h="100%"
                  transition="transform 0.2s ease"
                  _hover={{ transform: "translateY(-4px)" }}
                >
                  <Flex
                    w="44px"
                    h="44px"
                    borderRadius="50%"
                    align="center"
                    justify="center"
                    bg={moduleAccents[i % moduleAccents.length]}
                    color="#ffffff"
                    fontWeight="bold"
                    mb={5}
                  >
                    {i + 1}
                  </Flex>
                  <Text fontWeight="bold" fontSize="lg" mb={2} color=" #1A5276">
                    {item.title}
                  </Text>
                  <Text color="rgba(0,0,0,0.72)" lineHeight={1.7}>
                    {item.description}
                  </Text>
                </Box>
              </Reveal>
            ))}
          </SimpleGrid>

          <Flex justify="center">
            <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>
          </Flex>
        </Container>
      </Box>

      {/* SECTION 7: THE BONUSES */}
      <Box as="section" bg="rgba(247, 220, 111, 0.25)" py={[16, null, 24]}>
        <Container>
          <Reveal>
            <Flex justify="center" mb={3}>
              <Eyebrow>The Bonuses</Eyebrow>
            </Flex>
          </Reveal>
          <Reveal delay={0.05}>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} textAlign="center" mb={4} lineHeight={1.4} color=" #1A5276">
              The course alone is worth the price
            </Heading>
          </Reveal>
          <Reveal delay={0.1}>
            <Text fontSize={["md", null, "xl"]} textAlign="center" maxW="700px" mx="auto" mb={14}>
              {`But I do not want you to just learn. I want you to be equipped. So when you enrol, you also get:`}
            </Text>
          </Reveal>

          <SimpleGrid columns={[1, null, 2]} gap={6}>
            {bonuses.map((bonus, i) => (
              <Reveal key={bonus.title} delay={(i % 2) * 0.08}>
                <Flex gap={4} align="flex-start" p={6} borderRadius={16} bg="#ffffff" h="100%">
                  <Box
                    flexShrink={0}
                    w="28px"
                    h="28px"
                    bgImage={`url(${blueTick.src})`}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    mt={1}
                  />
                  <Box>
                    <Flex align="center" gap={2} mb={1} wrap="wrap">
                      <Text fontWeight="bold" color=" #1A5276">
                        {bonus.title}
                      </Text>
                      {bonus.tag && (
                        <Text
                          as="span"
                          fontSize="xs"
                          fontWeight="bold"
                          bg=" #1A5276"
                          color="#ffffff"
                          px={2}
                          py={0.5}
                          borderRadius="full"
                        >
                          {bonus.tag}
                        </Text>
                      )}
                    </Flex>
                    <Text color="rgba(0,0,0,0.72)" lineHeight={1.7}>
                      {bonus.description}
                    </Text>
                  </Box>
                </Flex>
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* SECTION 9: PROOF */}
      <Box as="section" bg="#ffffff" pt={[16, null, 24]}>
        <Container maxW="1000px" textAlign="center">
          <Reveal>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} mb={6} lineHeight={1.4} color=" #1A5276">
              Proof
            </Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} mb={4} maxW="700px" mx="auto">
              {`I could tell you this works. But I would rather show you the people it worked for.`}
            </Text>
          </Reveal>
          <Reveal delay={0.1}>
            <Text fontSize={["md", null, "xl"]} mb={4} maxW="700px" mx="auto">
              {`Prouda Tutors has trained hundreds of African educators. Over 170 of them have secured international online teaching opportunities, across multiple countries, teaching students in places like China, Vietnam and Japan.`}
            </Text>
          </Reveal>
          <Reveal delay={0.15}>
            <Text fontSize={["md", null, "xl"]} mb={14} maxW="700px" mx="auto">
              {`Some were experienced teachers. Many had never taught before. Here they are in their own words:`}
            </Text>
          </Reveal>
        </Container>

        <Box bg=" #1A5276" py={10} mb={16}>
          <Container>
            <SimpleGrid columns={[1, null, 3]} gap={8}>
              {proofStats.map((stat) => (
                <Box key={stat.label} textAlign="center">
                  <Text fontSize={["2xl", null, "4xl"]} fontWeight="bold" color="#ffffff" mb={1}>
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.75)">
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <Container maxW="1100px">
          <SimpleGrid columns={[2, null, 4]} gap={5} mb={16}>
            {proofMedia.map((item, i) => (
              <Reveal key={item.label} delay={(i % 4) * 0.05}>
                <MediaBlock
                  src={item.src}
                  alt={item.label}
                  type={item.type}
                  aspectRatio={item.type === "video" ? 16 / 9 : 9 / 16}
                />
              </Reveal>
            ))}
          </SimpleGrid>

          <Reveal>
            <Text fontSize={["md", null, "xl"]} textAlign="center" maxW="700px" mx="auto" mb={2} lineHeight={1.8}>
              {`Every one of these people had a day one. A day when they were exactly where you are right now: reading, doubting, hoping. The only difference between you and them is that their day one is behind them.`}
            </Text>
            <Text fontSize={["lg", null, "2xl"]} fontWeight="bold" textAlign="center" color=" #D4AC0D" mb={10}>
              Yours can be today.
            </Text>
          </Reveal>

          <Flex justify="center" pb={[16, null, 24]}>
            <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>
          </Flex>
        </Container>
      </Box>

      {/* SECTION 10: FAQ */}
      <Box as="section" bg="rgba(133, 193, 233, 0.15)" py={[16, null, 24]}>
        <Container maxW="850px">
          <Reveal>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} textAlign="center" mb={4} lineHeight={1.4} color=" #1A5276">
              Questions You Are Probably Asking
            </Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} textAlign="center" mb={12}>
              Feeling confused or have questions? Here are honest answers.
            </Text>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqAccordion items={faqs} />
          </Reveal>

          <Flex justify="center" mt={12}>
            <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>
          </Flex>
        </Container>
      </Box>

      {/* SECTION 11: WHY THIS IS NOT FOR EVERYONE */}
      <Box as="section" bg=" #1A5276" color="#ffffff" py={[16, null, 24]}>
        <Container maxW="800px">
          <Reveal>
            <Flex justify="center" mb={3}>
              <Eyebrow light>Why This Is Not For Everyone</Eyebrow>
            </Flex>
          </Reveal>
          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} textAlign="center" mb={12}>
              {`I want to be honest with you, because honesty now saves disappointment later.`}
            </Text>
          </Reveal>

          <Reveal delay={0.1}>
            <Box borderLeft="4px solid #F7DC6F" pl={6} py={2} mb={8}>
              <Text fontWeight="bold" fontSize={["lg", null, "xl"]} mb={2}>
                Do not enrol if you want a job handed to you.
              </Text>
              <Text lineHeight={1.8} color="rgba(255,255,255,0.85)">
                {`This programme gives you the map, the training, the tools and the companies. It does not remove the part where you show up, do the work, record the demo, and send the applications. If you want results without effort, please keep your ₦20,000.`}
              </Text>
            </Box>
          </Reveal>

          <Reveal delay={0.15}>
            <Box borderLeft="4px solid #F7DC6F" pl={6} py={2} mb={10}>
              <Text fontWeight="bold" fontSize={["lg", null, "xl"]} mb={2}>
                Do not enrol if you are chasing quick money.
              </Text>
              <Text lineHeight={1.8} color="rgba(255,255,255,0.85)">
                {`This is a career, not a payout. It is real work with real students, and the income grows the way careers grow: with skill and consistency. If someone promised you overnight riches from online teaching, they lied to you, and I will not repeat their lie just to make a sale.`}
              </Text>
            </Box>
          </Reveal>

          <Reveal delay={0.2}>
            <Text fontSize={["md", null, "xl"]} textAlign="center" mb={10} lineHeight={1.8}>
              {`But if you are willing to work, willing to learn, and tired of watching this opportunity from outside the glass, then keep reading, because the next section is for you.`}
            </Text>
          </Reveal>

          <Flex justify="center">
            <EnrollButton>Yes, I Want To Teach Online. Enrol Me Now.</EnrollButton>
          </Flex>
        </Container>
      </Box>

      {/* SECTION 12: EVERYTHING YOU ARE GETTING TODAY */}
      <Box as="section" bgGradient="linear(to-b, #F7DC6F, #ffffff)" py={[16, null, 24]}>
        <Container maxW="850px" textAlign="center">
          <Reveal>
            <Heading as="h2" fontSize={["2xl", null, "4xl"]} mb={4} lineHeight={1.4} color=" #1A5276">
              Everything You Are Getting Today
            </Heading>
          </Reveal>
          <Reveal delay={0.05}>
            <Text fontSize={["md", null, "xl"]} mb={12}>
              {`Let me put the whole offer in one place. When you enrol in Prouda Tutors ESL Practicum — The Blueprint, you get:`}
            </Text>
          </Reveal>

          <Reveal delay={0.1}>
            <Box as="ul" textAlign="left" listStylePosition="outside" bg="#ffffff" borderRadius={20} p={[6, null, 10]} boxShadow="0 20px 50px -24px rgba(26, 82, 118, 0.35)" mb={14}>
              {finalOfferChecklist.map((item) => (
                <ListItem key={item} mb={4} fontSize={["md", null, "lg"]}>
                  {item}
                </ListItem>
              ))}
            </Box>
          </Reveal>

          <Reveal delay={0.15}>
            <Text fontSize={["md", null, "xl"]} mb={4} lineHeight={1.8}>
              {`This course is ₦35,000, and at ₦35,000 it has already changed the direction of many careers. Right now, for a limited period, it is ₦20,000.`}
            </Text>
            <Text fontSize={["md", null, "xl"]} mb={4} lineHeight={1.8}>
              {`Why? Because message after message told us the same thing: I want this, but I will have to save up. I cannot use my last money on training. We heard it enough times that we made a decision. For this window, the door is wider. Same full course. Same live sessions. Same materials, database, books and community. Nothing removed. Only the price changed.`}
            </Text>
            <Text fontSize={["md", null, "xl"]} mb={10} lineHeight={1.8}>
              And when the window closes, the price returns to ₦35,000.
            </Text>
          </Reveal>

          <Reveal delay={0.2}>
            <Flex direction="column" align="center" gap={2} mb={10}>
              <Flex align="baseline" gap={3}>
                <Text as="span" fontSize="2xl" color="rgba(0,0,0,0.4)" textDecoration="line-through">
                  ₦35,000
                </Text>
                <Text as="span" fontSize={["4xl", null, "5xl"]} fontWeight="bold" color=" #D4AC0D">
                  ₦20,000
                </Text>
              </Flex>
              <Text fontSize="sm" color="rgba(0,0,0,0.6)">
                today, for a limited period
              </Text>
            </Flex>

            <Flex justify="center" mb={16}>
              <EnrollButton>Enrol Now For ₦20,000</EnrollButton>
            </Flex>
          </Reveal>

          <Reveal delay={0.25}>
            <Text fontSize={["lg", null, "2xl"]} fontWeight="bold" color=" #1A5276" mb={10} lineHeight={1.6}>
              {`The students are already out there, logging in, waiting to be taught. Go and meet them.`}
            </Text>

            <Flex justify="center">
              <EnrollButton>Yes, I Am Ready. Enrol Me For ₦20,000</EnrollButton>
            </Flex>
          </Reveal>
        </Container>
      </Box>

      <LandingFooter />
      <StickyCtaBar />
    </>
  );
}
