import { Typography, Button } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { dashboardStore } from "../services/dashboardStore";
import { taskStore } from "../../task/taskStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Virtuoso} from "react-virtuoso"
import { TaskCard } from "./Cards";

export default function RecentTasks() {
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
  );
}
