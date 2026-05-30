import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";


export default function SelectWithdrawalMethod() {
    const navigate = useNavigate();

  const methods = [
    {
      name: "USDT (TRC20)",
      subtitle: "Fast & Low Fees",
      icon: <PaidIcon color="success" sx={{ fontSize: 40 }} />,
    },
    {
      name: "Bitcoin (BTC)",
      subtitle: "Most Popular Cryptocurrency",
      icon: <CurrencyBitcoinIcon color="warning" sx={{ fontSize: 40 }} />,
    },
    {
      name: "Ethereum (ETH)",
      subtitle: "Secure Blockchain Network",
      icon: <AccountBalanceWalletIcon color="primary" sx={{ fontSize: 40 }} />,
    },
    {
      name: "Litecoin (LTC)",
      subtitle: "Low Transaction Costs",
      icon: <AccountBalanceWalletIcon color="action" sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Container maxWidth="sm">
      <Box py={5}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={1}>
          Choose Withdrawal Method
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={4}>
          Select your preferred cryptocurrency to receive your withdrawal.
        </Typography>

        <Stack spacing={2}>
          {methods.map((method) => (
            <Card key={method.name}>
              <CardActionArea
                sx={{
                  p: 2,
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    {method.icon}

                    <Box>
                      <Typography fontWeight="bold">{method.name}</Typography>

                      <Typography variant="body2" color="text.secondary">
                        {method.subtitle}
                      </Typography>
                    </Box>
                  </Stack>

                  <Button
                    onClick={() => navigate("/admin/withdraw-page")}
                    variant="contained"
                  >
                    Select
                  </Button>
                </Stack>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
