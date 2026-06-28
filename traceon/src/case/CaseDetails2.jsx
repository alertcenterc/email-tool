import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import taskLogo from "../assets/taskLogo.png";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SpinnerLoading } from "../components/SpinnerLoading";

export const CaseDetails2 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      description: "",
      files: [],
    },
  });

  const files = watch("files");
  console.log(files)

  const removeFile = (indexToRemove) => {
    const updated = files.filter((_, i) => i !== indexToRemove);
    setValue("files", updated);
  };

  const navigate = useNavigate();

  // states

  const onSubmit = async (data) => {
    if (files.length > 5) return toast.warning("Max 5 pictures allowed!");
    if (files.length <= 0) return toast.warning("add atleast 1 image evidence");
    
    try {
      setIsLoading(true);

        const formData = new FormData();
        //appending datas
        formData.append("description", data.description);

        // images appending
        files.forEach((image, index) => {
          formData.append("images", {
            uri: image.uri,
            name: image.fileName || `image_${index}.jpg`,
            type: image.mimeType || "image/jpeg",
          });
        });

        // post to endpoint
        const headers = formData.getHeaders
          ? formData.getHeaders()
          : { "Content-Type": "multipart/form-data" };

        //const response = await api.post("/giftcard/sell", formData, {
        //  headers,
        //});
     navigate("/case-details3");
     toast.error("hey");
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F8FAFC",
        px: 2,
        py: 5,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 540,
          p: { xs: 4, md: 5 },
          borderRadius: 5,
          border: "1px solid",
          borderColor: "grey.200",
          boxShadow: "0 20px 60px rgba(15,23,42,.08)",
        }}
      >
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

          <Typography variant="h4" fontWeight={800} textAlign="center">
            Add Details & Evidence
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{
              maxWidth: 420,
              lineHeight: 1.8,
            }}
          >
            How the scam occurred, what you were promised, and how the
            interaction happened. Include any names, platforms, or links
            involved.
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Controller
              name="description"
              control={control}
              rules={{
                required: "Please describe what happened",
                minLength: {
                  value: 20,
                  message: "Add a bit more detail",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Describe what happened"
                  multiline
                  rows={6}
                  fullWidth
                  placeholder="Explain how the scam happened, what you were told, and how you sent the money..."
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error?.message ||
                    "The more detail, the better your analysis"
                  }
                />
              )}
            />

            <Typography>Upload evidence pictures/screenshots</Typography>

            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                p: 3,
                textAlign: "center",
                cursor: "pointer",
              }}
              component="label"
            >
              <input
                type="file"
                multiple
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  setValue("files", files, { shouldValidate: true });
                }}
              />

              <Typography variant="body2">PNG, JPG, & JPEG only</Typography>
            </Box>

            {/* Continue */}
            <Button
              type="submit"
              size="large"
              variant="contained"
              fullWidth
              sx={{
                py: 1.6,
                borderRadius: 3,
                bgcolor: "#14532D",
                textTransform: "none",
                fontWeight: 700,

                "&:hover": {
                  bgcolor: "#166534",
                },
              }}
            >
              Continue
            </Button>
          </Stack>
        </form>

        <Box mt={2} display="flex" gap={2} flexWrap="wrap">
          {files?.map((file, index) => (
            <Box
              key={index}
              sx={{ position: "relative", width: 80, height: 80 }}
            >
              {/* Image */}
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                width={80}
                height={80}
                style={{
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />

              {/* Remove Button */}
              <IconButton
                size="small"
                onClick={() => removeFile(index)}
                sx={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  background: "white",
                  boxShadow: 1,
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>

        {/* Security */}
        <Typography
          variant="caption"
          color="text.secondary"
          textAlign="center"
          sx={{
            lineHeight: 1.7,
          }}
        >
          🔒 The more details you provide, the more accurate your case analysis
          will be. Your files are encrypted and securely stored Only used for
          your case analysis.
        </Typography>
        <Button
          onClick={() => navigate("/case-details1")}
          variant="text"
          sx={{
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          ← Back to previous page
        </Button>
        {isLoading && <SpinnerLoading />}
      </Paper>
    </Box>
  );
}
