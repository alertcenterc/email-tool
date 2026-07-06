import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
  Paper
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import PaidIcon from "@mui/icons-material/Paid";
import { FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";


import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";
import { withdrawStore } from "./withdrawStore";

export default function SelectWithdrawalMethod() {
  const navigate = useNavigate();


  const updateWalletNameStore = withdrawStore(
    (state) => state.updateWalletNameStore,
  );

  const onSubmitPaypal = async () => {
    updateWalletNameStore("PayPal", "paypal", "PayPal Account", "Enter Your PayPal");
    navigate("/withdraw-page");
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 3,
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 3,
          borderRadius: 4,
        }}
      >
          <Typography variant="h6" color="info" fontWeight="bold">
            Choose Withdrawal Method
          </Typography>

          {/* Paypal */}
          <Stack spacing={2}>
            
          </Stack>
      </Paper>
    </Box>
  );
}
