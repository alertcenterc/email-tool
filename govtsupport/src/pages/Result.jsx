import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Chip,
  Container,
 
  Stack,
  Typography,
  Alert,
  Avatar,

  Paper,
 
  
} from "@mui/material";
import taskLogo from "../assets/taskLogo.png";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default function Result() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      toast.success("congrats");
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F7FB",
        py: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            border: "1px solid #E5EAF2",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={taskLogo}
            alt="National Benefits Assistance Center"
            sx={{
              width: 90,
              height: 90,
              objectFit: "contain",
              mx: "auto",
              mb: 4,
            }}
          />

          {/* Success Icon */}
          <Avatar
            sx={{
              width: 110,
              height: 110,
              bgcolor: "success.main",
              mx: "auto",
              mb: 3,
            }}
          >
            <VerifiedRoundedIcon sx={{ fontSize: 65 }} />
          </Avatar>

          <Chip
            color="success"
            label="APPLICATION APPROVED"
            sx={{
              mb: 3,
              fontWeight: 700,
              px: 1,
            }}
          />

          <Typography variant="h3" fontWeight={800} gutterBottom>
            Congratulations!
          </Typography>

          <Typography variant="h5" fontWeight={600} color="success.main" mb={3}>
            Your Application Has Been Approved
          </Typography>

          <Typography
            color="text.secondary"
            fontSize={18}
            lineHeight={1.9}
            maxWidth={650}
            mx="auto"
          >
            We're pleased to inform you that your application has successfully
            completed the review process and has been approved. Please review
            your approval details below and follow any remaining instructions
            provided.
          </Typography>

          {/* Approval Details */}
          <Paper
            elevation={0}
            sx={{
              mt: 5,
              p: 4,
              borderRadius: 4,
              bgcolor: "#F8FFF8",
              border: "1px solid #C8E6C9",
            }}
          >
            <Typography variant="h5" fontWeight={700} mb={4}>
              Approval Summary
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Status</Typography>

                <Typography color="success.main" fontWeight={700}>
                  Approved
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Application ID</Typography>

                <Typography fontWeight={700}>NBAC-2026-00458291</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Program</Typography>

                <Typography fontWeight={700}>Business Support</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Approved Amount</Typography>

                <Typography fontWeight={800} color="primary.main">
                  $25,000
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Approval Date</Typography>

                <Typography fontWeight={700}>July 24, 2026</Typography>
              </Stack>
            </Stack>
          </Paper>

          {/* Next Steps */}
          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 4,
              bgcolor: "#FFFDF5",
              border: "1px solid #FFE082",
              textAlign: "left",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={3}>
              Next Steps
            </Typography>

            <Stack spacing={2}>
              <Typography>
                ✅ Your approval has been successfully recorded.
              </Typography>

              <Typography>
                ✅ Please keep your Application ID for future reference.
              </Typography>

              <Typography>
                ✅ Follow any additional instructions provided by your assigned
                case representative.
              </Typography>

              <Typography>
                ✅ Monitor your email and phone for important updates regarding
                your approved application.
              </Typography>
            </Stack>
          </Paper>

          <Alert
            severity="success"
            sx={{
              mt: 4,
              textAlign: "left",
            }}
          >
            Congratulations! Your application has been approved. Please retain
            your Application ID and any related documentation for your records.
          </Alert>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            mt={5}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<DescriptionRoundedIcon />}
            >
              View Approval Details
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadRoundedIcon />}
            >
              Download Approval Letter
            </Button>
          </Stack>
        </Paper>

        {isLoading && <SpinnerLoading />}
      </Container>
    </Box>
  );
}
