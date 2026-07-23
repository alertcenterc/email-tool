import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const groups = [
  {
    icon: <PersonRoundedIcon />,
    title: "Individuals & Families",
  },
  {
    icon: <BusinessRoundedIcon />,
    title: "Small Business Owners",
  },
  {
    icon: <AgricultureRoundedIcon />,
    title: "Farmers & Agricultural Workers",
  },
  {
    icon: <HomeRoundedIcon />,
    title: "Homeowners & Renters",
  },
];

const checklist = [
  "U.S. residents seeking financial support",
  "Individuals and families facing financial hardship",
  "Business owners looking to grow or recover",
  "Farmers and agricultural producers",
  "Homeowners or renters needing housing assistance",
  "Applicants who meet program requirements",
];

export default function EligibilitySection() {
  return (
    <Box py={{ xs: 9, md: 13 }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography
              color="primary"
              fontWeight={700}
              textTransform="uppercase"
              mb={2}
            >
              Who Can Apply
            </Typography>

            <Typography variant="h3" fontWeight={800} mb={3}>
              Assistance Programs Designed For Americans Who Need Support
            </Typography>

            <Typography
              color="text.secondary"
              lineHeight={1.9}
              fontSize={18}
              mb={4}
            >
              Our application process is designed to connect eligible
              individuals, families, businesses, farmers, and communities with
              available assistance programs through one secure online portal.
            </Typography>

            <Stack spacing={2.2}>
              {checklist.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  <CheckCircleRoundedIcon color="success" />

                  <Typography fontSize={17}>{item}</Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                mt: 5,
                px: 5,
                py: 1.7,
                borderRadius: 3,
                fontWeight: 700,
              }}
            >
              Check Your Eligibility
            </Button>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {groups.map((item) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      borderRadius: 5,
                      border: "1px solid #E7EDF4",
                      height: "100%",
                      transition: ".3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 18px 45px rgba(0,0,0,.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 4,
                        bgcolor: "primary.main",
                        color: "white",
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

                    <Chip label="Application Available" color="success" />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
