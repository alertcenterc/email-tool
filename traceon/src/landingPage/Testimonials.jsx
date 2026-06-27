import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Business Owner",
    initials: "MJ",
    rating: 5,
    case: "Investment Scam Investigation",
    review:
      "Traceon Guard handled my case professionally from the beginning. The investigation report was detailed, well organized, and helped me understand exactly what happened to my funds.",
  },
  {
    name: "Sarah Williams",
    role: "Crypto Investor",
    initials: "SW",
    rating: 5,
    case: "Blockchain Transaction Analysis",
    review:
      "The AI investigation identified wallet movements that I couldn't track myself. Throughout the process, communication was transparent and professional.",
  },
  {
    name: "David Brown",
    role: "Entrepreneur",
    initials: "DB",
    rating: 5,
    case: "Wire Transfer Investigation",
    review:
      "I appreciated the structured investigation process and secure client portal. The team clearly explained every step and delivered a comprehensive evidence report.",
  },
];

export const Testimonials = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="overline" color="success.main" fontWeight={700}>
            CLIENT TESTIMONIALS
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              fontWeight: 800,
              color: "#0F172A",
            }}
          >
            Trusted by Clients Worldwide
          </Typography>

          <Typography maxWidth={720} color="text.secondary" lineHeight={1.8}>
            Our clients value our professionalism, transparency, and
            evidence-driven investigation process. Here are a few examples of
            their experiences.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {testimonials.map((item) => (
            <Grid item xs={12} md={4} key={item.name}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 5,
                  border: "1px solid",
                  borderColor: "grey.200",
                  transition: ".35s",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 42,
                        color: "#16A34A",
                      }}
                    />

                    <Rating value={item.rating} readOnly />

                    <Typography color="text.secondary" lineHeight={1.9}>
                      "{item.review}"
                    </Typography>

                    <Chip
                      label={item.case}
                      color="success"
                      variant="outlined"
                      sx={{ width: "fit-content" }}
                    />

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor: "#14532D",
                          width: 56,
                          height: 56,
                          fontWeight: 700,
                        }}
                      >
                        {item.initials}
                      </Avatar>

                      <Box>
                        <Typography fontWeight={700}>{item.name}</Typography>

                        <Typography variant="body2" color="text.secondary">
                          {item.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Trust Banner */}

        <Box
          sx={{
            mt: 8,
            p: 5,
            borderRadius: 5,
            bgcolor: "#14532D",
            color: "white",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Stack textAlign="center">
                <Typography variant="h3" fontWeight={800}>
                  98%
                </Typography>

                <Typography>Client Satisfaction</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3}>
              <Stack textAlign="center">
                <Typography variant="h3" fontWeight={800}>
                  24/7
                </Typography>

                <Typography>Secure Case Submission</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3}>
              <Stack textAlign="center">
                <Typography variant="h3" fontWeight={800}>
                  AI
                </Typography>

                <Typography>Investigation Platform</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={3}>
              <Stack textAlign="center">
                <Typography variant="h3" fontWeight={800}>
                  100%
                </Typography>

                <Typography>Confidential Handling</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
