import { Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { dashboardStore } from "../services/dashboardStore";
import {Virtuoso} from "react-virtuoso"
import { TaskCard } from "./Cards";

export default function RecentTasks() {

  // states
  const task = dashboardStore((state) => state.task);

  return (
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
  );
}
