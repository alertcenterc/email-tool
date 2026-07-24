
import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";
import taskLogo from "../assets/taskLogo.png";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { supportStore } from "./supportStore";

export default function Result() {

const type = supportStore((state) => state.type);
const amount = supportStore((state) => state.amount);
const firstname = supportStore((state) => state.phone);
const lastname = supportStore((state) => state.updateName);

function renderAmount(type){
  if (type === "$25,000 - $50,000") return "$45,000";
  if (type === "$50,000 - $100,000") return "$92,000";
  if (type === "$100,000 - $300,000") return "$285,000";
  if (type === "$300,000 - $500,000") return "$490,000";
  if (type === "$300,000 - $900,000") return "$860,000";
  return "$92,000"
}

return (
  <Box
    sx={{
      minHeight: "100vh",
      bgcolor: "#F5F7FB",
      py: { xs: 4, md: 6 },
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* Logo */}
      <Stack alignItems="center" spacing={{ xs: 2, md: 3 }}>
        <Box
          component="img"
          src={taskLogo}
          alt="National Benefits Assistance Center"
          sx={{
            width: { xs: 65, md: 90 },
            height: { xs: 65, md: 90 },
            objectFit: "contain",
          }}
        />
      </Stack>

      <Stack spacing={{ xs: 3, md: 5 }}>
        {/* Header */}
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Chip color="primary" label="National Benefits Assistance Center" />

          <Avatar
            sx={{
              width: { xs: 80, md: 110 },
              height: { xs: 80, md: 110 },
              bgcolor: "success.main",
            }}
          >
            <VerifiedRoundedIcon
              sx={{
                fontSize: { xs: 45, md: 65 },
              }}
            />
          </Avatar>

          <Chip
            color="success"
            label="APPLICATION APPROVED"
            sx={{
              fontWeight: 700,
              width: { xs: "100%", sm: "auto" },
              maxWidth: 320,
            }}
          />

          <Typography
            fontWeight={800}
            textAlign="center"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },
            }}
          >
            Congratulations!
          </Typography>

          <Typography
            color="success.main"
            fontWeight={700}
            textAlign="center"
            sx={{
              fontSize: {
                xs: "1.2rem",
                md: "1.5rem",
              },
            }}
          >
            Your Application Has Been Approved
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{
              fontSize: {
                xs: 15,
                md: 18,
              },
              lineHeight: 1.9,
              maxWidth: 650,
            }}
          >
            We're pleased to inform you that your application has successfully
            completed the review process and has been approved. Please review
            your approval details below and follow any remaining instructions
            provided by your assigned case representative to receive your support fund. 
            Contact: (405) 473-9064
          </Typography>
        </Stack>

        {/* Approval Summary */}

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: "#F8FFF8",
            border: "1px solid #C8E6C9",
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={4}>
            Approval Summary
          </Typography>

          <Stack spacing={3}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={0.5}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography color="text.secondary">Status</Typography>

              <Typography color="success.main" fontWeight={700}>
                Approved
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={0.5}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography color="text.secondary">Applicant Name</Typography>

              <Typography
                fontWeight={700}
                textAlign={{ xs: "left", sm: "right" }}
                sx={{ wordBreak: "break-word" }}
              >
                {firstname} {lastname}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={0.5}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography color="text.secondary">Program</Typography>

              <Typography
                fontWeight={700}
                textAlign={{ xs: "left", sm: "right" }}
                sx={{ wordBreak: "break-word" }}
              >
                {type}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={0.5}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography color="text.secondary">Approved Amount</Typography>

              <Typography
                fontWeight={800}
                color="primary.main"
                textAlign={{ xs: "left", sm: "right" }}
              >
              {renderAmount(amount)}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={0.5}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography color="text.secondary">Application ID</Typography>

              <Typography
                fontWeight={700}
                textAlign={{ xs: "left", sm: "right" }}
                sx={{ wordBreak: "break-word" }}
              >
                NBAC-2026-00458291
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        {/* Next Steps */}

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: "#FFFDF5",
            border: "1px solid #FFE082",
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={3}>
            Next Steps
          </Typography>

          <Stack spacing={2}>
            <Typography>
              ✅ Follow any additional instructions provided by your assigned
              case representative to receive your approved amount.
            </Typography>

            <Typography>
              ✅ Monitor your email and phone for important updates regarding
              your approved application.
            </Typography>

            <Typography>
              ✅ Keep your Application ID in a safe place for future reference.
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  </Box>
);
}
