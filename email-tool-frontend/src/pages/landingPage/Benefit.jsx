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

export const Benefit = () => {
 
  return (
    <>
    {/* BENEFITS */}
<Box
  sx={{
    bgcolor: "white",
    py: 10,
  }}
>
  <Container maxWidth="lg">
    <Stack
      spacing={2}
      alignItems="center"
      mb={6}
    >
      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="center"
      >
        Why Choose PayService Tasks
      </Typography>

      <Typography
        color="text.secondary"
        textAlign="center"
      >
        Everything you need to earn online safely.
      </Typography>
    </Stack>

    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <BoltIcon
              color="success"
              sx={{ fontSize: 60 }}
            />

            <Typography
              variant="h6"
              mt={2}
              mb={1}
              fontWeight={700}
            >
              Flexible Work
            </Typography>

            <Typography color="text.secondary">
              Complete tasks anytime from your mobile
              phone, tablet, or computer.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <PaymentsIcon
              color="success"
              sx={{ fontSize: 60 }}
            />

            <Typography
              variant="h6"
              mt={2}
              mb={1}
              fontWeight={700}
            >
              Fast Withdrawals
            </Typography>

            <Typography color="text.secondary">
              Withdraw your earnings quickly through
              supported payment methods.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <SecurityIcon
              color="success"
              sx={{ fontSize: 60 }}
            />

            <Typography
              variant="h6"
              mt={2}
              mb={1}
              fontWeight={700}
            >
              Secure Platform
            </Typography>

            <Typography color="text.secondary">
              Your account and earnings are protected
              using modern security standards.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <WorkspacePremiumIcon
              color="success"
              sx={{ fontSize: 60 }}
            />

            <Typography
              variant="h6"
              mt={2}
              mb={1}
              fontWeight={700}
            >
              Verified Tasks
            </Typography>

            <Typography color="text.secondary">
              Only quality and legitimate opportunities
              are listed on the platform.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <TrendingUpIcon
              color="success"
              sx={{ fontSize: 60 }}
            />

            <Typography
              variant="h6"
              mt={2}
              mb={1}
              fontWeight={700}
            >
              Daily Opportunities
            </Typography>

            <Typography color="text.secondary">
              Fresh tasks become available every day.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <SupportAgentIcon
              color="success"
              sx={{ fontSize: 60 }}
            />

            <Typography
              variant="h6"
              mt={2}
              mb={1}
              fontWeight={700}
            >
              Dedicated Support
            </Typography>

            <Typography color="text.secondary">
              Our team is available to assist whenever
              you need help.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
</Box>
</>
  );
};
