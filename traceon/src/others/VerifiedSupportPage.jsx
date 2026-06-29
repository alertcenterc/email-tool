import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

export default function VerifiedSupportPage() {
  return (
    <Box
      sx={{
        bgcolor: "#F8FAFC",
        minHeight: "100vh",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Alert
            severity="success"
            sx={{
              borderRadius: 4,
            }}
          >
            <AlertTitle>Verified Settlement Support</AlertTitle>
            Your investigation has been successfully completed. Our settlement
            specialists will guide you through the remaining verification and
            withdrawal process.
          </Alert>

          <Card
            elevation={0}
            sx={{
              borderRadius: 5,
              border: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <CardContent sx={{ p: 5 }}>
              <Stack spacing={4}>
                <Box textAlign="center">
                  <Chip
                    icon={<VerifiedUserRoundedIcon />}
                    color="success"
                    label="Official Traceon Guard Support"
                    sx={{ mb: 2 }}
                  />

                  <Typography variant="h4" fontWeight={800}>
                    Secure Settlement Assistance
                  </Typography>

                  <Typography color="text.secondary" mt={2}>
                    To protect your account and recovered funds, all settlement
                    instructions are provided only through our verified support
                    team.
                  </Typography>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="h6" fontWeight={700} mb={3}>
                    Our specialists will help you with:
                  </Typography>

                  <Stack spacing={2}>

                    <Typography>✓ Withdrawal account confirmation</Typography>

                    <Typography>✓ Settlement service fee guidance</Typography>

                    <Typography>✓ Final withdrawal processing</Typography>
                  </Stack>
                </Box>

                <Card
                  elevation={0}
                  sx={{
                    bgcolor: "#F0FDF4",
                    borderRadius: 4,
                  }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="center">
                      <WhatsAppIcon color="success" sx={{ fontSize: 60 }} />

                      <Typography variant="h6" fontWeight={700}>
                        Official WhatsApp
                      </Typography>

                      <Typography color="text.secondary">
                        Average response time:
                        <strong> under 5 minutes</strong>
                      </Typography>

                      <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        color="success"
                        startIcon={<SupportAgentRoundedIcon />}
                        href="https://wa.me/14054739064"
                        target="_blank"
                        sx={{
                          py: 1.7,
                          textTransform: "none",
                          fontWeight: 700,
                        }}
                      >
                        Continue on WhatsApp
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                  }}
                >
                  <CardContent>
                    <Stack spacing={2} alignItems="center">
                      <EmailRoundedIcon color="primary" sx={{ fontSize: 55 }} />

                      <Typography variant="h6" fontWeight={700}>
                        Official Email
                      </Typography>

                      <Typography color="text.secondary">
                        support@traceonguard.com
                      </Typography>

                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<EmailRoundedIcon />}
                        href="mailto:support@traceonguard.com"
                        sx={{
                          py: 1.5,
                          textTransform: "none",
                        }}
                      >
                        Send Email
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>

                <Alert
                  severity="info"
                  icon={<SecurityRoundedIcon />}
                  sx={{
                    borderRadius: 3,
                  }}
                >
                  <AlertTitle>Security Reminder</AlertTitle>
                  Never communicate with individuals claiming to represent
                  Traceon Guard through unofficial phone numbers, email
                  addresses, websites, or social media accounts. Always use the
                  verified contact methods displayed on this page.
                </Alert>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
