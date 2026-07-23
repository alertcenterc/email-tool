import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const programs = [
  {
    title: "Business Support",
    amount: "$250,000",
    icon: <BusinessCenterRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#0B5ED7",
    items: [
      "Small Businesses",
      "Startup Funding",
      "Business Expansion",
      "Equipment & Inventory",
    ],
  },
  {
    title: "Housing & Rent",
    amount: "$25,000",
    icon: <HomeRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#2E7D32",
    items: [
      "Rent Assistance",
      "Mortgage Support",
      "Utility Assistance",
      "Housing Stability",
    ],
  },
  {
    title: "Financial Assistance",
    amount: "$15,000",
    icon: <PaymentsRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#F57C00",
    items: [
      "Emergency Support",
      "Family Assistance",
      "Income Relief",
      "Unexpected Expenses",
    ],
  },
  {
    title: "Farming Support",
    amount: "$500,000",
    icon: <AgricultureRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#2E7D32",
    items: ["Equipment", "Crop Production", "Livestock", "Farm Expansion"],
  },
  {
    title: "Immigrant Support",
    amount: "$20,000",
    icon: <PublicRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#7B1FA2",
    items: [
      "Community Programs",
      "Employment Resources",
      "Housing Resources",
      "Education Support",
    ],
  },
];

export default function ProgramsSection() {
  return (
    <Box py={{ xs: 8, md: 12 }} bgcolor="#F7F9FC">
      <Container maxWidth="xl">
        <Stack spacing={2} textAlign="center" mb={7}>
          <Typography
            color="primary"
            fontWeight={700}
            textTransform="uppercase"
          >
            Available Programs
          </Typography>

          <Typography variant="h3" fontWeight={800}>
            Find the Support That's Right for You
          </Typography>

          <Typography
            color="text.secondary"
            maxWidth={700}
            mx="auto"
            fontSize={18}
          >
            Explore our major assistance categories and begin your application
            online in just a few simple steps.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {programs.map((program) => (
            <Grid item xs={12} sm={6} lg={4} key={program.title}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 5,
                  height: "100%",
                  border: "1px solid #E5EAF2",
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 74,
                      height: 74,
                      borderRadius: 4,
                      bgcolor: program.color,
                      color: "white",
                      display: "grid",
                      placeItems: "center",
                      mb: 3,
                    }}
                  >
                    {program.icon}
                  </Box>

                  <Typography variant="h5" fontWeight={700}>
                    {program.title}
                  </Typography>

                  <Typography mt={2} color="text.secondary" fontSize={14}>
                    Assistance Available
                  </Typography>

                  <Typography
                    variant="h3"
                    color={program.color}
                    fontWeight={800}
                    mb={3}
                  >
                    Up to {program.amount}
                  </Typography>

                  <Stack spacing={1.5} mb={4}>
                    {program.items.map((item) => (
                      <Typography key={item}>✓ {item}</Typography>
                    ))}
                  </Stack>

                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      borderRadius: 3,
                      py: 1.4,
                      fontWeight: 700,
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
