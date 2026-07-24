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
import api from "./axios";
import { supportStore } from "./supportStore";


export default function LocationInfo() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      street: "",
      city: "",
      state: "",
      zipcode: "",
    },
  });

   const usaStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
    
  const type = supportStore((state) => state.type);
  const phone = supportStore((state) => state.phone);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await api.post("/location", {
        phone,
        street: data.street,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
      });
      const { success, message } = response.data;

      if (!success)
        return toast.error(message || "Please try again.");

      toast.success(message);

      return navigate("/personal-eligibility");

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
                Step 3 of 4
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={75}
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
              Where Are You Located?
            </Typography>

            <Typography maxWidth={700} color="text.secondary" fontSize={18}>
              Please provide your current residential address. Accurate location
              information helps us process your {type} application and determine the
              assistance programs for you.
            </Typography>
          </Stack>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Controller
              name="street"
              control={control}
              rules={{
                required: "Enter Street Address",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="string"
                  label="Street Address"
                  placeholder="Street"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="city"
              control={control}
              rules={{
                required: "Enter City",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="string"
                  label="City"
                  placeholder="City"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              rules={{ required: "Select state" }}
              render={({ field, fieldState }) => (
                <Autocomplete
                  options={usaStates}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="State"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="zipcode"
              control={control}
              rules={{
                required: "Enter Zip Code",
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="string"
                  label="Zip Code"
                  placeholder="Zip Code"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            {/* Continue */}
            <Button type="submit" size="large" variant="contained" fullWidth>
              Continue
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
              onClick={() => navigate("/support-eligibility")}
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
