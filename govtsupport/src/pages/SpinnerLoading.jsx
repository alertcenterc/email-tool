import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

export const SpinnerLoading = ({
  message = "Please wait while we process your request.",
}) => {
  return (
    <Backdrop
      open
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
        bgcolor: "rgba(3, 31, 26, 0.75)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 320,
          mx: 2,
          py: 4,
          px: 3,
          borderRadius: 3,
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)",
        }}
      >
        <CircularProgress
          size={48}
          thickness={4}
          sx={{
            color: "#00C389",
          }}
        />

        <Typography
          variant="h6"
          fontWeight={600}
          mt={3}
          textAlign="center"
          color="text.primary"
        >
          Just a moment…
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mt={1}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
};
