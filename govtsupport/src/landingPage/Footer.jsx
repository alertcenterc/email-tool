import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#071E3D",
        color: "white",
        pt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Agency */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <VerifiedUserRoundedIcon
                  sx={{
                    fontSize: 40,
                    color: "#FFC72C",
                  }}
                />

                <Typography variant="h5" fontWeight={800}>
                  National Benefits
                  <br />
                  Assistance Center
                </Typography>
              </Stack>

              <Typography
                sx={{
                  opacity: 0.8,
                  lineHeight: 1.9,
                }}
              >
                Helping individuals, families, business owners, and communities
                navigate available assistance programs through a secure, simple,
                and accessible online application experience.
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton sx={{ color: "white" }}>
                  <FacebookRoundedIcon />
                </IconButton>

                <IconButton sx={{ color: "white" }}>
                  <XIcon />
                </IconButton>

                <IconButton sx={{ color: "white" }}>
                  <LinkedInIcon />
                </IconButton>

                <IconButton sx={{ color: "white" }}>
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Programs */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight={700} mb={3}>
              Programs
            </Typography>

            <Stack spacing={2}>
              <Link color="inherit" underline="hover">
                Business Support
              </Link>

              <Link color="inherit" underline="hover">
                Housing Assistance
              </Link>

              <Link color="inherit" underline="hover">
                Financial Assistance
              </Link>

              <Link color="inherit" underline="hover">
                Farming Support
              </Link>

              <Link color="inherit" underline="hover">
                Immigrants Assistance
              </Link>
            </Stack>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} md={2}>

            <Stack spacing={2}>
              <Link color="inherit" underline="hover">
                Check Eligibility
              </Link>

              <Link color="inherit" underline="hover">
                Application Process
              </Link>

              <Link color="inherit" underline="hover">
                FAQ
              </Link>

              <Link color="inherit" underline="hover">
                Contact Us (405) 473-9064
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography fontWeight={700} mb={3}>
              Contact Information
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" spacing={2}>
                <PhoneRoundedIcon />

                <Box>
                  <Typography fontWeight={600}>Contact Support</Typography>

                  <Typography sx={{ opacity: 0.75 }}>(405) 473-9064</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2}>
                <EmailRoundedIcon />

                <Box>
                  <Typography fontWeight={600}>Email Support</Typography>

                  <Typography sx={{ opacity: 0.75 }}>
                    support@nbacgov.com
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2}>
                <LocationOnRoundedIcon />

                <Box>
                  <Typography fontWeight={600}>Support Hours</Typography>

                  <Typography sx={{ opacity: 0.75 }}>
                    Monday – Sunday
                    <br />
                    24 hours
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 6,
            borderColor: "rgba(255,255,255,.12)",
          }}
        />

        {/* Bottom */}

        <Stack spacing={3} pb={5}>
          <Typography
            sx={{
              opacity: 0.7,
              lineHeight: 1.8,
              fontSize: 14,
            }}
          >
            The National Benefits Assistance Center provides guidance and
            application support for available assistance programs. Program
            availability, eligibility requirements, and funding are determined
            according to the applicable program rules and regulations.
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Typography
              sx={{
                opacity: 0.7,
                fontSize: 14,
              }}
            >
              © 2026 National Benefits Assistance Center. All Rights Reserved.
            </Typography>

            <Stack direction="row" spacing={4}>
              <Link color="inherit" underline="hover">
                Privacy Policy
              </Link>

              <Link color="inherit" underline="hover">
                Terms of Use
              </Link>

              <Link color="inherit" underline="hover">
                Cookie Policy
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
