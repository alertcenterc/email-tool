import {
  Box,
  Button,
  Chip,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import { dashboardStore } from "./dashboardStore";
import { useNavigate } from "react-router-dom";

export default function CaseOverviewCard() {
  const navigate = useNavigate();

  const scamType = dashboardStore(
      (state) => state.scamType,
    );
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

  const progress = 94;

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 5,
        border: "1px solid",
        borderColor: "grey.200",
        transition: ".3s",

        "&:hover": {
          boxShadow: "0 15px 45px rgba(0,0,0,.06)",
        },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* LEFT */}

        <Grid item xs={12} md={3}>
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight={800}>
              CASE OVERVIEW - {caseId}
            </Typography>

            <Typography
              variant="overline"
              color="success.main"
              fontWeight={700}
            >
              CASE: {lostAmount} - {scamType}
            </Typography>

            <Typography
              variant="overline"
              color="success.main"
              fontWeight={700}
            >
              We can Recovered: {formattedAmount} in 47 minutes.
            </Typography>

            <Typography
              variant="overline"
              color="success.main"
              fontWeight={700}
            >
              Possibility: {progress}%
            </Typography>

            <Chip
              label="Successful Investigation"
              sx={{
                width: "fit-content",
                bgcolor: "#0aeb1d88",
                color: "#010a0af6",
                fontWeight: 700,
              }}
            />

            <Stack direction="row" spacing={1} alignItems="center">
              <ScheduleRoundedIcon fontSize="small" color="action" />

              <Typography variant="body2" color="text.secondary">
                Updated 2 minutes ago
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* CENTER */}

        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700}>
                Investigation Progress --{" "}
              </Typography>

              <Typography color="success.main" fontWeight={700}>
                {progress}%
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 12,
                borderRadius: 10,
              }}
            />

            <Typography color="text.secondary" lineHeight={1.8}>
              Great news! Our recovery specialists have successfully traced and
              secured your recovered funds after completing a comprehensive
              investigation of your submitted evidence, transaction records, and
              blockchain activity. Your funds are now ready for release. To
              complete the recovery process, please proceed with the withdrawal
              request below and follow the verification steps to have your
              recovered funds transferred to your designated account.
            </Typography>
          </Stack>
        </Grid>

        {/* RIGHT */}

        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  bgcolor: "#F0FDF4",
                  border: "1px solid #BBF7D0",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      startIcon={<AccountBalanceWalletRoundedIcon />}
                      onClick={() => navigate("/withdraw-recovery")}
                      sx={{
                        py: 1.8,
                        borderRadius: 3,
                        bgcolor: "#14532D",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "1rem",

                        "&:hover": {
                          bgcolor: "#166534",
                        },
                      }}
                    >
                      Continue To Withdraw Recovered Funds
                    </Button>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
