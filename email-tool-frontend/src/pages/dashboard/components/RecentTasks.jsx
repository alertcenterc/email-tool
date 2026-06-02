import { Typography, Button } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { toast } from "react-toastify";
import { dashboardStore } from "../services/dashboardStore";

export default function RecentTasks() {
  // states
  const task = dashboardStore((state) => state.task);

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
          onClick={() => toast.success(params.row.status)}
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
