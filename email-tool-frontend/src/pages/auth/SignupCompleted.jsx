import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router-dom";


export default function SignupCompleted() {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      bgcolor="background.default"
      px={{ xs: 2, sm: 3 }}
      py={4}
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
          Signup Completed!
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Your have successfully signup and your account has been created.
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Login To Your Account to Start Earning Today!
        </Typography>

        <Button
          onClick={() => navigate("/auth/login")}
          variant="contained"
          color="success"
          size="large"
          fullWidth
        >
          Continue to Login
        </Button>
      </Paper>
    </Box>
  );
}
