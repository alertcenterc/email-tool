import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: <DescriptionRoundedIcon sx={{ fontSize: 36 }} />,
    title: "Complete Your Application",
    description:
      "Choose the assistance program that fits your needs and complete the secure online application.",
    color: "#0B5ED7",
  },
  {
    number: "02",
    icon: <FactCheckRoundedIcon sx={{ fontSize: 36 }} />,
    title: "Application Review",
    description:
      "Our specialists carefully review your submitted information and supporting documents.",
    color: "#2E7D32",
  },
  {
    number: "03",
    icon: <AccountBalanceRoundedIcon sx={{ fontSize: 36 }} />,
    title: "Program Processing",
    description:
      "Eligible applications move through the processing stage while updates are provided along the way.",
    color: "#F57C00",
  },
  {
    number: "04",
    icon: <DoneAllRoundedIcon sx={{ fontSize: 36 }} />,
    title: "Receive Updates",
    description:
      "Stay informed throughout the process with status updates and important notifications.",
    color: "#7B1FA2",
  },
];

export default function HowItWorksSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 9, md: 13 },
        bgcolor: "#F8FAFC",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" mb={8}>
          <Typography
            color="primary"
            fontWeight={700}
            textTransform="uppercase"
          >
            Simple Process
          </Typography>

          <Typography variant="h3" fontWeight={800} textAlign="center">
            How It Works
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            maxWidth={720}
            fontSize={18}
            lineHeight={1.8}
          >
            We've simplified the application process so you can complete
            everything online in just a few easy steps.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {steps.map((step) => (
            <Grid item xs={12} md={6} lg={3} key={step.number}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 5,
                  p: 4,
                  height: "100%",
                  border: "1px solid #E7EDF4",
                  transition: ".35s",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 25px 60px rgba(0,0,0,.08)",
                  },
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: 18,
                    right: 22,
                    fontSize: 52,
                    fontWeight: 800,
                    color: "#EEF2F7",
                  }}
                >
                  {step.number}
                </Typography>

                <Avatar
                  sx={{
                    width: 72,
                    height: 72,
                    bgcolor: `${step.color}15`,
                    color: step.color,
                    mb: 3,
                  }}
                >
                  {step.icon}
                </Avatar>

                <Typography variant="h5" fontWeight={700} mb={2}>
                  {step.title}
                </Typography>

                <Typography color="text.secondary" lineHeight={1.8}>
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Stack alignItems="center" mt={8}>
          <Button
            onClick={() => navigate("/support-type")}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              px: 6,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            Start Your Application
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
