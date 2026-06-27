import { Button, Box , Paper} from "@mui/material";
import { Faq } from "./Faq";
import { useNavigate } from "react-router-dom";

export default function FaqsPage() {
    const navigate = useNavigate();
    

    const toHome = async () => {
      navigate("/");
    };
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 3,
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 3,
          borderRadius: 4,
        }}
      >
        <Faq />

        <Button
          onClick={toHome}
          variant="contained"
          color="success"
          size="large"
          fullWidth
        >
          Back to Home Page
        </Button>
      </Paper>
    </Box>
  );
}
