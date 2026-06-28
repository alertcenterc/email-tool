import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router-dom";
import { newCaseStore } from "./newCaseStore";

export default function CaseSubmitted() {
  const navigate = useNavigate();
 // states
  const email = newCaseStore((state) => state.email);
  const scamType = newCaseStore((state) => state.scamType);
  const paymentMethod = newCaseStore((state) => state.paymentMethod);
  const amount = newCaseStore((state) => state.amount);

  const formattedAmount = parseFloat(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F8FAFC",
        px: 2,
        py: 5,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 540,
          p: { xs: 4, md: 5 },
          borderRadius: 5,
          border: "1px solid",
          borderColor: "grey.200",
          boxShadow: "0 20px 60px rgba(15,23,42,.08)",
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
          Case Submitted Successfully
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          We’ve started analyzing your case. This may take a few moments.
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: "success.50",
            my: 4,
          }}
        >
          <Stack spacing={1}>
            <Typography variant="body1" color="text.secondary">
              ✔️ Analyzing scam patterns
            </Typography>

            <Typography variant="body2" color="text.secondary">
              ⏳ Mapping transaction flow
            </Typography>

            <Typography variant="body2" color="text.secondary">
              ⏳ Generating initial findings
            </Typography>
          </Stack>
        </Paper>

        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 3,
            bgcolor: "success.50",
            my: 4,
          }}
        >
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2">
              Scam Type:{" "}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {scamType}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body2">Payment Method: </Typography>
            <Typography variant="body1" color="text.secondary">
              {paymentMethod}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body2">Amount Lost (USD): </Typography>
            <Typography variant="body1" color="text.secondary">
              {formattedAmount}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body2">Recovery Probability: </Typography>
            <Typography variant="body1" color="text.secondary">
              80%
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            justifyContent=""
            alignItems="center"
          >
            <Typography variant="body2">Recovery Confidence Level: </Typography>
            <Typography variant="body1" color="text.secondary">
              High
            </Typography>
          </Stack>
        </Paper>

        <Button
          onClick={() => navigate("/case-dashboard")}
          variant="contained"
          color="success"
          size="large"
          fullWidth
        >
          View Full Case Dashboard →
        </Button>
      </Paper>
    </Box>
  );
}
