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

export const Featured = () => {
    const taskCategories = [
      {
        title: "Image Annotation",
        reward: "$0.50 - $4.00",
        icon: "🖼️",
      },
      {
        title: "Survey Tasks",
        reward: "$0.25 - $8.00",
        icon: "📋",
      },
      {
        title: "App Testing",
        reward: "$2.00 - $15.00",
        icon: "📱",
      },
      {
        title: "Voice Recording",
        reward: "$1.50 - $10.00",
        icon: "🎙️",
      },
      {
        title: "AI Training Tasks",
        reward: "$0.75 - $12.00",
        icon: "🤖",
      },
      {
        title: "Product Reviews",
        reward: "$2.00 - $20.00",
        icon: "⭐",
      },
    ];

  return (
    <>
      {/* TASK CATEGORIES */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={2} alignItems="center" mb={6}>
          <Typography variant="h3" textAlign="center" fontWeight={800}>
            Popular Task Categories
          </Typography>

          <Typography textAlign="center" color="text.secondary" maxWidth={700}>
            Discover hundreds of earning opportunities across different
            categories updated daily.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {taskCategories.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task.title}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Typography
                      sx={{
                        fontSize: "3rem",
                      }}
                    >
                      {task.icon}
                    </Typography>

                    <Typography variant="h6" fontWeight={700}>
                      {task.title}
                    </Typography>

                    <Typography color="text.secondary">
                      Average Reward
                    </Typography>

                    <Chip
                      label={task.reward}
                      color="success"
                      sx={{
                        width: "fit-content",
                      }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
