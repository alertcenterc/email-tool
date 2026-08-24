import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export default function MenuSideLanding() {
  const handleCreate = () => {
    // Replace with your signup/create-profile route
    window.location.href = "/create";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fff",
        color: "#171717",
      }}
    >
      <Container maxWidth="sm">
        {/* Header */}
        <Box
          component="header"
          sx={{
            py: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={800} letterSpacing="-0.02em">
            MenuSide
          </Typography>
        </Box>

        {/* Hero */}
        <Box
          component="main"
          sx={{
            textAlign: "center",
            pt: { xs: 7, sm: 10 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.05,
            }}
          >
            Your menu.
            <br />
            Your way.
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              mx: "auto",
              maxWidth: 440,
              color: "text.secondary",
              fontSize: "1rem",
              lineHeight: 1.65,
            }}
          >
            One simple page for everything you want people to see and how you
            want them to contact you.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "text.secondary",
              fontSize: 14,
            }}
          >
            Meetups · Services · Content · Contact
          </Typography>

          {/* CTA */}
          <Button
            onClick={handleCreate}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 4,
              px: 3.5,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontSize: 16,
              fontWeight: 700,
              boxShadow: "none",
            }}
          >
            Create your MenuSide
          </Button>

          <Typography
            sx={{
              mt: 1.5,
              color: "text.disabled",
              fontSize: 12,
            }}
          >
            Free to start · Takes a few minutes
          </Typography>
        </Box>

        {/* Phone Preview */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 270,
              border: "7px solid #171717",
              borderRadius: "34px",
              overflow: "hidden",
              bgcolor: "#fafafa",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            {/* Fake phone header */}
            <Box sx={{ p: 2, textAlign: "center" }}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: "auto",
                  borderRadius: "50%",
                  bgcolor: "#e8e8e8",
                }}
              />

              <Typography
                sx={{
                  mt: 1.2,
                  fontWeight: 700,
                  fontSize: 17,
                }}
              >
                Jessica
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "text.secondary",
                }}
              >
                Curvy · Fun · Local
              </Typography>
            </Box>

            {/* Preview CTA */}
            <Box
              sx={{
                mx: 1.5,
                p: 1.1,
                borderRadius: 2,
                bgcolor: "#171717",
                color: "#fff",
                textAlign: "center",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              💬 Text Me
            </Box>

            {/* Preview menu */}
            <Box sx={{ p: 1.5 }}>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                My Menu
              </Typography>

              {[
                ["💕", "Meet Me"],
                ["💆", "Massage"],
                ["🔥", "Content"],
              ].map(([icon, label]) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: 1.2,
                    mb: 1,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    border: "1px solid #e8e8e8",
                  }}
                >
                  <span>{icon}</span>

                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </Typography>

                  <ArrowForwardIcon
                    sx={{
                      ml: "auto",
                      fontSize: 15,
                      color: "text.disabled",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Value proposition */}
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            mb: 7,
          }}
        >
          <FavoriteBorderIcon
            sx={{
              fontSize: 22,
              mb: 1,
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontSize: "1.35rem",
              fontWeight: 750,
              letterSpacing: "-0.02em",
            }}
          >
            Everything in one place.
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              mx: "auto",
              maxWidth: 400,
              color: "text.secondary",
              fontSize: 14,
              lineHeight: 1.65,
            }}
          >
            Share one simple link from your social profile and let people choose
            what they're looking for.
          </Typography>

          <Button
            onClick={handleCreate}
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 3,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Create your MenuSide
          </Button>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 3,
            borderTop: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 1 }}
          >
            <Typography variant="caption" color="text.secondary">
              About
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Privacy
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Terms
            </Typography>
          </Stack>

          <Typography variant="caption" color="text.disabled">
            © {new Date().getFullYear()} MenuSide
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
