import { Stack, Typography , TextField, Button, Box, Paper} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { taskStore } from "./taskStore";
import { useState } from "react";
import { toast } from "react-toastify";

import { SpinnerLoading } from "../../components/SpinnerLoading";

export default function TaskPage() {
     const [isLoading, setIsLoading] = useState(false);
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const navigate = useNavigate();

    // states
      const task = taskStore((state) => state.task);
      const { taskId, type, imageUrl, question,  reward, } = task;

        const onSubmit = async (data) => {
          try {
            setIsLoading(true);
            navigate("/auth/login");
          } catch (err) {
            toast.error(
              err.response?.data?.message || "Signup failed, please try again!",
            );
          } finally {
            setIsLoading(true);
          }
        };
        return (
          <>
            <Box
              maxWidth={700}
              mx="auto"
              mt={4}
              p={3}
              bgcolor="#f5f5f5"
              borderRadius={3}
              boxShadow={3}
            >
              {/* Header */}
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                color={"success"}
                mb={3}
              >
                Study the image below and answer the question.
              </Typography>

              {/* Task Info */}
              <Stack spacing={2}>
                <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={500}>Task Type</Typography>
                    <Typography fontWeight="bold">{type}</Typography>
                  </Stack>
                </Paper>

                <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={500}>Reward</Typography>
                    <Typography fontWeight="bold" color="success.main">
                      ${reward}
                    </Typography>
                  </Stack>
                </Paper>

                <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={500}>Task-Id</Typography>
                    <Typography fontWeight="bold">{taskId}</Typography>
                  </Stack>
                </Paper>
              </Stack>

              {/* Question */}
              <Box mt={4} p={3} bgcolor="black" borderRadius={2} boxShadow={1}>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  color={"info"}
                  mb={2}
                >
                  {question}
                </Typography>

                <Box
                  component="img"
                  src={imageUrl}
                  alt="Task Image"
                  sx={{
                    width: "100%",
                    maxHeight: 200,
                    objectFit: "contain",
                    borderRadius: 2,
                    border: "1px solid #ddd",
                    p: 1,
                    bgcolor: "white",
                  }}
                />
              </Box>

              {/* Form */}
              <Box mt={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    label="Your Answer"
                    type="text"
                    fullWidth
                    {...register("answer", {
                      required: "Answer is required!",
                    })}
                    error={!!errors.answer}
                    helperText={errors.answer?.message}
                  />

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    mt={3}
                  >
                    <Button
                      type="button"
                      color="warning"
                      variant="outlined"
                      size="large"
                      fullWidth
                    >
                      Leave Task
                    </Button>

                    <Button
                      type="submit"
                      color="success"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Complete Task
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Box>

            {isLoading && <SpinnerLoading />}
          </>
        );
}
