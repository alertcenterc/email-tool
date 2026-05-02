import { Box, Container, Typography, Paper, Stack, Avatar, Button } from "@mui/material";

export const PaymentReceipt = () => {
  // fetch data from storage
  const name = localStorage.getItem("name");
  const amount = localStorage.getItem("amount");

  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Stack spacing={3} alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h5" mb={3} bgcolor={"darkgrey"}>
            Confirmation
          </Typography>

          <Avatar>JD</Avatar>

          <Typography variant="h6" mb={3}>
            We’re sending your money now. {name} will get it in a few minutes.
          </Typography>

          <Typography variant="h5" mb={3}>
            ${amount}.00
          </Typography>

          <Avatar>JD</Avatar>

          <Typography variant="h6" mt={3}>
            We added {name} to your recipients list.
          </Typography>
          <Typography variant="h6" mb={3}>
            Edit the recipient details
          </Typography>

          <Typography variant="h6" mb={3}>
            Add a Siri shortcut, such as "Pay {name}" to save time when sending
            money.
          </Typography>

          <Stack direction="row" spacing={1}>
            <Avatar>JD</Avatar>
            <Typography variant="h6">Add to Siri</Typography>
          </Stack>

          <Button
            type="button"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Done
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};;
