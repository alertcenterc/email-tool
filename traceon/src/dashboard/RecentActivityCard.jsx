import {
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const activities = [
  {
    id: 1,
    title: "Case Submitted",
    description: "Your investigation request was received successfully.",
    date: "Today • 09:12 AM",
    icon: <CheckCircleRoundedIcon />,
    color: "#2563EB",
    bg: "#DBEAFE",
  },
  {
    id: 2,
    title: "AI Investigation Started",
    description:
      "Our AI engine has begun analyzing your submitted evidence and transaction history.",
    date: "Today • 09:18 AM",
    icon: <PsychologyRoundedIcon />,
    color: "#7C3AED",
    bg: "#EDE9FE",
  },
  {
    id: 3,
    title: "Evidence Verified",
    description:
      "Uploaded screenshots and transaction receipts have been validated.",
    date: "Today • 10:05 AM",
    icon: <CloudUploadRoundedIcon />,
    color: "#16A34A",
    bg: "#DCFCE7",
  },
  {
    id: 4,
    title: "Recovery Assessment Generated",
    description:
      "Initial recovery assessment is now available for your review.",
    date: "Today • 10:42 AM",
    icon: <AccountBalanceWalletRoundedIcon />,
    color: "#EA580C",
    bg: "#FFEDD5",
  },
];

export default function RecentActivityCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 5,
        border: "1px solid",
        borderColor: "grey.200",

        transition: ".3s",

        "&:hover": {
          boxShadow: "0 15px 45px rgba(0,0,0,.06)",
        },
      }}
    >
      {/* Header */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="overline" color="success.main" fontWeight={700}>
            TIMELINE
          </Typography>

          <Typography variant="h5" fontWeight={800}>
            Recent Activity
          </Typography>
        </Box>

        <Chip label="Live Updates" color="success" variant="outlined" />
      </Stack>

      <Stack spacing={0}>
        {activities.map((activity, index) => (
          <Box key={activity.id}>
            <Stack direction="row" spacing={3} alignItems="flex-start" py={3}>
              {/* Icon */}

              <Avatar
                sx={{
                  bgcolor: activity.bg,
                  color: activity.color,
                  width: 52,
                  height: 52,
                }}
              >
                {activity.icon}
              </Avatar>

              {/* Content */}

              <Box flex={1}>
                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography fontWeight={700} mb={3} fontSize="1rem">
                    {activity.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {activity.date}
                  </Typography>
                </Stack>

                <Typography mt={1} color="text.secondary" lineHeight={1.8}>
                  {activity.description}
                </Typography>
              </Box>
            </Stack>

            {index !== activities.length - 1 && <Divider py={3}/>}
          </Box>
        ))}
      </Stack>

      {/* Footer */}

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 3,
          bgcolor: "#F8FAFC",
          borderRadius: 3,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <SupportAgentRoundedIcon color="success" />

          <Box>
            <Typography fontWeight={700}>
              Need help understanding an update?
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Our investigation team can explain each stage of your case and
              answer any questions you may have.
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Paper>
  );
}
