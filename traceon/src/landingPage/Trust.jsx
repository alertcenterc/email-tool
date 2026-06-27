import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ShieldIcon from "@mui/icons-material/Shield";
import LockIcon from "@mui/icons-material/Lock";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PublicIcon from "@mui/icons-material/Public";

const trustItems = [
  {
    icon: <ShieldIcon sx={{ fontSize: 42 }} />,
    title: "Professional Investigation",
    description:
      "Every case is reviewed using structured investigative methodologies and AI-assisted analysis.",
  },
  {
    icon: <LockIcon sx={{ fontSize: 42 }} />,
    title: "Confidential & Secure",
    description:
      "Your documents, evidence, and personal information remain protected with enterprise-grade security.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 42 }} />,
    title: "AI-Powered Analysis",
    description:
      "Advanced algorithms help identify suspicious transaction patterns and digital fund movements.",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 42 }} />,
    title: "Global Investigation Support",
    description:
      "We assist clients with digital asset investigations involving international transactions and platforms.",
  },
];

export const Trust = () => {
  return (
    <Box py={10} bgcolor="white">
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" mb={7}>
          <Typography variant="overline" color="success.main" fontWeight={700}>
            WHY TRACEON GUARD
          </Typography>

          <Typography variant="h3" fontWeight={800} color="#0F172A">
            Trusted Digital Investigation Platform
          </Typography>

          <Typography color="text.secondary" maxWidth={700} mx="auto">
            Our platform combines artificial intelligence with experienced
            investigation specialists to provide a secure, transparent, and
            evidence-driven approach to digital asset investigations.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {trustItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.200",
                  borderRadius: 5,
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <Box color="#166534">{item.icon}</Box>

                    <Typography fontWeight={700} fontSize={20}>
                      {item.title}
                    </Typography>

                    <Typography color="text.secondary" lineHeight={1.8}>
                      {item.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
