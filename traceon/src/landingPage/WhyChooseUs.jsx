import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import PsychologyIcon from "@mui/icons-material/Psychology";
import SecurityIcon from "@mui/icons-material/Security";
import GppGoodIcon from "@mui/icons-material/GppGood";
import TimelineIcon from "@mui/icons-material/Timeline";
import LanguageIcon from "@mui/icons-material/Language";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const features = [
  {
    title: "AI-Powered Intelligence",
    description:
      "Advanced machine learning assists investigators by identifying suspicious transaction patterns, wallet relationships, and digital evidence faster than traditional methods.",
    icon: <PsychologyIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "Secure Case Management",
    description:
      "Your evidence, documents, and communications are protected through secure infrastructure and encrypted storage throughout every stage of your investigation.",
    icon: <SecurityIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "Evidence-Driven Approach",
    description:
      "Every recommendation is based on documented findings, digital analysis, and structured investigative procedures rather than assumptions.",
    icon: <GppGoodIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "Transparent Progress Tracking",
    description:
      "Monitor your investigation through a secure client portal with real-time status updates and case milestones.",
    icon: <TimelineIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "International Case Support",
    description:
      "Our investigation process supports digital asset cases involving international exchanges, wallets, and online financial platforms.",
    icon: <LanguageIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "Dedicated Investigation Team",
    description:
      "Work with experienced specialists who review findings, answer your questions, and guide you through each stage of your case.",
    icon: <SupportAgentIcon sx={{ fontSize: 45 }} />,
  },
];

export const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={8}
          alignItems="center"
        >
          {/* LEFT */}

          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              <Typography
                variant="overline"
                color="success.main"
                fontWeight={700}
              >
                WHY CHOOSE TRACEON GUARD
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  color: "#0F172A",
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },
                }}
              >
                Built Around Trust, Technology & Professional Investigation
              </Typography>

              <Typography
                color="text.secondary"
                lineHeight={1.9}
              >
                Traceon Guard combines intelligent automation with experienced
                investigation specialists to deliver secure, transparent, and
                evidence-backed digital investigation services. Every case is
                handled with professionalism, confidentiality, and a structured
                investigative methodology.
              </Typography>
            </Stack>
          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              {features.map((feature) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={feature.title}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: 5,
                      border: "1px solid",
                      borderColor: "grey.200",
                      transition: ".35s",

                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 50px rgba(0,0,0,.08)",
                        borderColor: "#16A34A",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={3}>
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: 4,
                            bgcolor: "#DCFCE7",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#166534",
                          }}
                        >
                          {feature.icon}
                        </Box>

                        <Typography
                          fontWeight={700}
                          fontSize="1.3rem"
                        >
                          {feature.title}
                        </Typography>

                        <Typography
                          color="text.secondary"
                          lineHeight={1.8}
                        >
                          {feature.description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}