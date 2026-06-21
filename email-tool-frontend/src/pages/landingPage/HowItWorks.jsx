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

export const HowItworks = () => {
 
  return (
    <>
      {/* HOW IT WORKS */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Stack spacing={2} alignItems="center" mb={7}>
          <Typography variant="h3" fontWeight={800} textAlign="center">
            How PayService Tasks Works
          </Typography>

          <Typography textAlign="center" color="text.secondary" maxWidth={700}>
            Start earning in just a few simple steps.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {[
            {
              step: "01",
              title: "Create Account",
              desc: "Register for free and complete your profile.",
            },
            {
              step: "02",
              title: "Browse Tasks",
              desc: "Discover tasks that match your interests and skills.",
            },
            {
              step: "03",
              title: "Submit Work",
              desc: "Complete the task and submit your response.",
            },
            {
              step: "04",
              title: "Get Paid",
              desc: "Receive rewards once your work is approved.",
            },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.step}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: "#1B5E20",
                    mx: "auto",
                    mb: 2,
                    fontWeight: 800,
                  }}
                >
                  {item.step}
                </Avatar>

                <Typography variant="h6" fontWeight={700} mb={1}>
                  {item.title}
                </Typography>

                <Typography color="text.secondary">{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}