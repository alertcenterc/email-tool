import {
  AppBar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Faq = () => {
    const faqData = [
      {
        question: "How do I earn money?",
        answer:
          "Complete available tasks, submit your work, and receive rewards once your submission is approved.",
      },
      {
        question: "Is registration free?",
        answer: "Yes. Creating a PayService Tasks account is completely free.",
      },
      {
        question: "How long does task review take?",
        answer:
          "Most submissions are reviewed within 2 - 10 minutes depending on the task type.",
      },
      {
        question: "How do withdrawals work?",
        answer:
          "Once your balance reaches the minimum withdrawal threshold, you can submit a withdrawal request.",
      },
      {
        question: "Can I work from my mobile phone?",
        answer:
          "Yes. PayService Tasks is optimized for both mobile and desktop users.",
      },
    ];
  
  return (
    <>
      {/* FAQ */}
      <Box bgcolor="white" py={10}>
        <Container maxWidth="md">
          <Typography variant="h3" textAlign="center" fontWeight={800} mb={6}>
            Frequently Asked Questions
          </Typography>

          {faqData.map((faq) => (
            <Accordion
              key={faq.question}
              sx={{
                mb: 2,
                borderRadius: "12px !important",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>{faq.question}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
};
