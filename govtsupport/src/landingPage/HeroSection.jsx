import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardAltIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";
import taskLogo from "../assets/taskLogo.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg,#0B2E59 0%, #123E73 55%, #1C5AA6 100%)",
        color: "#fff",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 550,
          height: 550,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.05)",
          top: -220,
          right: -180,
          filter: "blur(8px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.04)",
          bottom: -150,
          left: -120,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={5}>
              <Box
                component="img"
                src={taskLogo}
                alt="Program"
                sx={{
                  width: { xs: 58, md: 70 },
                  height: { xs: 58, md: 70 },
                  objectFit: "contain",
                }}
              />

              <Chip
                icon={<VerifiedUserIcon />}
                label="National Assistance Support Program"
                sx={{
                  width: "fit-content",
                  bgcolor: "rgba(255,255,255,.14)",
                  color: "#fff",
                  borderRadius: 10,
                  px: 1,
                  fontWeight: 600,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.08,
                  maxWidth: 620,
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "4.4rem",
                  },
                }}
              >
                Financial Support for Americans Who Need It Most
              </Typography>

              <Typography
                sx={{
                  maxWidth: 620,
                  fontSize: {
                    xs: 18,
                    md: 20,
                  },
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,.86)",
                }}
              >
                Apply online for housing, rent, business, farming, and emergency
                financial assistance through our secure nationwide application
                process. Application process takes less than 3 minutes.
              </Typography>

             
              {/* Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  onClick={() => navigate("/support-type")}
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardAltIcon />}
                  sx={{
                    bgcolor: "#FFC72C",
                    color: "#09254A",
                    fontWeight: 700,
                    px: 5,
                    height: 58,
                    borderRadius: 4,
                    textTransform: "none",
                    fontSize: 17,
                    "&:hover": {
                      bgcolor: "#F0BE20",
                    },
                  }}
                >
                  Check Eligibility
                </Button>

                <Button
                  onClick={() => navigate("/support-type")}
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.35)",
                    height: 58,
                    px: 5,
                    borderRadius: 4,
                    textTransform: "none",
                    fontWeight: 700,
                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,.05)",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </Stack>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,.12)",
                }}
              />

              {/* Stats */}
              <Grid container spacing={2}>
                {[
                  {
                    title: "50 States",
                    subtitle: "Nationwide Coverage",
                  },
                  {
                    title: "5 Programs",
                    subtitle: "Support Categories",
                  },
                  {
                    title: "100%",
                    subtitle: "Secure Online Process",
                  },
                ].map((item) => (
                  <Grid key={item.title} size={{ xs: 12, sm: 4 }}>
                    <Card
                      sx={{
                        bgcolor: "rgba(255,255,255,.08)",
                        backdropFilter: "blur(12px)",
                        color: "#fff",
                        borderRadius: 4,
                        boxShadow: "none",
                        border: "1px solid rgba(255,255,255,.08)",
                      }}
                    >
                      <CardContent>
                        <Typography fontWeight={800} fontSize={28}>
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "rgba(255,255,255,.75)",
                          }}
                        >
                          {item.subtitle}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          {/* RIGHT */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Card
              sx={{
                borderRadius: 6,
                bgcolor: "#fff",
                p: 2,
                maxWidth: 420,
                mx: "auto",
                boxShadow: "0 40px 80px rgba(0,0,0,.25)",
              }}
            >
              <CardContent>
                <Chip
                  color="success"
                  label="Application Preview"
                  sx={{ mb: 3 }}
                />

                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Financial Assistance
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={2}>
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Program
                    </Typography>

                    <Typography fontWeight={700}>Housing Support</Typography>
                  </Box>

                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Eligibility Review
                    </Typography>

                    <Chip color="warning" label="Ready to Begin" />
                  </Box>

                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      Application
                    </Typography>

                    <Typography fontWeight={700}>
                      Secure Online Submission
                    </Typography>
                  </Box>

                  <Divider />

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      borderRadius: 3,
                      py: 1.6,
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Start Application
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
