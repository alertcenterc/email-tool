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

export const Testimonials = () => {
    const testimonials = [
      {
        name: "Sarah K.",
        text: "I received my first withdrawal within 48 hours. The tasks are straightforward and the platform is reliable.",
      },
      {
        name: "Michael T.",
        text: "Great side-income opportunity. New tasks appear every day and support responds quickly.",
      },
      {
        name: "David A.",
        text: "One of the easiest ways to earn extra money online. Highly recommended.",
      },
    ];
  return (
    <>
      {/* TESTIMONIALS */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Stack spacing={2} alignItems="center" mb={6}>
          <Typography variant="h3" fontWeight={800} textAlign="center">
            What Our Members Say
          </Typography>

          <Typography textAlign="center" color="text.secondary">
            Thousands of people use PayService Tasks every day.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {testimonials.map((item) => (
            <Grid item xs={12} md={4} key={item.name}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                }}
              >
                <CardContent>
                  <Typography fontSize="1.5rem" mb={2}>
                    ⭐⭐⭐⭐⭐
                  </Typography>

                  <Typography color="text.secondary" mb={3}>
                    "{item.text}"
                  </Typography>

                  <Typography fontWeight={700}>{item.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
