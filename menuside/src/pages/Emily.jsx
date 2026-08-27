import {
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
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import roxie from "../assets/roxie.jpeg";
import { useEffect } from "react";
import api from "../axios";


const profile = {
  name: "Emily",
  phone: "+1 (832) 433-2745",
  image:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
};

const meetupItems = [
  { duration: "1 Hour", price: "$400" },
  { duration: "2 Hours", price: "$700" },
  { duration: "Overnight", price: "$1,400" },
  { duration: "2hrs Sensual massage", price: "$300" },
];

const contentItems = [
  { title: "Video Call show🍆🍑", price: "$100" },
  { title: "Custom nude videos 🍑👀", price: "$50" },
  {
    title: "💦my new sex videos include, cumshots, doggy, and pov",
    price: "$100",
  },
  { title: "Join my sexy private snapchat/telegram🔞", price: "$30" },
];

export const Emily = () => {

  const profileId = "emily";

  useEffect(() => {
    api.post("/views", { profileId }).catch(() => {});
  }, [profileId]);

  const phone = "+18324332745";

  const handleTextMe = () => {
    navigator.sendBeacon(
      "https://email-tool-yvld.onrender.com/clicks",
      new Blob(
        [
          JSON.stringify({
            profileId,
          }),
        ],
        { type: "application/json" },
      ),
    );

    window.location.href = `sms:${phone}`;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fafafa",
        color: "#171717",
        pb: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ pt: 3 }}>
        {/* PROFILE */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
          <Box
            component="img"
            src={roxie}
            alt={profile.name}
            sx={{
              width: 92,
              height: 92,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />

          <Box>
            <Typography variant="h5" fontWeight={700} sx={{ lineHeight: 1.15 }}>
              {profile.name}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.6 }}>
              Curvy • Fun • Local
            </Typography>

            <Chip
              label="173k views"
              size="small"
              sx={{
                mt: 1,
                height: 25,
                fontSize: 12,
                bgcolor: "#f1f1f1",
              }}
            />
          </Box>
        </Stack>

        {/* PRIMARY CTA */}
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleTextMe}
          startIcon={<MessageOutlinedIcon />}
          sx={{
            py: 1.55,
            borderRadius: 3,
            textTransform: "none",
            fontSize: 17,
            fontWeight: 700,
            boxShadow: "none",
          }}
        >
          Text Me&nbsp; • &nbsp;{profile.phone}
        </Button>

        {/* ABOUT */}
        <Box sx={{ mt: 2.5, mb: 3 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.65,
              fontSize: 14,
            }}
          >
            Available daily for incall & outcall appointments 🍑💦 . I’m a
            thick, sexy PAWG, curvy girl with a sweet girl-next-door
            personality. Meetup includes Full Service + BBBJ, Kissing, Toy Play,
            Roleplay, Fetish, Cum-on-Face/Mouth.
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* TWO MAIN CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 2,
          }}
        >
          {/* MEETUP CARD */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              bgcolor: "#fff",
            }}
          >
            <CardContent sx={{ p: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnOutlinedIcon fontSize="small" />

                <Typography fontWeight={700}>Meet Up 🍆🍑</Typography>
              </Stack>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, mb: 2, lineHeight: 1.5 }}
              >
               
              </Typography>

              <Stack spacing={0.8}>
                {meetupItems.map((item) => (
                  <Box
                    key={item.duration}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 1,
                      borderBottom: "1px solid #eeeeee",
                    }}
                  >
                    <Typography variant="body2">{item.duration}</Typography>

                    <Typography variant="body2" fontWeight={500}>
                      {item.price}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>

          {/* CONTENT CARD */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              bgcolor: "#fff",
            }}
          >
            <CardContent sx={{ p: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PlayCircleOutlineIcon fontSize="small" />

                <Typography fontWeight={700}>Content</Typography>
              </Stack>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, mb: 2, lineHeight: 1.5 }}
              >
                
              </Typography>

              <Stack spacing={0.8}>
                {contentItems.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 1,
                      borderBottom: "1px solid #eeeeee",
                    }}
                  >
                    <Typography variant="body2">{item.title}</Typography>

                    <Typography variant="body2" fontWeight={700}>
                      {item.price}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* SMALL ABOUT / PERSONAL NOTE */}
        <Box
          sx={{
            mt: 4,
            px: 1,
            textAlign: "center",
          }}
        >
          <FavoriteBorderIcon sx={{ fontSize: 20, mb: 0.5 }} />

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            I’m happy to see you at my place or come to you, depending on what
            works best. I’m pretty flexible with availability, so just reach out
            and ask. available for verification calls upon request. I’m
            easygoing, friendly, and I enjoy making sure you have a comfortable
            experience.. If you have questions about anything on my page, feel
            free to reach out.
          </Typography>
        </Box>

        {/* SECOND CTA */}
        <Box sx={{ mt: 2.5 }}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={handleTextMe}
            startIcon={<PhoneIcon />}
            sx={{
              py: 1.4,
              borderRadius: 3,
              textTransform: "none",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Text Me
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              textAlign: "center",
              mt: 1,
            }}
          >
            {profile.phone}
          </Typography>
        </Box>

        {/* FOOTER */}
        <Typography
          variant="caption"
          color="text.disabled"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 5,
          }}
        >
          MenuSide
        </Typography>
      </Container>
    </Box>
  );
};