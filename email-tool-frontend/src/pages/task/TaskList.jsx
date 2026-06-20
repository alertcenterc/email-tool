import { Typography, Button, Box } from "@mui/material";
import { dashboardStore } from "../dashboard/services/dashboardStore";
import { taskStore } from "./taskStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Virtuoso} from "react-virtuoso"
import { TaskCard } from "../dashboard/components/Cards";


export default function TaskList() {
    const navigate = useNavigate();
  

  // states
    const task = dashboardStore((state) => state.task);
    const updateTaskStore = taskStore((state) => state.updateTaskStore);
  
    const selectTask = (taskid) => {
      const selectedTask = task.find((t) => t.taskId === taskid);
      if (selectedTask.status === "COMPLETED") return toast.warning(
        "This Task Already Completed, Take Another Available Task",
      );
      updateTaskStore(selectedTask);
      navigate("/admin/task-page");
    };


  return (
    <>
      <Typography variant="h5" color="success" mt={4}>
        Available Task For You
      </Typography>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <Virtuoso
          style={{ height: "100vh" }}
          data={task}
          itemContent={(index, item) => (
            <TaskCard
              taskId={item.taskId}
              reward={item.reward}
              type={item.type}
              status={item.status}
            />
          )}
        />
      </Box>
    </>
  );
}
