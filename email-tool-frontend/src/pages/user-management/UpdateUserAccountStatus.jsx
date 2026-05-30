import { Typography, TextField, Button, Stack } from "@mui/material";
import { userStore } from "./services/usersStore";
import { toast } from "react-toastify";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../../utils/axios";

export default function UpdateUserAccountStatus() {
  // states
  const userData = userStore((state) => state.userData);
  const {
    id,
    email,
    phone,
    status,
    phoneOtpVerificationNeeded,
    isReferralRewardActivated,
  } = userData;
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post("/admin/user/update-account-status", {
        id,
        accountStatus: data.accountStatus,
      });
      const responseData = response?.data;
      const { success, message } = responseData;

      if (!success) {
        toast.error(message);
        return;
      }

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
      <Typography variant="h4" fontWeight={"bold"} mb={3}>
        Update User Status
      </Typography>
      <Typography variant="h4" fontWeight={"bold"} mb={3}>
        User ID: {id}
      </Typography>
      {/*basic info*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">Email: {email}</Typography>
        <Typography variant="h6">Phone: {phone}</Typography>
      </Stack>

      {/*status*/}
      <Stack direction="row" spacing={3} mb={3}>
        <Typography variant="h6">Account Status: {status}</Typography>
        <Typography variant="h6">
          OTP Status: {phoneOtpVerificationNeeded ? "true" : "false"}
        </Typography>
        <Typography variant="h6">
          Referral Status: {isReferralRewardActivated ? "true" : "false"}
        </Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            Update Account Status
          </Typography>

          {/* account status */}
          <TextField
            label="Enter Account status"
            type="text"
            size="medium"
            {...register("accountStatus", {
              required: "account status is required!",
            })}
            error={!!errors.accountStatus}
            helperText={errors.accountStatus?.message}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isLoading}
          >
            Update Account Status
          </Button>
        </Stack>
      </form>
      {isLoading && <SpinnerLoading message="loading" />}
    </>
  );
}
