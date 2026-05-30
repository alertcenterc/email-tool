import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import api from "../../../../utils/axios";
import { userStore } from "../services/usersStore";
import { SpinnerLoading } from "../../../components/SpinnerLoading";

export default function FetchUserById() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // states
  const updateUserData = userStore((state) => state.updateUserData);

  const onSubmit = async (data) => {

    setIsLoading(true);
    try {
      const response = await api.post("/admin/user/fetch-user-data", {
        field: "id",
        phone: "1234567890123",
        email: "invalid@invalid.com",
        id: data.id,
      });
      const responseData = response?.data;
      const { success, message } = responseData;

      if (!success) {
        toast.error(message);
        return;
      }

      const { userData } = responseData;

      updateUserData(userData);
      toast.success(message);
      return navigate("/admin/users/user-full-data");
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            Fetch User Data By ID
          </Typography>

          {/* id */}
          <TextField
            label="Search by ID"
            type="search"
            size="medium"
            {...register("id", {
              required: "ID is required!",
            })}
            error={!!errors.id}
            helperText={errors.id?.message}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isLoading}
          >
            Fetch User
          </Button>
        </Stack>
      </form>
      {isLoading && <SpinnerLoading message="loading" />}
    </>
  );
}
