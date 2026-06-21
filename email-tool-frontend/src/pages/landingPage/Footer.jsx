import {
  AppBar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Footer = () => {
  return (
    <>

    {/* FOOTER */}
<Box
  sx={{
    bgcolor: "#0F172A",
    color: "white",
    py: 8,
  }}
>
  <Container maxWidth="lg">
    <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h5"
          fontWeight={800}
          mb={2}
        >
          PayService Tasks
        </Typography>

        <Typography
          color="rgba(255,255,255,.7)"
        >
          A trusted platform connecting users with
          rewarding digital tasks and earning
          opportunities worldwide.
        </Typography>
      </Grid>

      <Grid item xs={6} md={2}>
        <Typography
          fontWeight={700}
          mb={2}
        >
          Company
        </Typography>

        <Stack spacing={1}>
          <Typography>About Us</Typography>
          <Typography>Contact</Typography>
          <Typography>Careers</Typography>
        </Stack>
      </Grid>

      <Grid item xs={6} md={3}>
        <Typography
          fontWeight={700}
          mb={2}
        >
          Resources
        </Typography>

        <Stack spacing={1}>
          <Typography>FAQ</Typography>
          <Typography>Help Center</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Terms of Service</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography
          fontWeight={700}
          mb={2}
        >
          Support
        </Typography>

        <Typography>
          WhatsApp: +1 405 768-9501
        </Typography>

        <Typography mt={1}>
          Available 24/7
        </Typography>
      </Grid>
    </Grid>

    <Divider
      sx={{
        my: 4,
        borderColor: "rgba(255,255,255,.1)",
      }}
    />

    <Typography
      textAlign="center"
      color="rgba(255,255,255,.6)"
    >
      © 2026 PayService Tasks. All Rights Reserved.
    </Typography>
  </Container>
</Box>
</>
);
  
};
