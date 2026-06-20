import {
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { dashboardStore } from "../services/dashboardStore";
import { useNavigate } from "react-router-dom";

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

      <Card sx={{ flex: 1, minWidth: 0 }}>
        <CardContent>
          <Typography variant="body1">Completed Tasks</Typography>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            {completedTasks.length}
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
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
      <Card sx={{ flex: 1, minWidth: 0 }}>
        <CardContent>
          <Typography variant="body1">Available Balance</Typography>
          <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
            {Number(user.balance).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </CardContent>
      </Card>

        <Card>
          <CardContent>
            <Typography variant="body1">Role</Typography>
            <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
              AI/Images
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="body1">Completed</Typography>
            <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
              {completedTasks.length}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Button
              onClick={() => navigate("/admin/withdraw-method")}
              variant="contained"
              color="success"
              size="medium"
            >
              Withdraw Funds
            </Button>
          </CardContent>
        </Card>
      </Stack>

  );
};