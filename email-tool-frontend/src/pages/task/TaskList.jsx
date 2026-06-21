import { Typography, Button, Box , Paper} from "@mui/material";
import { dashboardStore } from "../dashboard/services/dashboardStore";
import {Virtuoso} from "react-virtuoso"
import { TaskCard } from "../dashboard/components/Cards";

export default function TaskList() {
  // states
    const task = dashboardStore((state) => state.task);

  return (
    <Box
  sx={{
    minHeight: "100dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    px: 2,
    py: 3,
    bgcolor: "#f5f5f5",
  }}
>
  <Paper
    elevation={4}
    sx={{
      width: "100%",
      maxWidth: 420,
      p: 3,
      borderRadius: 4,
    }}
  >
      <Typography variant="h5" color="textPrimary" mt={4} textAlign={'center'} mb={1}>
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
  </Paper>
  </Box>
  );
}
