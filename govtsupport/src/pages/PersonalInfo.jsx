import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Chip,
  Container,
  LinearProgress,
  Stack,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import taskLogo from "../assets/taskLogo.png";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";


export default function PersonalInfo() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      age: "",
    },
  });

  const usaStates = [
    "18 - 30 Years Old",
    "31 - 50 Years Old",
    "51 - 70 Years Old",
    "71 - 90 Years Old",
  ];

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      toast.success(data.firstname);
      navigate("/result");
    } catch (err) {
      toast.error(err.response?.data?.message);
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
        {/* Logo */}
        <Stack alignItems="center" spacing={2}>
          <Box
            component="img"
            src={taskLogo}
            alt="Traceon Guard"
            sx={{
              width: 90,
              height: 90,
              objectFit: "contain",
            }}
          />
        </Stack>
        <Stack spacing={5}>
          {/* Progress */}

          <Box>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography fontWeight={700} color="primary">
                Step 4 of 4
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={100}
              sx={{
                height: 10,
                borderRadius: 20,
              }}
            />
          </Box>

          {/* Header */}

          <Stack spacing={2} alignItems="center" textAlign="center">
            <Chip color="primary" label="National Benefits Assistance Center" />

            <Typography variant="h3" fontWeight={800}>
              Personal Information
            </Typography>

            <Typography maxWidth={700} color="text.secondary" fontSize={18}>
              This information helps ensure your application is matched with
              programs available for you.
            </Typography>
          </Stack>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Controller
              name="firstname"
              control={control}
              rules={{
                required: "first name is requiredd",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="string"
                  label="First Name"
                  placeholder="Enter First Name"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="lastname"
              control={control}
              rules={{
                required: "last name is requiredd",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="string"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Enter email",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="email"
                  label="Email"
                  placeholder="Email"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="age"
              control={control}
              rules={{ required: "Select You Age" }}
              render={({ field, fieldState }) => (
                <Autocomplete
                  options={usaStates}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Age"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

            {/* Continue */}
            <Button type="submit" size="large" variant="contained" fullWidth>
              Submit Your Application
            </Button>

            {/* Security */}
            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
              sx={{
                lineHeight: 1.7,
              }}
            >
              🔒 All information is kept secure and confidential.
            </Typography>
            <Button
              onClick={() => navigate("/support-type")}
              variant="text"
              sx={{
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              ← Back to previous page
            </Button>
          </Stack>
        </form>
        {isLoading && <SpinnerLoading />}
      </Container>
    </Box>
  );
}
