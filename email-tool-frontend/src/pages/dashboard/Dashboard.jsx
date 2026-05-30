import {
  Typography,
} from "@mui/material";

import InsightsCard from "./components/InsightsCard";
import RecentTasks from "./components/RecentTasks";


export default function Dashboard() {

  return (
    <>
      {/*insights*/}
      <InsightsCard />

      {/*tasks- recent 200 */}
      <RecentTasks />
    
    </>
  );
}
