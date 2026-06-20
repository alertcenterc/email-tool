import {
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { dashboardStore } from "../services/dashboardStore";
import { useNavigate } from "react-router-dom";
import Home from "@mui/icons-material/HomeOutlined";
import Task from "@mui/icons-material/TaskAltOutlined";
import Withdraw from "@mui/icons-material/AccountBalanceWalletOutlined";
import Support from "@mui/icons-material/SupportAgentOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";

export const BalanceCard = () => {
  const task = dashboardStore((state) => state.task);
  const completedTasks = task.filter((t) => t.status === "COMPLETED");

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <Card sx={{ flex: 1, minWidth: 0 }}>
        <CardContent>
          <Typography variant="body1">Available Balance</Typography>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            {Number("3500.55").toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export const ActionCard = () => {
  const navigate = useNavigate();

  // states
  const user = dashboardStore((state) => state.user);

  const task = dashboardStore((state) => state.task);
  const completedTasks = task.filter((t) => t.status === "COMPLETED");

  return (
    <Stack direction={"row"} spacing={2} mb={2} justifyContent={'center'}>
      <Button
        onClick={() => navigate("/admin/withdraw-method")}
        variant="contained"
        color="success"
        size="medium"
      >
        Withdraw
      </Button>

      <Button
        onClick={() => navigate("/admin/withdraw-method")}
        variant="contained"
        color="success"
        size="medium"
      >
        Tasks
      </Button>

      <Button
        onClick={() => navigate("/admin/withdraw-method")}
        variant="contained"
        color="success"
        size="medium"
      >
        Support
      </Button>
    </Stack>
  );
};