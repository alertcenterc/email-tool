import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const testimonials = [
  {
    name: "Sarah M.",
    state: "Texas",
    text: "The online application was simple to complete, and I appreciated the clear guidance throughout the process.",
  },
  {
    name: "David R.",
    state: "Florida",
    text: "Everything was straightforward. The instructions were easy to understand, and the process felt organized.",
  },
  {
    name: "Angela T.",
    state: "Ohio",
    text: "I completed my application from my phone in just a few minutes. It was much easier than I expected.",
  },
  {
    name: "Michael J.",
    state: "California",
    text: "The step-by-step application made everything easy to follow. I always knew what information was needed.",
  },
  {
    name: "Jennifer L.",
    state: "Georgia",
    text: "I was surprised by how smooth the online process was. The portal was easy to use from start to finish.",
  },
  {
    name: "Robert C.",
    state: "North Carolina",
    text: "The support team answered my questions quickly and helped me understand the application requirements.",
  },
  {
    name: "Emily W.",
    state: "Pennsylvania",
    text: "The website was very clear and easy to navigate. Completing my application took less time than I expected.",
  },
  {
    name: "James B.",
    state: "Arizona",
    text: "I appreciated receiving updates throughout the process. It gave me confidence that my application was progressing.",
  },
  {
    name: "Maria G.",
    state: "New York",
    text: "Everything worked well on my phone. I was able to complete my application without needing a computer.",
  },
  {
    name: "Daniel H.",
    state: "Illinois",
    text: "The instructions were written in plain language, making the application process easy to understand.",
  },
  {
    name: "Patricia S.",
    state: "Virginia",
    text: "I liked that I could complete everything online without complicated paperwork. The experience was very convenient.",
  },
  {
    name: "Christopher A.",
    state: "Colorado",
    text: "The application portal was fast, secure, and easy to use. I felt supported throughout the entire process.",
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#F8FAFC",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={8}>
          <Typography color="primary" fontWeight={700}>
            APPLICANT EXPERIENCES
          </Typography>

          <Typography variant="h3" fontWeight={800} textAlign="center">
            What Applicants Are Saying
          </Typography>

          <Typography color="text.secondary" textAlign="center" maxWidth={700}>
            Sample testimonials shown below are for design purposes. Replace
            them with verified applicant feedback before publishing.
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
                  border: "1px solid #E6ECF2",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Rating value={5} readOnly sx={{ mb: 3 }} />

                  <Typography color="text.secondary" lineHeight={1.9} mb={4}>
                    "{item.text}"
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar>{item.name.charAt(0)}</Avatar>

                    <Box>
                      <Typography fontWeight={700}>{item.name}</Typography>

                      <Typography color="text.secondary" fontSize={14}>
                        {item.state}
                      </Typography>
                    </Box>
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
