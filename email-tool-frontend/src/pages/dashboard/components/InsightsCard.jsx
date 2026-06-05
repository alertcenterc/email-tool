import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { dashboardStore } from "../services/dashboardStore";
import { useNavigate } from "react-router-dom";

export default function InsightsCard() {
  const navigate = useNavigate();

  // states
  const user = dashboardStore((state) => state.user);
  
  const task = dashboardStore((state) => state.task);
  const completedTasks = task.filter(t => t.status === "COMPLETED");


  return (
    <>
      <Stack direction="row" spacing={2} mb={2}>
        <Card>
          <CardContent>
            <Typography variant="body1">Balance</Typography>
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
    </>
  );
}
