import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const stats = [
  {
    number: "50",
    suffix: "States",
    title: "Nationwide Program Access",
  },
  {
    number: "5",
    suffix: "Programs",
    title: "Major Assistance Categories",
  },
  {
    number: "24/7",
    suffix: "",
    title: "Secure Online Application",
  },
  {
    number: "100%",
    suffix: "",
    title: "Online Application Process",
  },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,#0B2E59 0%, #082447 100%)",
        color: "white",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {stats.map((item) => (
            <Grid item xs={6} md={3} key={item.title}>
              <Stack spacing={1} alignItems="center" textAlign="center">
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: {
                      xs: "2.8rem",
                      md: "4rem",
                    },
                    color: "#FFC72C",
                    lineHeight: 1,
                  }}
                >
                  {item.number}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "1.2rem",
                        md: "1.8rem",
                      },
                      ml: 0.5,
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    {item.suffix}
                  </Typography>
                </Typography>

                <Typography
                  sx={{
                    opacity: 0.82,
                    fontSize: 17,
                  }}
                >
                  {item.title}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
