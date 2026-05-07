import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import { CheckCircle2Icon, XCircle} from "lucide-react";
import { RiVoiceprintFill,  } from "react-icons/ri";
import { MdChevronLeft, MdChevronRight, MdMoreHoriz, MdArrowBack } from "react-icons/md";

export const ChimeReceipt = () => {

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
        mb={-16}
      >
        <MdArrowBack size={28} color="white" />
        <MdMoreHoriz size={28} color="white" />
      </Stack>
      {/* MIDDLE */}
      <Box display="flex" flexDirection="column" alignItems="center" gap={0}>
        <Avatar sx={{ width: 56, height: 56 }}>A</Avatar>

        <Typography variant="h6" color="white">
          AALIYAH ROMERO
        </Typography>

        <Typography variant="body2" color="grey">
          Payment from Checking ***** 
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" gap={0}>
        <Typography variant="h4" color="white">
          $150
        </Typography>

        <Typography variant="body2" color="grey">
          For: GIFT
        </Typography>

        <Typography variant="body2" color="grey">
          May 7, 2026 at 20:233 PM
        </Typography>
      </Box>

      {/* BOTTOM */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <XCircle color="red" size={24} />
        <Typography variant="body2" color="white">
          FAILED
        </Typography>
      </Stack>
    </Container>
  );
};
