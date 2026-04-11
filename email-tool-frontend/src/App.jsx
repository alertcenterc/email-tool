import { useState } from "react";
import { SpinnerLoading } from "./components/SpinnerLoading";
import { useForm } from "react-hook-form";

import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

export default function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
     const response =  await axios.post("https://email-tool-yvld.onrender.com/send-email", data);

     if(!response.data.success) return alert(response.data.message);

      alert("Email sent!");

    } catch (err) {
      alert(err.response.data.message);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h5">Paypal Email Sender</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <TextField
            fullWidth
            label="Customer Email"
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
            }}
          />

          {/* Amount */}
          <TextField
            fullWidth
            label="Amount"
            type="number"
            margin="normal"
            {...register("amount", {
              required: "Amount is required",
              min: {
                value: 1,
                message: "Amount must be greater than 0",
              },
            })}
            error={!!errors.amount}
            helperText={errors.amount?.message}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
            }}
          />

          {/* Name */}
          <TextField
            fullWidth
            label="Customer Name"
            margin="normal"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Email"}
          </Button>
        </form>
      </Box>
      {isLoading && <SpinnerLoading message="loading..." />}
    </Container>
  );
}
