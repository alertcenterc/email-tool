import { Box, CircularProgress, Typography } from "@mui/material";

export const SpinnerLoading = ({ message = "Processing request..." }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 24,
        }}
      >
        <CircularProgress size={60} thickness={5} />
        <Typography variant="subtitle1" fontWeight="medium" mt={2}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};
