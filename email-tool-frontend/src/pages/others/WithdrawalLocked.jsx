import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

export default function WithdrawalLocked() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      p={2}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 4,
          borderRadius: 4,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <PendingActionsIcon color="warning" sx={{ fontSize: 80 }} />

          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Withdrawal Access Pending
          </Typography>

          <Typography variant="body1" color="text.secondary" textAlign="center">
            Your account is active and tasks can be completed normally. However,
            withdrawal access is currently awaiting activation review.
          </Typography>

          <Alert severity="info" sx={{ width: "100%" }}>
            Your preferred withdrawal method has been saved and is awaiting
            confirmation.
          </Alert>

          <Paper
            variant="outlined"
            sx={{
              width: "100%",
              p: 3,
              borderRadius: 3,
            }}
          >
            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Activation Status
                </Typography>

                <Typography fontWeight="bold" color="warning.main">
                  Pending
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Preferred Withdrawal Method
                </Typography>

                <Typography fontWeight="bold">USDT (TRC20)</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Activation Requirement
                </Typography>

                <Typography fontWeight="bold">
                  $35 Verification Deposit
                </Typography>
              </Stack>
            </Stack>
          </Paper>

          <Typography variant="body2" color="text.secondary" textAlign="center">
            Once the activation requirement has been confirmed, withdrawal
            features will automatically become available on your account.
          </Typography>

          <Button variant="contained" color="warning" size="large" fullWidth>
            Complete Activation
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
