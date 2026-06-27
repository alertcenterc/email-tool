import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

const stats = [
  {
    value: "2,500+",
    label: "Cases Submitted",
    description:
      "Individuals and businesses have trusted Traceon Guard to begin professional investigations.",
  },
  {
    value: "35+",
    label: "Countries Served",
    description:
      "Supporting clients with digital investigation services across multiple jurisdictions.",
  },
  {
    value: "24/7",
    label: "Case Submission",
    description:
      "Securely submit your case and supporting evidence whenever you're ready.",
  },
  {
    value: "100%",
    label: "Confidential Process",
    description:
      "Every investigation is handled through a secure and confidential workflow.",
  },
];

export const Stats = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F8FAFC",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            border: "1px solid",
            borderColor: "grey.200",
            background: "linear-gradient(135deg,#14532D 0%,#166534 100%)",
            color: "white",
          }}
        >
          <Grid container spacing={5}>
            {stats.map((stat) => (
              <Grid item xs={12} sm={6} md={3} key={stat.label}>
                <Stack spacing={2} textAlign="center">
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: {
                        xs: "2.3rem",
                        md: "3rem",
                      },
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography fontWeight={700} fontSize="1.1rem">
                    {stat.label}
                  </Typography>

                  <Typography
                    sx={{
                      opacity: 0.85,
                      lineHeight: 1.8,
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
