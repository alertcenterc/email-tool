import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DescriptionIcon from "@mui/icons-material/Description";
import GavelIcon from "@mui/icons-material/Gavel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const services = [
  {
    title: "Cryptocurrency Investigation",
    description:
      "Trace blockchain transactions, identify wallet movements, and analyze digital asset activity across supported networks.",
    icon: <CurrencyBitcoinIcon sx={{ fontSize: 50 }} />,
    tag: "Blockchain",
  },
  {
    title: "Bank Transfer Investigation",
    description:
      "Investigate suspicious wire transfers, unauthorized transactions, and payment trails using structured financial analysis.",
    icon: <AccountBalanceIcon sx={{ fontSize: 50 }} />,
    tag: "Financial",
  },
  {
    title: "Digital Asset Tracing",
    description:
      "Follow transaction paths across wallets and exchanges to build an evidence-backed timeline.",
    icon: <TravelExploreIcon sx={{ fontSize: 50 }} />,
    tag: "Tracing",
  },
  {
    title: "Evidence & Investigation Reports",
    description:
      "Receive professionally organized reports summarizing findings, timelines, and supporting digital evidence.",
    icon: <DescriptionIcon sx={{ fontSize: 50 }} />,
    tag: "Reports",
  },
  {
    title: "Recovery Strategy Consultation",
    description:
      "Discuss available recovery options based on investigation findings and jurisdiction-specific considerations.",
    icon: <GavelIcon sx={{ fontSize: 50 }} />,
    tag: "Consultation",
  },
  {
    title: "Dedicated Case Support",
    description:
      "Track your case, upload evidence securely, and communicate with our investigation team through your client portal.",
    icon: <SupportAgentIcon sx={{ fontSize: 50 }} />,
    tag: "Support",
  },
];

export const Services = () =>  {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="overline" color="success.main" fontWeight={700}>
            OUR SERVICES
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
            Comprehensive Digital Investigation Services
          </Typography>

          <Typography maxWidth={760} color="text.secondary" lineHeight={1.8}>
            Traceon Guard provides professional investigation services designed
            to help individuals and organizations understand fraudulent
            transactions, gather evidence, and make informed recovery decisions.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} lg={4} key={service.title}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 6,
                  border: "1px solid",
                  borderColor: "grey.200",
                  transition: ".35s",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,.08)",
                    borderColor: "#16A34A",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          bgcolor: "#DCFCE7",
                          borderRadius: 4,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#166534",
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Chip
                        label={service.tag}
                        color="success"
                        variant="outlined"
                      />
                    </Stack>

                    <Typography fontWeight={700} fontSize="1.35rem">
                      {service.title}
                    </Typography>

                    <Typography color="text.secondary" lineHeight={1.8}>
                      {service.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
