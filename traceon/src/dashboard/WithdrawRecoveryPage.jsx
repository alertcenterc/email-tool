import { useNavigate } from "react-router-dom";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { dashboardStore } from "./dashboardStore";

export default function WithdrawRecoveryPage() {
  const navigate = useNavigate();

  const amount = dashboardStore((state) => state.amount);
  const caseId = dashboardStore((state) => state.caseId);

  
      const lostAmount = parseFloat(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      const recoveredAmount = parseFloat(amount) * 0.9;

      const formattedAmount = recoveredAmount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

      const serviceCharge = recoveredAmount * 0.1;

      const formattedserviceCharge = serviceCharge.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

  return (
    <Box
      sx={{
        bgcolor: "#F8FAFC",
        minHeight: "100vh",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4}>
          {/* Success Banner */}

          <Alert
            severity="success"
            icon={<CheckCircleRoundedIcon />}
            sx={{
              borderRadius: 4,
            }}
          >
            <AlertTitle sx={{ fontWeight: 700 }}>
              Investigation Successfully Completed
            </AlertTitle>
            Our investigation team has successfully concluded your case. A
            recoverable balance has been identified and your case is now ready
            for the settlement process.
          </Alert>

          {/* Main Card */}

          <Paper
            elevation={0}
            sx={{
              p: 5,
              borderRadius: 5,
              border: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <Stack spacing={5}>
              {/* Header */}

              <Box textAlign="center">
                <Chip
                  color="success"
                  icon={<VerifiedUserRoundedIcon />}
                  label="Verified Recovery Summary"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                  }}
                />

                <Typography variant="h4" fontWeight={800}>
                  Recovery Settlement
                </Typography>

                <Typography color="text.secondary" mt={1}>
                  Below is the summary of your recovered funds and the
                  applicable investigation service fee.
                </Typography>
              </Box>

              {/* Amount */}

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "#F0FDF4",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Total Recovered Amount
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "2.6rem",
                      md: "3.5rem",
                    },
                    fontWeight: 800,
                    color: "#166534",
                  }}
                >
                  {formattedAmount}
                </Typography>
              </Paper>

              {/* Summary */}

              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#F8FAFC",
                  borderRadius: 4,
                  p: 3,
                }}
              >
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="space-between"
                  >
                    <Typography>Amount Lost:</Typography>

                    <Typography fontWeight={700}>{lostAmount}</Typography>
                  </Stack>

                  <Divider />

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <Typography variant="h6" fontWeight={700}>
                      Investigation Service Fee (10%):
                    </Typography>

                    <Typography
                      variant="h5"
                      fontWeight={800}
                      color="success.main"
                    >
                      {formattedserviceCharge}
                    </Typography>
                  </Stack>

                  <Divider />
                </Stack>
              </Paper>

              {/* Next Steps */}

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "#FFFFFF",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                <Typography variant="h6" fontWeight={700} mb={3}>
                  What Happens Next?
                </Typography>

                <Stack spacing={2.5}>
                  <Typography>
                    ① Contact our verified settlement team.
                  </Typography>

                  <Typography>
                    ② Submit your preferred withdrawal details.
                  </Typography>

                  <Typography>
                    ③ Receive settlement instructions from our team.
                  </Typography>

                  <Typography>
                    ④ Your recovered funds will be prepared for disbursement
                    after settlement is completed.
                  </Typography>
                </Stack>
              </Paper>

              {/* Trust */}

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "#F0FDF4",
                  borderRadius: 4,
                }}
              >
                <Stack spacing={2}>
                  <Typography fontWeight={700} color="success.main">
                    Your Protection
                  </Typography>

                  <Typography>
                    ✔ One-time professional investigation service fee
                  </Typography>

                  <Typography>✔ No hidden administrative charges</Typography>

                  <Typography>
                    ✔ Secure communication with verified specialists
                  </Typography>

                  <Typography>
                    ✔ End-to-end confidential settlement process
                  </Typography>
                </Stack>
              </Paper>

              {/* CTA */}

              <Button
                size="large"
                fullWidth
                variant="contained"
                startIcon={<SupportAgentRoundedIcon />}
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() => navigate("/verified-support")}
                sx={{
                  py: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: 3,
                  textTransform: "none",
                  bgcolor: "#166534",

                  "&:hover": {
                    bgcolor: "#14532D",
                  },
                }}
              >
                Contact Verified Settlement Support
              </Button>

              <Typography textAlign="center" color="text.secondary">
                You'll be connected with an official Traceon Guard settlement
                specialist who will guide you through the remaining steps,
                including service fee settlement and submission of your
                withdrawal information.
              </Typography>

              {/* Security Reminder */}

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "#F8FAFC",
                  borderRadius: 3,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <SecurityRoundedIcon color="primary" />

                  <Box>
                    <Typography fontWeight={700}>Security Reminder</Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={1}
                      lineHeight={1.8}
                    >
                      For your protection, only communicate with Traceon Guard
                      through our verified support channel. Never share personal
                      information or make payments to individuals claiming to
                      represent our company outside official communication
                      channels.
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Footer */}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Case ID: {caseId}
                </Typography>

                <Chip color="success" label="Recovery Ready" />
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
