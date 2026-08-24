import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
  
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import api from "./axios";


export default function MenuCount() {
  const [isLoading, setIsLoading] = useState(false);

  const [view, setView] = useState("0");
  const [click, setClick] = useState("0");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      profileId: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await api.post("/count", {
        profileId: data.profileId,
      });

      const { success, message } = response.data;

      if (!success) {
        toast.error(message || "Please try again.");
        return;
      }

      setView(response.data.views);
      setClick(response.data.textMeClicks);

      toast.success(message);
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F7FB",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Progress */}

          <Box>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ lineHeight: 1.15 }}
              >
                {view} - views
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ lineHeight: 1.15 }}
              >
                {click} - clicks
              </Typography>
            </Stack>
          </Box>

          {/* Header */}
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Controller
              name="profileId"
              control={control}
              rules={{
                required: "user name is requiredd",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="string"
                  label="username"
                  placeholder="Enter user Name"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            {/* Continue */}
            <Button type="submit" size="large" variant="contained" fullWidth>
              COUNT
            </Button>
          </Stack>
        </form>
        {isLoading && <SpinnerLoading />}
      </Container>
    </Box>
  );
}
