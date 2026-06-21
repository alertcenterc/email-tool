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
import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
    const navigate = useNavigate();

    const toSignup = async () => {
      navigate("/auth/signup");
    };
    return (
      <>
        {/* FINAL CTA */}
        <Box
          sx={{
            background: "linear-gradient(135deg,#1B5E20,#2E7D32)",
            py: 10,
            color: "white",
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={3} alignItems="center">
              <Typography variant="h3" textAlign="center" fontWeight={800}>
                Ready To Start Earning?
              </Typography>

              <Typography
                textAlign="center"
                sx={{
                  opacity: 0.95,
                }}
              >
                Join more than 75,000 users already earning rewards through
                PayService Tasks.
              </Typography>

              <Button
                onClick={toSignup}
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#FFB300",
                  color: "#111",
                  px: 5,
                  py: 1.5,
                  fontWeight: 700,
                }}
              >
                Create Free Account
              </Button>
            </Stack>
          </Container>
        </Box>
      </>
    );
};
