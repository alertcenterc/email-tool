import { Typography, Button } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { dashboardStore } from "../services/dashboardStore";
import { taskStore } from "../../task/taskStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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


  const columns = [
    { field: "taskId", headerName: "Task-Id", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "reward", headerName: "Reward ($USD)", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },

    {
      field: "action",
      type: "actions",
      headerName: "Action",
      getActions: (params) => [
        <Button
          variant="contained"
          onClick={() => selectTask(params.row.taskId)}
        >
          VIEW
        </Button>,
      ],
    },
  ];

  return (
    <>
      <Typography variant="h5" mt={4}>
        Available Task For You
      </Typography>
      <DataGrid
        rows={task}
        columns={columns}
        getRowId={(row) => row.taskId}
        autoHeight
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } },
        }}
      />
    </>
  );
}
