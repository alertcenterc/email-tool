import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";

export const Navbar = () =>  {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: 80,
          }}
        >
          {/* Logo */}

          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: 3,
                bgcolor: "#14532D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SecurityIcon
                sx={{
                  color: "#fff",
                  fontSize: 28,
                }}
              />
            </Box>

            <Box>
              <Typography fontWeight={800} fontSize="1.35rem" color="success">
                Traceon Guard
              </Typography>

              <Typography
                variant="caption"
                color="success"
                sx={{
                  letterSpacing: 1.2,
                }}
              >
                AI RECOVERY SOLUTIONS
              </Typography>
            </Box>
          </Stack>

          {/* Navigation */}

          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {[
              "Home",
              "How It Works",
              "Services",
              "Case Types",
              "FAQ",
              "Contact",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  cursor: "pointer",
                  fontWeight: 600,
                  color: "#334155",
                  transition: ".25s",

                  "&:hover": {
                    color: "#14532D",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>

          {/* Right Buttons */}

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="text"
              sx={{
                color: "#14532D",
                fontWeight: 700,
                display: {
                  xs: "none",
                  sm: "inline-flex",
                },
              }}
              onClick={() => navigate("/case-email")}
            >
              Sign In
            </Button>

            <Button
              variant="contained"
              disableElevation
              onClick={() => navigate("/case-email")}
              sx={{
                bgcolor: "#14532D",
                px: 3,
                py: 1.2,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,

                "&:hover": {
                  bgcolor: "#166534",
                },
              }}
            >
              Start Free Case Review
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
