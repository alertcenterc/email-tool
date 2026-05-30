import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function FastSupportPage() {
  return (
    <Container maxWidth="sm">
      <Box py={5}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
          Fast Support
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={4}>
          Need help? Contact our support team through any of the channels below.
        </Typography>

        <Stack spacing={3}>
          {/* WhatsApp */}
          <Card>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <WhatsAppIcon color="success" sx={{ fontSize: 60 }} />

                <Typography variant="h6" fontWeight="bold">
                  WhatsApp Support
                </Typography>

                <Typography color="text.secondary" textAlign="center">
                  Chat directly with our support team for faster assistance.
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  href="https://wa.me/2348000000000"
                  target="_blank"
                >
                  Chat on WhatsApp
                </Button>
              </Stack>
            </CardContent>
          </Card>

          {/* Email */}
          <Card>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <EmailIcon color="primary" sx={{ fontSize: 60 }} />

                <Typography variant="h6" fontWeight="bold">
                  Email Support
                </Typography>

                <Typography color="text.secondary" textAlign="center">
                  Send us your questions and we'll respond as soon as possible.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href="mailto:support@prioritytask.com"
                >
                  Send Email
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mt={4}
        >
          Support is available 24/7 for account, task, and withdrawal-related
          inquiries.
        </Typography>
      </Box>
    </Container>
  );
}
