import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import toast from "react-hot-toast";

const supportTypes = [
  {
    id: "business",
    title: "Business Support",
    amount: "Up to $250,000",
    description:
      "Funding opportunities for small businesses, startups, equipment, payroll, inventory, and expansion.",
    icon: <BusinessCenterRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#1565C0",
  },
  {
    id: "housing",
    title: "Housing & Rent Assistance",
    amount: "Up to $25,000",
    description:
      "Programs that may assist with rent, mortgage payments, housing stability, and utility expenses.",
    icon: <HomeRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#2E7D32",
  },
  {
    id: "financial",
    title: "Financial Assistance",
    amount: "Up to $15,000",
    description:
      "Support programs for eligible individuals and families experiencing financial hardship.",
    icon: <PaymentsRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#EF6C00",
  },
  {
    id: "farming",
    title: "Farming Support",
    amount: "Up to $500,000",
    description:
      "Agricultural assistance for equipment, livestock, crops, irrigation, and farm development.",
    icon: <AgricultureRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#2E7D32",
  },
  {
    id: "community",
    title: "Immigrant & Community Support",
    amount: "Up to $20,000",
    description:
      "Programs supporting community resources, education, workforce development, and related services.",
    icon: <PublicRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#7B1FA2",
  },
];

export default function SupportTypePage() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const handleContinue = () => {
    if (!selected) return;
    toast.success(selected);
    navigate("/support-eligibility");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F7FB",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Progress */}

          <Box>
            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography fontWeight={700} color="primary">
                Step 1 of 5
              </Typography>

              <Typography color="text.secondary">
                Choose Support Type
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={20}
              sx={{
                height: 10,
                borderRadius: 20,
              }}
            />
          </Box>

          {/* Header */}

          <Stack spacing={2} alignItems="center" textAlign="center">
            <Chip color="primary" label="National Benefits Assistance Center" />

            <Typography variant="h3" fontWeight={800}>
              What Type of Support Are You Looking For?
            </Typography>

            <Typography maxWidth={700} color="text.secondary" fontSize={18}>
              Select the assistance program that best matches your current
              needs. You'll answer a few simple questions on the next screen.
            </Typography>
          </Stack>

          {/* Cards */}

          <Grid container spacing={4}>
            {supportTypes.map((item) => {
              const active = selected === item.id;

              return (
                <Grid item xs={12} md={6} key={item.id}>
                  <Card
                    onClick={() => setSelected(item.id)}
                    sx={{
                      cursor: "pointer",
                      borderRadius: 5,
                      border: active
                        ? `3px solid ${item.color}`
                        : "1px solid #E5EAF2",
                      bgcolor: active ? "#F4F9FF" : "white",
                      transition: ".3s",
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 18px 45px rgba(0,0,0,.08)",
                      },
                    }}
                  >
                    {active && (
                      <CheckCircleRoundedIcon
                        sx={{
                          position: "absolute",
                          top: 20,
                          right: 20,
                          color: item.color,
                          fontSize: 34,
                        }}
                      />
                    )}

                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          borderRadius: 4,
                          bgcolor: `${item.color}15`,
                          color: item.color,
                          display: "grid",
                          placeItems: "center",
                          mb: 3,
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography variant="h5" fontWeight={700}>
                        {item.title}
                      </Typography>

                      <Typography
                        variant="h4"
                        color={item.color}
                        fontWeight={800}
                        my={2}
                      >
                        {item.amount}
                      </Typography>

                      <Typography color="text.secondary" lineHeight={1.8}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Bottom Continue */}

          <Box
            sx={{
              position: "sticky",
              bottom: 20,
              zIndex: 10,
            }}
          >
            <Card
              sx={{
                borderRadius: 5,
                p: 2,
              }}
            >
              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={3}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography fontWeight={700}>
                    {selected
                      ? supportTypes.find((x) => x.id === selected).title
                      : "No Support Type Selected"}
                  </Typography>

                  <Typography color="text.secondary">
                    Select a program category to continue.
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  disabled={!selected}
                  endIcon={<ArrowForwardRoundedIcon />}
                  onClick={handleContinue}
                  sx={{
                    px: 5,
                    py: 1.6,
                    borderRadius: 3,
                    fontWeight: 700,
                  }}
                >
                  Continue
                </Button>
              </Stack>
            </Card>
          </Box>
        </Stack>
        
      </Container>
    </Box>
  );
}
