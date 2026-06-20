import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
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

  const methods = [
    {
      id: "2",
      activateWalletAddress: "bc1q6qtsc00pmatuz7hf4uagy2fz9qu7tfj72ula7y",
      name: "Bitcoin (BTC)",
      subtitle: "Most Popular Cryptocurrency",
      icon: <CurrencyBitcoinIcon color="warning" sx={{ fontSize: 40 }} />,
      walletLabel: "Bitcoin Wallet",
      walletplaceholder: "Enter Your Bitcoin Wallet Address",
    },

    {
      id: "3",
      activateWalletAddress: "0x4f63860E67b2984a8558c8a463708b1D2839f752",
      name: "Ethereum (ETH)",
      subtitle: "Secure Blockchain Network",
      icon: <AccountBalanceWalletIcon color="primary" sx={{ fontSize: 40 }} />,
      walletLabel: "Ethereum Wallet",
      walletplaceholder: "Enter Your Ehtereum Wallet Address",
    },
  ];

  const updateWalletNameStore = withdrawStore(
    (state) => state.updateWalletNameStore,
  );

  const onSubmit = async (name, activateWalletAddress, walletLabel, walletplaceholder, ) => {
    updateWalletNameStore(
      name,
      activateWalletAddress,
      walletLabel,
      walletplaceholder,
    );
    navigate("/withdraw-page");
  };


  const onSubmitPaypal = async () => {
    updateWalletNameStore("PayPal", "paypal", "PayPal Account", "Enter Your PayPal");
    navigate("/withdraw-page");
  };

  const onSubmitApplepay = async () => {
    updateWalletNameStore("ApplePay", "applepay", "ApplePay Account", "Enter Your ApplePay");
    navigate("/withdraw-page");
  };

  return (
    <Container maxWidth="md">
      <Box py={6}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h6" color="info" fontWeight="bold">
            Choose Withdrawal Method
          </Typography>
        </Box>

        {/* Paypal */}
        <Stack spacing={2}>
          <Card variant="outlined" sx={{ overflow: "hidden" }}>
            <CardContent>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={2} alignItems="center" flex={1}>
                  <FaPaypal size={24} color="blue" />
                  <Box>
                    <Typography fontWeight="bold">PayPal</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Receive your earnings to your PayPal account
                    </Typography>
                  </Box>
                </Stack>

                <CardActions sx={{ p: 0, mt: { xs: 2, sm: 0 } }}>
                  <Button
                    onClick={onSubmitPaypal
                    }
                    variant="contained"
                    size="small"
                  >
                    Select
                  </Button>
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </Stack>

        {/* apple pay */}
        <Stack spacing={2}>
          <Card variant="outlined" sx={{ overflow: "hidden" }}>
            <CardContent>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={2} alignItems="center" flex={1}>
                  <FaApplePay size={36} />
                  <Box>
                    <Typography fontWeight="bold">Apple Pay</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Withdraw directly to your Apple Pay easily
                    </Typography>
                  </Box>
                </Stack>

                <CardActions sx={{ p: 0, mt: { xs: 2, sm: 0 } }}>
                  <Button
                    onClick={onSubmitApplepay}
                    variant="contained"
                    size="small"
                  >
                    Select
                  </Button>
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </Stack>

        <Stack spacing={2}>
          {methods.map((method) => (
            <Card
              key={method.id}
              variant="outlined"
              sx={{ overflow: "hidden" }}
            >
              <CardContent>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="space-between"
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    flex={1}
                  >
                    {method.icon}

                    <Box>
                      <Typography fontWeight="bold">{method.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {method.subtitle}
                      </Typography>
                    </Box>
                  </Stack>

                  <CardActions sx={{ p: 0, mt: { xs: 2, sm: 0 } }}>
                    <Button
                      onClick={() =>
                        onSubmit(
                          method.name,
                          method.activateWalletAddress,
                          method.walletLabel,
                          method.walletplaceholder,
                        )
                      }
                      variant="contained"
                      size="small"
                    >
                      Select
                    </Button>
                  </CardActions>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
