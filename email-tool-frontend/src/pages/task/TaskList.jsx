import { Typography, Button, Box } from "@mui/material";
import { dashboardStore } from "../dashboard/services/dashboardStore";
import {Virtuoso} from "react-virtuoso"
import { TaskCard } from "../dashboard/components/Cards";

export default function TaskList() {
  // states
    const task = dashboardStore((state) => state.task);

  return (
    <>
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
    </>
  );
}
