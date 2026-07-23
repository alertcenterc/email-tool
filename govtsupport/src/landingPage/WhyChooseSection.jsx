import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const benefits = [
  {
    title: "Trusted Application Support",
    icon: <VerifiedUserRoundedIcon sx={{ fontSize: 46 }} />,
    color: "#0B5ED7",
    description:
      "Our specialists help applicants understand available assistance programs and complete every step of the application process.",
  },
  {
    title: "Secure & Confidential",
    icon: <SecurityRoundedIcon sx={{ fontSize: 46 }} />,
    color: "#2E7D32",
    description:
      "Your personal information is protected using modern security standards throughout the application process.",
  },
  {
    title: "Serving All 50 States",
    icon: <PublicRoundedIcon sx={{ fontSize: 46 }} />,
    color: "#F57C00",
    description:
      "Residents across the United States can explore available assistance programs through one simple online application.",
  },
  {
    title: "Dedicated Support Team",
    icon: <SupportAgentRoundedIcon sx={{ fontSize: 46 }} />,
    color: "#7B1FA2",
    description:
      "Our support specialists are available to answer questions and help guide applicants from beginning to end.",
  },
];

export default function WhyChooseSection() {
  return (
    <Box py={{ xs: 9, md: 12 }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={8}>
          <Typography
            color="primary"
            fontWeight={700}
            textTransform="uppercase"
          >
            Why Choose Us
          </Typography>

          <Typography variant="h3" fontWeight={800} textAlign="center">
            Making Federal Assistance Easier to Access
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            maxWidth={760}
            fontSize={18}
            lineHeight={1.8}
          >
            The National Benefits Assistance Center helps individuals, families,
            farmers, and business owners understand available assistance
            programs through one easy application experience.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {benefits.map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 5,
                  border: "1px solid #E6ECF2",
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Box
                    sx={{
                      width: 76,
                      height: 76,
                      bgcolor: `${item.color}15`,
                      color: item.color,
                      borderRadius: 4,
                      display: "grid",
                      placeItems: "center",
                      mb: 3,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography variant="h5" fontWeight={700} mb={2}>
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary" lineHeight={1.8}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
