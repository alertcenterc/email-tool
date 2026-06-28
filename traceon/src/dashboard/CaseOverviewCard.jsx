import {
  Box,
  Chip,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { dashboardStore } from "./dashboardStore";

export default function CaseOverviewCard() {
    // states
  const updateEmailStore = dashboardStore((state) => state.progress);
  const progress = 68;

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
            <Typography
              variant="overline"
              color="success.main"
              fontWeight={700}
            >
              CASE OVERVIEW
            </Typography>

            <Typography variant="h5" fontWeight={800}>
             Case_Code-TG-2026-00452
            </Typography>

            <Chip
              label="Under Investigation"
              sx={{
                width: "fit-content",
                bgcolor: "#DBEAFE",
                color: "#1D4ED8",
                fontWeight: 700,
              }}
            />

            <Stack direction="row" spacing={1} alignItems="center">
              <ScheduleRoundedIcon fontSize="small" color="action" />

              <Typography variant="body2" color="text.secondary">
                Updated 12 minutes ago
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* CENTER */}

        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700}>Investigation Progress</Typography>

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
              Our AI investigation engine is analyzing your submitted evidence,
              transaction history, and blockchain activity. You'll receive
              updates here as your investigation progresses.
            </Typography>
          </Stack>
        </Grid>

        {/* RIGHT */}

        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  bgcolor: "#F8FAFC",
                  height: "100%",
                }}
              >
                <Stack spacing={1}>
                  <AccountBalanceWalletRoundedIcon color="success" />

                  <Typography variant="caption" color="text.secondary">
                    Amount Reported
                  </Typography>

                  <Typography fontWeight={800} fontSize="1.25rem">
                    $12,500
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  bgcolor: "#F8FAFC",
                  height: "100%",
                }}
              >
                <Stack spacing={1}>
                  <CategoryRoundedIcon color="primary" />

                  <Typography variant="caption" color="text.secondary">
                    Scam Type
                  </Typography>

                  <Typography fontWeight={800}>Crypto Fraud</Typography>
                </Stack>
              </Paper>
            </Grid>

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
                  <AssignmentRoundedIcon
                    sx={{
                      color: "#16A34A",
                      fontSize: 35,
                    }}
                  />

                  <Box>
                    <Typography fontWeight={700}>Next Milestone</Typography>

                    <Typography variant="body2" color="text.secondary">
                      Wallet tracing and exchange analysis are currently in
                      progress.
                    </Typography>
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
