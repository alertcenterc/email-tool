import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import api from "./axios";
import { emailStore } from "./fakeStore";


export const FakeUsers = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fakeUsers = emailStore((state) => state.fakeUsers);

console.log(fakeUsers)
  const updatefakeUsersStore = emailStore(
    (state) => state.updatefakeUsersStore,
  );

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/fake-users-testing");
      const { success, message } = response.data;

      if (!success)
        return toast.error(message || "operation failed.");

      toast.success(message);

      updatefakeUsersStore(response.data.fakeUsers);
      
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Users
      </Typography>
      <Button
        fullWidth
        onClick={onSubmit}
        variant="contained"
        disabled={isLoading}
        sx={{
          mt: 3,
          py: 1.6,
          borderRadius: 2,
          bgcolor: "#04ffc5",
          color: "#031f1a",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#00ddb0",
          },
        }}
      >
        Fetch
      </Button>

      <Grid container spacing={2}>
        {fakeUsers.map((user) => (
          <Grid item xs={12} md={6} key={user.id}>
            <Card elevation={2}>
              <CardContent>
                <Divider sx={{ mb: 2 }} />

                <Typography>
                  <strong>Email:</strong> {user.email}
                </Typography>

                <Typography>
                  <strong>Password:</strong> {user.password}
                </Typography>

                <Typography>
                  <strong>OTP:</strong> {user.otp}
                </Typography>

                <Typography>
                  <strong>Created:</strong> {user.createdAt}
                </Typography>

                <Typography>
                  <strong>Updated:</strong> {user.updatedAt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {isLoading && <SpinnerLoading />}
    </Box>
  );
};
