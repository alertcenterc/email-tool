import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import { dashboardStore } from "./dashboardStore";

export default function DashboardNavbar() {
  const navigate = useNavigate();
  const firstName = dashboardStore((state) => state.firstName);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        bgcolor: "white",
        color: "#0F172A",
        borderBottom: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/case-dashboard")}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#14532D",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexShrink: 0,
            }}
          >
            <SecurityRoundedIcon fontSize="small" />
          </Box>

          <Typography
            fontWeight={800}
            fontSize="1rem"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            Traceon Guard
          </Typography>
        </Stack>

        {/* User Section */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="body2"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            {firstName}
          </Typography>

          <IconButton
            onClick={handleMenuOpen}
            size="small"
            sx={{
              bgcolor: "#f0f0f0",
              borderRadius: "50%",
              width: 36,
              height: 36,
              "&:hover": {
                bgcolor: "#e0e0e0",
              },
            }}
          >
            <Typography fontSize="0.875rem" fontWeight={700}>
              {firstName?.charAt(0).toUpperCase()}
            </Typography>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/case-dashboard");
                handleMenuClose();
              }}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/support");
                handleMenuClose();
              }}
            >
              Support
            </MenuItem>
            <Divider />
            
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
