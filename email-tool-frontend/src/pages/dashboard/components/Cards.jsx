import {
  Typography,
  Stack,
  Button,
  Card,
  Paper,
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
import { taskStore } from "../../task/taskStore";
import { toast } from "react-toastify";



export const BalanceCard = () => {
  const user = dashboardStore((state) => state.user);

  return (
  
      <Card sx={{ flex: 1, minWidth: 0 }}>
        <CardContent>
          <Typography variant="body1" textAlign={'center'} color="success">Available Balance</Typography>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            {Number(user.balance).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </CardContent>
      </Card>
  );
};

export const TaskCard = ({taskId, reward, type, status}) => {
const navigate = useNavigate();

  const task = dashboardStore((state) => state.task);
   const updateTaskStore = taskStore((state) => state.updateTaskStore);
  
    const selectTask = (taskid) => {
      const selectedTask = task.find((t) => t.taskId === taskid);
  
       if (selectedTask.status === "COMPLETED") return toast.warning(
         "This Task Already Completed, Take Another Available Task",
       );
       
      updateTaskStore(selectedTask);
      navigate("/task-page");
  
    };
  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        p: 1,
        borderRadius: 3,
        backgroundColor: "grey.50",
        mb: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="body1">Id: {taskId}</Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Typography variant="body1">Reward: </Typography>
          <Typography variant="body1" color="success" fontWeight={"bold"}>
            {" "}
            ${reward}
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="body2" color="text.secondary" mb={1} mt={1}>
        Type: {type}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Typography variant="body1">Status: </Typography>
          <Typography variant="body2" color="success" fontWeight={"bold"}>
            {" "}{status}
          </Typography>
        </Stack>

        <Button
          onClick={() => selectTask(taskId)}
          variant="contained"
          color="success"
          size="small"
        >
          Accept
        </Button>
      </Stack>
    </Paper>
  );
};

export const ActionCard = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Button
        onClick={() => navigate("/withdraw-method")}
        variant="contained"
        color="success"
        size="medium"
      >
        <Withdraw />
        Withdraw
      </Button>

      <Button
        onClick={() => navigate("/task-list")}
        variant="contained"
        color="success"
        size="medium"
      >
        <Task />
        Tasks
      </Button>

      <Button
        onClick={() => navigate("/support")}
        variant="contained"
        color="success"
        size="medium"
      >
        <Support />
        Support
      </Button>
    </Stack>
  );
};