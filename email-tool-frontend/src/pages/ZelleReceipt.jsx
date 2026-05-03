import { Box, Container, Typography, Paper, Stack, Avatar, Button } from "@mui/material";
import {CheckCircle2Icon, } from "lucide-react";
import {RiVoiceprintFill,} from "react-icons/ri";
import { MdChevronLeft, MdChevronRight , MdMoreHoriz} from "react-icons/md";

export const ZelleReceipt = () => {
  // fetch data from storage
  const name = localStorage.getItem("name") || "name";
  const amount = localStorage.getItem("amount");

  // first letter of name
  const nameFirstLetter = name.charAt(0).toUpperCase();

  return (
    <Container sx={{backgroundColor: "grey.200"}} maxWidth="xs" >

      <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
        <MdChevronLeft size={24} color="blue" />
        <Typography variant="h6" align="center">
          Confirmation
        </Typography>

        <MdMoreHoriz size={24} color="blue" />
      </Stack>

      <Box>
        <Stack spacing={3} alignItems={"center"} justifyContent={"center"}>
          <CheckCircle2Icon color="green" size={40} />

          <Typography mb={2} align="center" variant="body5">
            We’re sending your money now. {""} {name.toUpperCase()} will get it
            in a few minutes.
          </Typography>

          <Typography variant="h5" mb={3}>
            ${amount}.00
          </Typography>

          <Avatar>{nameFirstLetter}</Avatar>

          <Stack spacing={0}>
            {" "}
            <Typography align="center" variant="body5">
              We added {name.toUpperCase()} to your recipients list.
            </Typography>
            <Stack direction="row" spacing={1} justifyContent={"center"}>
              <Typography color="blue" variant="body5">
                Edit the recipient details
              </Typography>
              <MdChevronRight size={24} color="blue" />
            </Stack>
          </Stack>

          <Typography align="center" variant="body5" mb={3}>
            Add a Siri shortcut, such as "Pay {name.toUpperCase()}" to save time
            when sending money on Zelle.
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
