import {
  Stack,
  Typography,
} from "@mui/material";


import FetchUserById from "./components/FetchUserById";

export default function UserHomePage() {
  return (
    <>
      <Typography variant="h4" fontWeight={"bold"} mb={3}>
        Users Overview
      </Typography>

      {/*users*/}
     

      {/*searrch users*/}
      <Stack direction="row" spacing={3} bgcolor={'white'}>
        <FetchUserById />
        
      </Stack>

      {/*recent users*/}
   
    </>
  );
}
