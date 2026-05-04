import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import { CheckCircle2Icon, } from "lucide-react";
import { RiVoiceprintFill,  } from "react-icons/ri";
import { MdChevronLeft, MdChevronRight, MdMoreHoriz, MdArrowBack } from "react-icons/md";

export const ChimeReceipt = () => {
  // fetch data from storage
  const name = localStorage.getItem("name") || "name";
  const amount = localStorage.getItem("amount");
  const email = localStorage.getItem("email");

  // date and time
  const getFormattedDate = () => {
    return new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }
  const date = getFormattedDate();

  // first letter of name
  const nameFirstLetter = name.charAt(0).toUpperCase();

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(180deg, #0b3d22 0%, #062f22 40%, #031f17 100%)",
        py: 2,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={0}
      >
        <MdArrowBack size={28} color="white" />
        <MdMoreHoriz size={28} color="white" />
      </Stack>
      {/* MIDDLE */}
      <Box display="flex" flexDirection="column" alignItems="center" gap={0}>
        <Avatar sx={{ width: 56, height: 56 }}>{nameFirstLetter}</Avatar>

        <Typography variant="h6" color="white">
          {name}
        </Typography>

        <Typography variant="body2" color="grey">
          Payment to {email}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" gap={0}>
        <Typography variant="h4" color="white">
          -${amount}
        </Typography>

        <Typography variant="body2" color="grey">
          For: purchase
        </Typography>

        <Typography variant="body2" color="grey">
          {date}
        </Typography>
      </Box>

      {/* BOTTOM */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <CheckCircle2Icon color="green" size={24} />
        <Typography variant="body2" color="white">
          Complete
        </Typography>
      </Stack>
    </Container>
  );
};;
