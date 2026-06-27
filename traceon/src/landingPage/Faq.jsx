import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "Can Traceon Guard guarantee the recovery of my funds?",
    answer:
      "No. No legitimate investigation or recovery service can guarantee fund recovery. Our role is to investigate, trace digital transactions, gather evidence, and provide professional guidance based on the facts of your case.",
  },
  {
    question: "What types of cases do you investigate?",
    answer:
      "We investigate cryptocurrency fraud, investment scams, romance scams, business email compromise, unauthorized bank transfers, payment fraud, digital wallet tracing, and other online financial fraud cases.",
  },
  {
    question: "How long does an investigation usually take?",
    answer:
      "The duration depends on the complexity of your case, the available evidence, and the number of transactions involved. After reviewing your submission, we'll provide an estimated investigation timeline.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. All documents, communications, and supporting evidence are handled through encrypted systems and treated with strict confidentiality throughout the investigation process.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Providing transaction IDs, wallet addresses, emails, screenshots, payment receipts, communication records, and any other relevant evidence helps our specialists conduct a more comprehensive investigation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply submit your case through our secure online portal. Once received, our team will review your information and determine the appropriate investigative approach.",
  },
];

export const Faq = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#F8FAFC",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="flex-start">
          {/* Left */}

          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography
                variant="overline"
                color="success.main"
                fontWeight={700}
              >
                FREQUENTLY ASKED QUESTIONS
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },
                  color: "#0F172A",
                }}
              >
                Have Questions?
                <br />
                We've Got Answers.
              </Typography>

              <Typography color="text.secondary" lineHeight={1.9}>
                We understand that every investigation is different. Below are
                answers to some of the most common questions about our services,
                investigation process, and security practices.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/contact")}
                sx={{
                  mt: 2,
                  width: "fit-content",
                  bgcolor: "#14532D",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,

                  "&:hover": {
                    bgcolor: "#166534",
                  },
                }}
              >
                Contact Our Team
              </Button>
            </Stack>
          </Grid>

          {/* Right */}

          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              {faqs.map((faq) => (
                <Accordion
                  key={faq.question}
                  elevation={0}
                  sx={{
                    borderRadius: "16px !important",
                    border: "1px solid",
                    borderColor: "grey.200",

                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={700}>{faq.question}</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography color="text.secondary" lineHeight={1.9}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
