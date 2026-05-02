import { Box, Container, Typography, Paper, Stack, Avatar, Button } from "@mui/material";
import {CheckCircle2Icon,} from "lucide-react";
import {RiVoiceprintFill} from "react-icons/ri"

export const PaymentReceipt = () => {

  // fetch data from storage
  const name = localStorage.getItem("name");
  const amount = localStorage.getItem("amount");

  return (
    <Container maxWidth="md">
      <Typography variant="h5" mb={3} align="center" p={1}>
        Confirmation
      </Typography>
      <Box>
        <Stack spacing={3} alignItems={"center"} justifyContent={"center"}>
          <CheckCircle2Icon color="green" size={40} />

          <Typography mb={2}>
            We’re sending your money now.
            {name} will get it in a few minutes.
          </Typography>

          <Typography variant="h5" mb={3}>
            ${amount}.00
          </Typography>

          <Avatar />

          <Typography >
            We added {name} to your recipients list.
          </Typography>
          <Typography mb={2} color="blue">
            Edit the recipient details
          </Typography>

          <Typography mb={3}>
            Add a Siri shortcut, such as "Pay {name}" to save time when sending
            money.
          </Typography>

          <Stack direction="row" spacing={1} border={1} borderRadius={1} p={1}>
            <RiVoiceprintFill size={24} color="blue"/>
            <Typography>Add to Siri</Typography>
          </Stack>

          <Button type="button" variant="contained" fullWidth sx={{ mt: 2 }}>
            Done
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};;
