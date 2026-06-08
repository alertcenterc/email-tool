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
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";
import { withdrawStore } from "./withdrawStore";
import { dashboardStore } from "../dashboard/services/dashboardStore";

export default function SelectWithdrawalMethod() {
  const navigate = useNavigate();

  const methods = [
    {
      id: "2",
      activateWalletAddress: "bc1q6qtsc00pmatuz7hf4uagy2fz9qu7tfj72ula7y",
      name: "Bitcoin (BTC)",
      subtitle: "Most Popular Cryptocurrency",
      icon: <CurrencyBitcoinIcon color="warning" sx={{ fontSize: 40 }} />,
    },

    {
      id: "3",
      activateWalletAddress: "0x4f63860E67b2984a8558c8a463708b1D2839f752",
      name: "Ethereum (ETH)",
      subtitle: "Secure Blockchain Network",
      icon: <AccountBalanceWalletIcon color="primary" sx={{ fontSize: 40 }} />,
    },
    {
      id: "1",
      activateWalletAddress: "THJwSFfgQP5PVJiMcX5UrdjnuP6H3cFfjn",
      name: "USDT (TRC20)",
      subtitle: "Fast & Low Fees",
      icon: <PaidIcon color="success" sx={{ fontSize: 40 }} />,
    },

    {
      id: "4",
      activateWalletAddress: "LP3DK6bXzbRvZNkSScsbUGwwsUxW8m3ztG",
      name: "Litecoin (LTC)",
      subtitle: "Low Transaction Costs",
      icon: <AccountBalanceWalletIcon color="action" sx={{ fontSize: 40 }} />,
    },
  ];

  const updateWalletNameStore = withdrawStore(
    (state) => state.updateWalletNameStore,
  );

  const onSubmit = async (name, activateWalletAddress) => {
    updateWalletNameStore(name, activateWalletAddress);
    navigate("/admin/withdraw-page");
  };

  const withdrawHistory = dashboardStore((state) => state.withdrawHistory);
  const columns = [
    { field: "amount", headerName: "Amount ($USD)", flex: 1 },
    { field: "method", headerName: "Withdraw Method", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "createdAt", headerName: "Date", flex: 1 },
  ];

  return (
    <Container maxWidth="md">
      <Box py={6}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" color="info" fontWeight="bold">
            Choose Withdrawal Method
          </Typography>
        </Box>

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
                        onSubmit(method.name, method.activateWalletAddress)
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

        <Box mt={5}>
          <Typography variant="h5" color="info" mb={2} fontWeight="bold">
            Recent Withdrawals
          </Typography>

          {withdrawHistory?.length ? (
            <Box sx={{ width: "100%" }}>
              <DataGrid
                rows={withdrawHistory}
                columns={columns}
                getRowId={(row) => row.id}
                autoHeight
                pageSizeOptions={[5, 10, 25]}
                initialState={{
                  pagination: { paginationModel: { page: 0, pageSize: 10 } },
                }}
              />
            </Box>
          ) : (
            <Typography color="info">
              No withdrawal history available yet.
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
