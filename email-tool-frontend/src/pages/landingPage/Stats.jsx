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

export const Stats = () => {
 
  return (
    <>
      {/* TRUSTED BY */}
      <Box bgcolor="white" py={4}>
        <Container maxWidth="lg">
          <Typography
            textAlign="center"
            color="text.secondary"
            mb={4}
            fontWeight={600}
          >
            Trusted by businesses and organizations worldwide
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={3}
          >
            {[
              "TechNova",
              "CloudWorks",
              "DataHub",
              "SurveyPro",
              "AI Labs",
              "MarketPulse",
            ].map((brand) => (
              <Typography
                key={brand}
                fontWeight={700}
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    md: "1.3rem",
                  },
                }}
              >
                {brand}
              </Typography>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* STATS */}
      <Container
        maxWidth="lg"
        sx={{
          mt: -2,
          pb: 8,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: {
              xs: 3,
              md: 5,
            },
            borderRadius: 5,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <Stack alignItems="center">
                <Typography variant="h3" fontWeight={800} color="#1B5E20">
                  75K+
                </Typography>

                <Typography textAlign="center">Registered Users</Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} md={3}>
              <Stack alignItems="center">
                <Typography variant="h3" fontWeight={800} color="#1B5E20">
                  $1.8M+
                </Typography>

                <Typography textAlign="center">Rewards Paid</Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} md={3}>
              <Stack alignItems="center">
                <Typography variant="h3" fontWeight={800} color="#1B5E20">
                  1.2M+
                </Typography>

                <Typography textAlign="center">Tasks Completed</Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} md={3}>
              <Stack alignItems="center">
                <Typography variant="h3" fontWeight={800} color="#1B5E20">
                  98%
                </Typography>

                <Typography textAlign="center">Satisfaction Rate</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
