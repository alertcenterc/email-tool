import { Box, Container, Typography, Paper, Stack, Avatar, Button } from "@mui/material";
import { CheckCircle} from "lucide-react";
import { MdChevronLeft, MdChevronRight , MdMoreHoriz} from "react-icons/md";
import { FaShare, FaRedo, FaEllipsisH } from "react-icons/fa";

import paypalLogo from "../assets/paypalLogo.png";

export const PaypalReceipt = () => {
  // fetch data from storage
  const name = localStorage.getItem("name") || "name";
  const amount = localStorage.getItem("amount");
  const email = localStorage.getItem("email");

  
  return (
    <Container
      sx={{ minHeight: "100vh", backgroundColor: "grey.50" }}
      maxWidth="xs"
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <MdChevronLeft size={24} color="blue" />
        <Typography variant="h6" align="center">
          Confirmation
        </Typography>

        <MdMoreHoriz size={24} color="blue" />
      </Stack>

      <Box>
        <Box component="img" src={paypalLogo} width={100} height={50} />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={0}
          bgcolor={"grey.200"}
        >
          <CheckCircle color="blue" width={80} height={80} />

          <Typography variant="h6" fontWeight={"bold"}>
            You paid ${amount}.00 USD
          </Typography>
          <Typography variant="h6">to {name}</Typography>

          <Typography variant="body2" color="blue">
            details
          </Typography>
        </Box>

        <Box flexDirection="column" alignItems="center" gap={2} mt={4} borderBottom={1}>
          <Typography variant="body2" fontWeight={"bold"}>
            Paid with
          </Typography>

          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={1}
          >
            <Typography variant="body2">PayPal Credit</Typography>
            <Typography variant="body2" fontWeight={"bold"}>
              ${amount}.00 USD
            </Typography>
          </Stack>

          <Typography variant="body2" color="grey" mb={4} mt={1}>
            This transaction will appear on your statement as {name}
          </Typography>

          <Typography variant="body2" fontWeight={"bold"} mb={1}>
            Purchase details
          </Typography>

          <Typography variant="body2">
            Receipt number: 54K675453T765401P
          </Typography>
          <Typography variant="body2">
            We’ll send confirmation to: {email}
          </Typography>

          <Typography variant="body2" fontWeight={600} mb={1} mt={2}>
            Merchant details
          </Typography>
          <Typography variant="body2" mb={1}>{name}</Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={6} px={2}
        >
          <FaShare size={16}  />
          <FaRedo size={16}  />
          <FaEllipsisH size={16}  />
        </Stack>
      </Box>
    </Container>
  );
};
