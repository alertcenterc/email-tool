import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import InsightsIcon from "@mui/icons-material/Insights";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useNavigate } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Submit Your Case",
    description:
      "Complete our secure case submission form and upload transaction records, screenshots, wallet addresses, emails, or any supporting evidence.",
    icon: <AssignmentTurnedInIcon sx={{ fontSize: 42 }} />,
  },
  {
    step: "02",
    title: "AI Investigation",
    description:
      "Our intelligent investigation engine analyzes transaction patterns, wallet activity, blockchain records, and available digital evidence.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 42 }} />,
  },
  {
    step: "03",
    title: "Expert Case Review",
    description:
      "Experienced investigation specialists review AI findings, validate evidence, and identify the most appropriate investigative path.",
    icon: <FactCheckIcon sx={{ fontSize: 42 }} />,
  },
  {
    step: "04",
    title: "Recovery Strategy",
    description:
      "Receive a comprehensive investigation report together with practical recommendations and available recovery options based on your case.",
    icon: <InsightsIcon sx={{ fontSize: 42 }} />,
  },
];

export const Process = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#F8FAFC",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} textAlign="center" mb={8}>
          <Typography variant="overline" color="success.main" fontWeight={700}>
            HOW IT WORKS
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              fontWeight: 800,
              color: "#0F172A",
            }}
          >
            A Secure & Transparent Investigation Process
          </Typography>

          <Typography
            maxWidth={760}
            mx="auto"
            color="text.secondary"
            lineHeight={1.9}
          >
            Every investigation follows a structured workflow that combines
            artificial intelligence with experienced specialists, ensuring your
            case is handled professionally from submission through final
            recommendations.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {steps.map((step) => (
            <Grid item xs={12} md={6} lg={3} key={step.step}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 6,
                  border: "1px solid",
                  borderColor: "grey.200",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: ".35s",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,.08)",
                  },
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "#E2E8F0",
                  }}
                >
                  {step.step}
                </Typography>

                <Stack spacing={3}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 4,
                      bgcolor: "#DCFCE7",
                      color: "#166534",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {step.icon}
                  </Box>

                  <Typography fontWeight={700} fontSize="1.35rem">
                    {step.title}
                  </Typography>

                  <Typography color="text.secondary" lineHeight={1.8}>
                    {step.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={0}
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            background: "linear-gradient(135deg,#14532D 0%,#166534 100%)",
            color: "white",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                fontWeight={800}
                fontSize={{
                  xs: "2rem",
                  md: "2.6rem",
                }}
                mb={2}
              >
                The Earlier an Investigation Begins, the Better the Opportunity
                to Preserve Valuable Digital Evidence.
              </Typography>

              <Typography
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.9,
                }}
              >
                Prompt action can help preserve transaction records, blockchain
                activity, communication history, and other digital evidence that
                may assist in an investigation.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack
                alignItems={{
                  xs: "flex-start",
                  md: "flex-end",
                }}
              >
                <Button
                  onClick={() => navigate("/case-email")}
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "white",
                    color: "#14532D",
                    px: 4,
                    py: 1.6,
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: 700,

                    "&:hover": {
                      bgcolor: "#F8FAFC",
                    },
                  }}
                >
                  Start Your Free Case Review
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
