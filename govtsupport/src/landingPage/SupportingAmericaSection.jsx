import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import supportImage from "../assets/support-americans.jpg";
import { useNavigate } from "react-router-dom";

const items = [
  "Individuals & Families",
  "Small Business Owners",
  "Homeowners & Renters",
  "Farmers & Agricultural Workers",
  "Community Support Resources",
  "Simple Online Application",
];

export default function SupportingAmericaSection() {
  const navigate = useNavigate();

  return (
    <Box py={{ xs: 10, md: 14 }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={supportImage}
              alt=""
              sx={{
                width: "100%",
                borderRadius: 6,
                boxShadow: "0 30px 70px rgba(0,0,0,.12)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="primary" fontWeight={700} mb={2}>
              SUPPORTING COMMUNITIES
            </Typography>

            <Typography variant="h3" fontWeight={800} mb={3}>
              Helping Americans Every Step of the Way
            </Typography>

            <Typography
              color="text.secondary"
              fontSize={18}
              lineHeight={1.9}
              mb={4}
            >
              Our mission is to make it easier for individuals, families,
              businesses, and communities to navigate available assistance
              programs through one secure and easy-to-use application portal.
            </Typography>

            <Stack spacing={2}>
              {items.map((item) => (
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  key={item}
                >
                  <CheckCircleRoundedIcon color="success" />

                  <Typography>{item}</Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              onClick={() => navigate("/support-type")}
              sx={{ mt: 5 }}
              size="large"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Check Eligibility
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
