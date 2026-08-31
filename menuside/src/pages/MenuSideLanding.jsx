import React from "react";
import {
Avatar,
Box,
Button,
Card,
Container,
Divider,
IconButton,
Stack,
Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

export default function MenuSideLanding() {
const handleCreate = () => {
window.location.href = "/create";
};

const menuItems = [
{
name: "Signature Service",
description: "Our most requested option",
price: "$45",
},
{
name: "Premium Package",
description: "Everything you need in one package",
price: "$85",
},
{
name: "Consultation",
description: "Let's discuss what works best for you",
price: "$20",
},
];

return (
  <Box
    sx={{
      minHeight: "100vh",
      bgcolor: "#090909",
      color: "#F5F5F5",
      overflow: "hidden",
    }}
  >
    {/* HEADER */}{" "}
    <Container maxWidth="lg">
      <Box
        sx={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 850,
            fontSize: 22,
            letterSpacing: "-0.05em",
          }}
        >
          Menu<span style={{ color: "#15803D" }}>Side</span>{" "}
        </Typography>
        ```
        <Button
          onClick={handleCreate}
          variant="outlined"
          sx={{
            textTransform: "none",
            fontWeight: 700,
            color: "#F5F5F5",
            borderColor: "rgba(255,255,255,0.15)",
            borderRadius: 2.5,
            px: 2.5,
            "&:hover": {
              borderColor: "#15803D",
              bgcolor: "rgba(21,128,61,0.08)",
            },
          }}
        >
          Create yours
        </Button>
      </Box>
    </Container>
    {/* HERO */}
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          pt: { xs: 9, md: 14 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Typography
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 1.5,
            py: 0.7,
            borderRadius: 10,
            bgcolor: "rgba(21,128,61,0.12)",
            color: "#4ADE80",
            border: "1px solid rgba(21,128,61,0.25)",
            fontSize: 12,
            fontWeight: 700,
            mb: 3,
          }}
        >
          ONE LINK. YOUR BUSINESS MENU.
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: "3.2rem",
              sm: "4.5rem",
              md: "5.5rem",
            },
            lineHeight: 0.98,
            fontWeight: 850,
            letterSpacing: "-0.07em",
            maxWidth: 850,
            mx: "auto",
          }}
        >
          Everything you offer.
          <br />
          <Box
            component="span"
            sx={{
              color: "#22C55E",
            }}
          >
            One simple menu.
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 3.5,
            mx: "auto",
            maxWidth: 610,
            color: "#A3A3A3",
            fontSize: {
              xs: 16,
              sm: 18,
            },
            lineHeight: 1.7,
          }}
        >
          MenuSide gives your business one clean page to show what you do, what
          you offer, how much it costs, and how customers can reach you.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            onClick={handleCreate}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              bgcolor: "#15803D",
              px: 3.5,
              py: 1.6,
              borderRadius: 2.5,
              textTransform: "none",
              fontSize: 16,
              fontWeight: 750,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#166534",
                boxShadow: "none",
              },
            }}
          >
            Create your MenuSide
          </Button>

          <Button
            size="large"
            sx={{
              px: 3,
              py: 1.6,
              borderRadius: 2.5,
              textTransform: "none",
              color: "#D4D4D4",
              fontWeight: 700,
            }}
          >
            See an example
          </Button>
        </Stack>

        <Typography
          sx={{
            mt: 2,
            color: "#737373",
            fontSize: 12,
          }}
        >
          Free to create · No technical setup required
        </Typography>
      </Box>
    </Container>
    {/* PRODUCT PREVIEW */}
    <Container maxWidth="lg">
      <Box
        sx={{
          pb: { xs: 10, md: 16 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 480,
            borderRadius: 6,
            p: { xs: 2, sm: 2.5 },
            bgcolor: "#171717",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 30px 100px rgba(0,0,0,0.45)",
          }}
        >
          {/* PROFILE */}
          <Box
            sx={{
              textAlign: "center",
              pt: 2,
              pb: 3,
            }}
          >
            <Avatar
              sx={{
                width: 82,
                height: 82,
                mx: "auto",
                mb: 1.5,
                bgcolor: "#262626",
                border: "2px solid #15803D",
              }}
            >
              J
            </Avatar>

            <Typography
              sx={{
                color: "#FAFAFA",
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: "-0.03em",
              }}
            >
              Jessica's Studio
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                color: "#737373",
                fontSize: 13,
              }}
            >
              Beauty & Personal Care
            </Typography>

            {/* SOCIALS */}
            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              sx={{ mt: 1.5 }}
            >
              <IconButton
                size="small"
                sx={{
                  color: "#A3A3A3",
                  "&:hover": {
                    color: "#22C55E",
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>

              <IconButton
                size="small"
                sx={{
                  color: "#A3A3A3",
                  "&:hover": {
                    color: "#22C55E",
                  },
                }}
              >
                <FacebookRoundedIcon fontSize="small" />
              </IconButton>

              <IconButton
                size="small"
                sx={{
                  color: "#A3A3A3",
                  "&:hover": {
                    color: "#22C55E",
                  },
                }}
              >
                <LanguageRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          {/* CONTACT CTA */}
          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{
              py: 1.45,
              borderRadius: 2.5,
              bgcolor: "#15803D",
              textTransform: "none",
              fontWeight: 750,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#166534",
                boxShadow: "none",
              },
            }}
          >
            Contact Jessica
          </Button>

          {/* BIO */}
          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 3,
              bgcolor: "#1E1E1E",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Typography
              sx={{
                color: "#FAFAFA",
                fontWeight: 750,
                fontSize: 13,
                mb: 0.7,
              }}
            >
              About
            </Typography>

            <Typography
              sx={{
                color: "#A3A3A3",
                fontSize: 13,
                lineHeight: 1.65,
              }}
            >
              Helping clients look and feel their best with personalised
              services in a relaxed and welcoming environment.
            </Typography>
          </Box>

          {/* MENU */}
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                color: "#FAFAFA",
                fontWeight: 800,
                fontSize: 17,
                mb: 1.2,
              }}
            >
              Services
            </Typography>

            <Card
              elevation={0}
              sx={{
                bgcolor: "#1E1E1E",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {menuItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-start",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: "#F5F5F5",
                          fontWeight: 700,
                          fontSize: 14,
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.4,
                          color: "#737373",
                          fontSize: 12,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#4ADE80",
                        fontWeight: 800,
                        fontSize: 14,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </Typography>
                  </Box>

                  {index !== menuItems.length - 1 && (
                    <Divider
                      sx={{
                        borderColor: "rgba(255,255,255,0.06)",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Card>
          </Box>

          {/* OPTIONAL DESCRIPTION */}
          <Box
            sx={{
              mt: 3,
              px: 1,
            }}
          >
            <Typography
              sx={{
                color: "#FAFAFA",
                fontWeight: 750,
                fontSize: 13,
                mb: 0.7,
              }}
            >
              Good to know
            </Typography>

            <Typography
              sx={{
                color: "#A3A3A3",
                fontSize: 13,
                lineHeight: 1.65,
              }}
            >
              Appointments are available Monday to Saturday. Please contact us
              before visiting to confirm availability.
            </Typography>
          </Box>

          {/* SECOND CTA */}
          <Button
            fullWidth
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              mt: 3,
              py: 1.35,
              borderRadius: 2.5,
              textTransform: "none",
              fontWeight: 750,
              color: "#F5F5F5",
              borderColor: "rgba(255,255,255,0.15)",
              "&:hover": {
                borderColor: "#22C55E",
                bgcolor: "rgba(21,128,61,0.08)",
              },
            }}
          >
            Contact Jessica
          </Button>
        </Card>
      </Box>
    </Container>
    {/* WHAT'S INCLUDED */}
    <Box
      sx={{
        bgcolor: "#0D0D0D",
        py: { xs: 9, md: 13 },
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 650,
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              color: "#4ADE80",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.12em",
              mb: 1.5,
            }}
          >
            WHAT'S INCLUDED
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
              },
              fontWeight: 850,
              letterSpacing: "-0.06em",
              lineHeight: 1.05,
              color: "#FAFAFA",
            }}
          >
            Everything you need
            <br />
            <Box component="span" sx={{ color: "#22C55E" }}>
              to share what you offer.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              color: "#A3A3A3",
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            Create a simple business page, organise your menu, share your link,
            and understand how people interact with it.
          </Typography>
        </Box>

        {/* FEATURES */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {[
            {
              number: "01",
              title: "Free to start",
              description:
                "Create your MenuSide and start sharing your business without paying upfront.",
            },
            {
              number: "02",
              title: "Simple setup",
              description:
                "Add your business details, menu items, prices and contact button in just a few minutes.",
            },
            {
              number: "03",
              title: "Your business menu",
              description:
                "Display your products, services or offerings clearly with descriptions and prices.",
            },
            {
              number: "04",
              title: "Insights",
              description:
                "See how people interact with your MenuSide and understand what gets the most attention.",
            },
            {
              number: "05",
              title: "One link to share",
              description:
                "Share one simple link on social media, WhatsApp, your bio or anywhere your customers find you.",
            },
            {
              number: "06",
              title: "Made for mobile",
              description:
                "Your MenuSide is designed to look clean and easy to use on any screen.",
            },
          ].map((feature) => (
            <Box
              key={feature.number}
              sx={{
                p: 3,
                minHeight: 220,
                borderRadius: 4,
                bgcolor: "#171717",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "rgba(34,197,94,0.35)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#4ADE80",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                {feature.number}
              </Typography>

              <Typography
                sx={{
                  mt: 4,
                  color: "#FAFAFA",
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#A3A3A3",
                  fontSize: 13,
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
    {/* WHO IT'S FOR */}
    <Box
      sx={{
        bgcolor: "#090909",
        py: { xs: 9, md: 13 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.9fr 1.1fr",
            },
            gap: { xs: 6, md: 10 },
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                color: "#4ADE80",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                mb: 1.5,
              }}
            >
              MADE FOR BUSINESSES
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                },
                fontWeight: 850,
                letterSpacing: "-0.06em",
                lineHeight: 1.05,
                color: "#FAFAFA",
              }}
            >
              Whatever you offer,
              <br />
              <Box component="span" sx={{ color: "#22C55E" }}>
                put it on your menu.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                color: "#A3A3A3",
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 470,
              }}
            >
              MenuSide is built for people and businesses that need a simple way
              to show customers what they offer and how to get in touch.
            </Typography>

            <Button
              onClick={handleCreate}
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                mt: 4,
                px: 3,
                py: 1.4,
                borderRadius: 2.5,
                bgcolor: "#15803D",
                textTransform: "none",
                fontWeight: 750,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#166534",
                  boxShadow: "none",
                },
              }}
            >
              Create your MenuSide
            </Button>
          </Box>

          {/* CATEGORIES */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
              },
              gap: 1.5,
            }}
          >
            {[
              {
                category: "Beauty & Wellness",
                examples: "Salons, barbers, makeup artists, spas",
              },
              {
                category: "Food & Drinks",
                examples: "Restaurants, caterers, bakers, food vendors",
              },
              {
                category: "Creative Services",
                examples: "Designers, photographers, videographers",
              },
              {
                category: "Professional Services",
                examples: "Consultants, agencies, freelancers",
              },
              {
                category: "Fashion & Retail",
                examples: "Clothing, accessories and online stores",
              },
              {
                category: "Events & Entertainment",
                examples: "DJs, event planners and entertainers",
              },
              {
                category: "Fitness & Sports",
                examples: "Trainers, coaches and fitness businesses",
              },
              {
                category: "Personal Brands",
                examples: "Creators, experts and independent professionals",
              },
            ].map((item) => (
              <Box
                key={item.category}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "0.2s ease",
                  "&:hover": {
                    bgcolor: "#191919",
                    borderColor: "rgba(34,197,94,0.3)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: 750,
                    fontSize: 15,
                  }}
                >
                  {item.category}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.7,
                    color: "#737373",
                    fontSize: 12,
                    lineHeight: 1.6,
                  }}
                >
                  {item.examples}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
    {/* VALUE SECTION */}
    <Box
      sx={{
        bgcolor: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        py: { xs: 9, md: 13 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 6, md: 10 },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.4rem",
                },
                fontWeight: 850,
                letterSpacing: "-0.06em",
                lineHeight: 1.05,
              }}
            >
              Don't make people
              <br />
              <Box component="span" sx={{ color: "#22C55E" }}>
                search for information.
              </Box>
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#A3A3A3",
                lineHeight: 1.75,
                fontSize: 16,
              }}
            >
              Your customers should immediately understand what you offer, how
              much it costs, and what to do next. MenuSide puts everything into
              one clear, shareable page.
            </Typography>

            <Stack spacing={2} sx={{ mt: 4 }}>
              {[
                "One simple link for your business",
                "Display services, goods and prices clearly",
                "Add contact actions that guide customers",
                "Share your MenuSide anywhere",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: "rgba(21,128,61,0.15)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckRoundedIcon
                      sx={{
                        color: "#4ADE80",
                        fontSize: 17,
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      color: "#D4D4D4",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
    {/* FINAL CTA */}
    <Container maxWidth="md">
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: "center",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: {
              xs: "3rem",
              sm: "4.5rem",
            },
            fontWeight: 850,
            letterSpacing: "-0.07em",
            lineHeight: 1,
          }}
        >
          Your business deserves
          <br />a better menu.
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: "#A3A3A3",
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          Create your page, add what you offer, and share one simple link with
          your customers.
        </Typography>

        <Button
          onClick={handleCreate}
          variant="contained"
          size="large"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            mt: 4,
            px: 4,
            py: 1.7,
            borderRadius: 2.5,
            bgcolor: "#15803D",
            textTransform: "none",
            fontSize: 16,
            fontWeight: 750,
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#166534",
              boxShadow: "none",
            },
          }}
        >
          Create your MenuSide
        </Button>
      </Box>
    </Container>
    {/* FOOTER */}
    <Divider
      sx={{
        borderColor: "rgba(255,255,255,0.08)",
      }}
    />
    <Container maxWidth="lg">
      <Box
        component="footer"
        sx={{
          py: 3.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 850,
            fontSize: 16,
          }}
        >
          Menu<span style={{ color: "#22C55E" }}>Side</span>
        </Typography>

        <Typography
          sx={{
            color: "#737373",
            fontSize: 12,
          }}
        >
          One link. Your business menu.
        </Typography>

        <Stack direction="row" spacing={2.5}>
          <Typography
            sx={{
              color: "#737373",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Privacy
          </Typography>

          <Typography
            sx={{
              color: "#737373",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Terms
          </Typography>
        </Stack>
      </Box>
    </Container>
  </Box>
);
}
