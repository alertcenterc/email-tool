import { Box, Container, Typography, Paper, Stack, Avatar, Button } from "@mui/material";
import {CheckCircle2Icon, } from "lucide-react";
import {RiVoiceprintFill} from "react-icons/ri";

export const ZelleReceipt = () => {
  // fetch data from storage
  const name = localStorage.getItem("name") || "name";
  const amount = localStorage.getItem("amount");

  // first letter of name
  const nameFirstLetter = name.charAt(0).toUpperCase();

  return (
    <Container maxWidth="md">
      <Typography variant="h6" mb={3} align="center" p={1}>
        Confirmation
      </Typography>
      <Box>
        <Stack spacing={3} alignItems={"center"} justifyContent={"center"}>
          <CheckCircle2Icon color="green" size={40} />

          <Typography mb={2} align="center">
            We’re sending your money now. {""} {name.toUpperCase()} will get it
            in a few minutes.
          </Typography>

          <Typography variant="h5" mb={3}>
            ${amount}.00
          </Typography>

          <Avatar>{nameFirstLetter}</Avatar>

          <Typography>
            We added {name.toUpperCase()} to your recipients list.
          </Typography>
          <Typography mb={2} color="blue">
            Edit the recipient details
          </Typography>

          <Typography mb={3}>
            Add a Siri shortcut, such as "Pay {name.toUpperCase()}" to save
            time when sending money.
          </Typography>

          <Stack direction="row" spacing={1} border={1} borderRadius={1} p={1}>
            <RiVoiceprintFill size={24} color="blue" />
            <Typography>Add to Siri</Typography>
          </Stack>

          <Button type="button" variant="contained" fullWidth sx={{ mt: 2 }}>
            Done
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
