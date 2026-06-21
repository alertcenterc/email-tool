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

export const EarningsExamples = () => {
  return (
    <>
      {/* EARNINGS */}
      <Box bgcolor="white" py={10}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Typography variant="h3" fontWeight={800} mb={4}>
                Example Earnings
              </Typography>

              <Paper
                elevation={2}
                sx={{
                  overflow: "hidden",
                  borderRadius: 4,
                }}
              >
                <Box p={3}>
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography fontWeight={700}>Task Type</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography fontWeight={700}>Reward</Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Divider />

                {[
                  ["Image Annotation", "$30.65"],
                  ["Survey Completion", "$41.80"],
                  ["Voice Recording", "$44.25"],
                  ["Product Review", "$35.50"],
                  ["App Testing", "$48.75"],
                ].map((row) => (
                  <Box key={row[0]}>
                    <Box p={3}>
                      <Grid container>
                        <Grid item xs={8}>
                          <Typography>{row[0]}</Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography color="success.main" fontWeight={700}>
                            {row[1]}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Divider />
                  </Box>
                ))}
              </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
              <Typography variant="h4" fontWeight={800} mb={3}>
                Recent Payout Activity
              </Typography>

              <Stack spacing={2}>
                {[
                  "Torres K. withdrew $1,725.40",
                  "Mike D. withdrew $3,918.75",
                  "Maria A. withdrew $2,542.10",
                  "Johnny T. withdrew $815.25",
                  "Grace F. withdrew $1,760.50",
                  "Larissa M. withdrew $1,760.50",
                ].map((item) => (
                  <Paper
                    key={item}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <VerifiedUserIcon color="success" />

                      <Typography>{item}</Typography>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
