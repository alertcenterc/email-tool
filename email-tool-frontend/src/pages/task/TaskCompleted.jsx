import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function TaskCompleted() {
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
          maxWidth: 500,
          width: "100%",
          p: 5,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <CheckCircleRoundedIcon
          color="success"
          sx={{
            fontSize: 90,
            mb: 2,
          }}
        />

        <Typography
          variant="h4"
          fontWeight="bold"
          color="success.main"
          gutterBottom
        >
          Task Completed!
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Your submission has been received successfully and your account
          balance has been updated.
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: "success.50",
            mb: 4,
          }}
        >
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary">
              Reward Earned
            </Typography>

            <Typography variant="h4" fontWeight="bold" color="success.main">
              +$5.00
            </Typography>
          </Stack>
        </Paper>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Thank you for completing this task.
        </Typography>

        <Button variant="contained" color="success" size="large" fullWidth>
          Continue
        </Button>
      </Paper>
    </Box>
  );
}
