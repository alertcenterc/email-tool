import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentsIcon from "@mui/icons-material/Payments";
import EmailIcon from "@mui/icons-material/Email";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const caseTypes = [
  {
    title: "Cryptocurrency Fraud",
    description:
      "Investigations involving Bitcoin, Ethereum, USDT, and other digital assets transferred through wallets or exchanges.",
    icon: <CurrencyBitcoinIcon sx={{ fontSize: 45 }} />,
    color: "#DCFCE7",
  },
  {
    title: "Investment Scams",
    description:
      "Fake investment platforms, Ponzi schemes, and fraudulent online brokers promising unrealistic returns.",
    icon: <TrendingUpIcon sx={{ fontSize: 45 }} />,
    color: "#DBEAFE",
  },
  {
    title: "Romance Scams",
    description:
      "Cases involving online relationships where victims were manipulated into sending money or cryptocurrency.",
    icon: <FavoriteBorderIcon sx={{ fontSize: 45 }} />,
    color: "#FCE7F3",
  },
  {
    title: "Wire Transfer Fraud",
    description:
      "Unauthorized bank transfers, payment diversion, invoice fraud, and suspicious financial transactions.",
    icon: <PaymentsIcon sx={{ fontSize: 45 }} />,
    color: "#FEF3C7",
  },
  {
    title: "Business Email Compromise",
    description:
      "Corporate fraud involving spoofed emails, fake invoices, vendor impersonation, and executive scams.",
    icon: <EmailIcon sx={{ fontSize: 45 }} />,
    color: "#E0F2FE",
  },
  {
    title: "Card & Payment Fraud",
    description:
      "Unauthorized card activity, payment processor disputes, and suspicious online payment transactions.",
    icon: <CreditCardOffIcon sx={{ fontSize: 45 }} />,
    color: "#F3E8FF",
  },
  {
    title: "Mobile Payment Scams",
    description:
      "Investigations involving mobile wallets, fintech apps, peer-to-peer transfers, and digital payment fraud.",
    icon: <SmartphoneIcon sx={{ fontSize: 45 }} />,
    color: "#ECFCCB",
  },
  {
    title: "Wallet Tracing",
    description:
      "Blockchain wallet analysis, transaction mapping, and digital asset movement investigations.",
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 45 }} />,
    color: "#FFE4E6",
  },
];

export const CaseTypes = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#F8FAFC",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={8}>
          <Typography variant="overline" color="success.main" fontWeight={700}>
            CASE TYPES
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              color: "#0F172A",
            }}
          >
            Types of Cases We Investigate
          </Typography>

          <Typography maxWidth={760} color="text.secondary" lineHeight={1.8}>
            Every investigation is unique. Our specialists assist individuals
            and organizations in understanding complex digital transactions,
            tracing assets, and gathering evidence across a wide range of fraud
            scenarios.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {caseTypes.map((item) => (
            <Grid item xs={12} sm={6} lg={3} key={item.title}>
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
                    borderColor: "#16A34A",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 4,
                        bgcolor: item.color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#166534",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography fontWeight={700} fontSize="1.25rem">
                      {item.title}
                    </Typography>

                    <Typography color="text.secondary" lineHeight={1.8}>
                      {item.description}
                    </Typography>

                    <Chip
                      label="Professional Investigation"
                      color="success"
                      variant="outlined"
                      sx={{ width: "fit-content" }}
                    />
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
