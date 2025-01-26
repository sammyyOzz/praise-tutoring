import FaqCard from "@/components/faq-card";
import Container from "@/components/ui/container";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const faqList = [
  {
    question: "Is there a specific age limit for teachers?",
    answer: "Some companies specify an age range for their job openings, typically between 20 and 30 years. Others, however, focus less on age and more on whether you can speak English fluently and enjoy sharing your knowledge with others."
  },
  {
    question: "What are the required documents to work with foreign students?",
    answer: "You need three key things: 1) an internationally recognized ESL certification (such as TEFL, TESOL, or IELTS), 2) a tailored ESL CV, and 3) a compelling pitch for clients. If you're missing any of these, don't worry! Our program at Prouda is designed to help you prepare all of them."
  },
  {
    question: "How will I get a job after the training?",
    answer: "In our community, we share daily job postings from companies that are consistently hiring, and we also assist in recruiting teachers for various organizations."
  },
  {
    question: "How quickly can I get a job after the training?",
    answer: "This is up to you—by closely following all the instructions, you can secure a job quickly. In fact, some teachers found employment within a week of completing their training. And some, within a month."
  },
  {
    question: "How much will I earn per class?",
    answer: "Your earnings are influenced by two main factors: 1) the company, and 2) yourself. Companies typically have a fixed budget for teacher salaries, and they won't go beyond it. However, some companies may be willing to adjust the salary based on your performance and how you impress them. The second factor is your availability."
  },
  {
    question: "How can I get (and keep) better paying jobs?",
    answer: "To secure and maintain high-paying jobs, there are several key factors to consider. Don’t worry—we’ve covered all of these in detail, with examples, in our training."
  },
  {
    question: "When I start teaching, do I get paid in my local currency or dollars?",
    answer: "You receive payment in dollars, and for certain schools, you are paid in pounds or euros."
  },
  {
    question: "I live in Nigeria, so how can I receive my salary to my local bank account?",
    answer: "A domiciliary account or PayPal, Stripe, or Wise (PayPal is widely used by schools). If you're abroad, you can also reach out to trusted friends or family for assistance. For tutors who are not based in Nigeria and where PayPal is accepted, you're all set!"
  },
  {
    question: "Do I have to create a curriculum for each of my students?",
    answer: "There's no need for you to stress about this—schools and parents supply the book. Your only job is to teach."
  },
  {
    question: "I have a job currently but I’m interested. Can I do this as a part-time job?",
    answer: "Certainly! However, keep in mind that the more hours you work as a teacher, the more money you will earn."
  },
  {
    question: "Is this opportunity available only for English teachers? Can I teach other languages, too?",
    answer: "Oops! While you can teach other languages like French, Spanish, and more, Prouda currently focuses on English tutors due to higher demand."
  }
];


function Faqs() {
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
            FAQs For Aspiring Tutors
          </Heading>

          <Heading
            as="h2"
            fontSize={["xl", null, null, "3xl"]}
            maxW={["100%", null, null, "50%"]}
            mx="auto"
            mb={20}
            lineHeight={1.5}
          >
           Feeling confused or have questions? Check out these frequently asked questions we&apos;ve compiled for you.
          </Heading>


          <SimpleGrid columns={[1, null, null, 2]} gap={8}>
            {faqList.map((faq, i) => (
              <FaqCard key={i} question={faq.question} answer={faq.answer}  />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Faqs;
