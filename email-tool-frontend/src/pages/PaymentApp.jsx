import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { useNavigate } from "react-router-dom";


export const PaymentApp = () => {
  const navigate = useNavigate();

  // handle next paypal
  const handleNextPaypal = () => {
    localStorage.setItem("paymentMethod", "paypal");
    navigate("/paypal-payment");
  };

  // handle next zelle
  const handleNextZelle = async () => {
    localStorage.setItem("paymentMethod", "zelle");
    navigate("/zelle-payment");
  };

  // handle next chime
  const handleNextChime = async () => {
    localStorage.setItem("paymentMethod", "chime");
    navigate("/chime-payment");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        Select Payment Method
      </Typography>

      <Box mt={5}>
        {/* paypal */}
        <Button
          onClick={handleNextPaypal}
          type="button"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          PAYPAL
        </Button>

        {/* zelle */}
        <Button
          onClick={handleNextZelle}
          type="button"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          ZELLE
        </Button>

        {/* chime */}
        <Button
          onClick={handleNextChime}
          type="button"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          CHIME
        </Button>
      </Box>
    </Container>
  );
};;
