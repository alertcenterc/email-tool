import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const faqs = [
  {
    question: "Who can apply?",
    answer:
      "Individuals, families, business owners, farmers, homeowners, renters, and other eligible applicants may begin an application through the National Benefits Assistance Center. Eligibility depends on the specific assistance program.",
  },
  {
    question: "How long does the application take?",
    answer:
      "Most applicants can complete the online application in just a few minutes. Having your personal information and any requested documents ready may help speed up the process.",
  },
  {
    question: "Can I apply for more than one assistance program?",
    answer:
      "Yes. Depending on your circumstances, you may be considered for more than one assistance category during the application process.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. We use modern security measures to help protect your personal information throughout the application process.",
  },
  {
    question: "Will I receive updates after applying?",
    answer:
      "Yes. You'll receive updates as your application progresses through each stage of the review process.",
  },
  {
    question: "Can I complete the application on my phone?",
    answer:
      "Yes. The application works on smartphones, tablets, laptops, and desktop computers.",
  },
  {
    question: "Is there a fee to apply?",
    answer:
      "No. There is no fee to submit an application through the National Benefits Assistance Center.",
  },
  {
    question: "What documents might I need?",
    answer:
      "Depending on the assistance program, you may be asked to provide identification, proof of residence, income information, or other supporting documents.",
  },
];

export default function FAQSection() {
  return (
    <Box
      sx={{
        py: { xs: 9, md: 13 },
        bgcolor: "#F8FAFC",
      }}
    >
      <Container maxWidth="md">
        <Typography
          color="primary"
          fontWeight={700}
          textAlign="center"
          textTransform="uppercase"
          mb={2}
        >
          Frequently Asked Questions
        </Typography>

        <Typography variant="h3" fontWeight={800} textAlign="center" mb={2}>
          We're Here to Help
        </Typography>

        <Typography
          color="text.secondary"
          textAlign="center"
          sx={{
            mb: 6,
            maxWidth: 650,
            mx: "auto",
            lineHeight: 1.8,
            fontSize: 18,
          }}
        >
          Find answers to the questions applicants ask most often before
          beginning their application.
        </Typography>

        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            elevation={0}
            sx={{
              mb: 2,
              borderRadius: "18px !important",
              border: "1px solid #E5EAF2",
              overflow: "hidden",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
              <Typography fontWeight={700}>{faq.question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography color="text.secondary" lineHeight={1.8}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
