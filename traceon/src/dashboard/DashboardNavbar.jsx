import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardRoundedIcon />,
      path: "/dashboard",
    },
    
    {
      title: "Support",
      icon: <SupportAgentRoundedIcon />,
      path: "/dashboard/support",
    },
  ];

  return (
    <>
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
          }}
        >
          {/* Mobile */}

          <IconButton
            sx={{
              display: {
                md: "none",
              },
              mr: 1,
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}

          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/dashboard")}
          >
            <Box
              sx={{
                width: 42,
                height: 42,
                bgcolor: "#14532D",
                borderRadius: 2.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <SecurityRoundedIcon />
            </Box>

            <Box>
              <Typography fontWeight={800} fontSize="1.15rem">
                Traceon Guard
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Client Portal
              </Typography>
            </Box>
          </Stack>

          <Box flex={1} />

          {/* Desktop Nav */}

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.title}
                startIcon={item.icon}
                onClick={() => navigate(item.path)}
                sx={{
                  color: "#334155",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2,
                  borderRadius: 3,
                }}
              >
                {item.title}
              </Button>
            ))}
          </Stack>

          <Box flex={1} />

          {/* Notifications */}

          <IconButton>
            <Badge badgeContent={2} color="error">
              <NotificationsNoneRoundedIcon />
            </Badge>
          </IconButton>

          {/* User */}

          <Button
            onClick={openMenu}
            sx={{
              ml: 1,
              textTransform: "none",
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar
                sx={{
                  bgcolor: "#14532D",
                }}
              >
                JD
              </Avatar>

              <Box
                textAlign="left"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                <Typography fontWeight={700} color="#0F172A">
                  John Doe
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  Active Investigation
                </Typography>
              </Box>
            </Stack>
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem>
              <PersonRoundedIcon sx={{ mr: 2 }} />
              Profile
            </MenuItem>

            <MenuItem>
              <SettingsRoundedIcon sx={{ mr: 2 }} />
              Settings
            </MenuItem>

            <Divider />

            <MenuItem>
              <LogoutRoundedIcon sx={{ mr: 2 }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box
          sx={{
            width: 280,
          }}
        >
          <Stack spacing={2} p={3}>
            <Typography fontWeight={800} fontSize="1.3rem">
              Traceon Guard
            </Typography>

            <Typography color="text.secondary">Client Portal</Typography>
          </Stack>

          <Divider />

          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.title}
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
