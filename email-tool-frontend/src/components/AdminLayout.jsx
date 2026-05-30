import React from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  CssBaseline,
  IconButton,
  Container,
} from "@mui/material";

import Home from "@mui/icons-material/HomeOutlined";
import Task from "@mui/icons-material/TaskAltOutlined";
import Withdraw from "@mui/icons-material/AccountBalanceWalletOutlined";
import Support from "@mui/icons-material/SupportAgentOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";


import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { authStore } from "../pages/auth/authStore";

const drawerWidth = 240;  

const menuItems = [
  { label: "Home", icon: <Home />, path: "/admin/dashboard" },
  { label: "Tasks", icon: <Task />, path: "/admin/task-list" },
  { label: "Withdraw", icon: <Withdraw />, path: "/admin/withdraw-method" },
  { label: "Support", icon: <Support />, path: "/admin/support" },
  { label: "Logout", icon: <Logout />, path: "/admin/logout" },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    const name = authStore((state) => state.name);
  

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" sx={{ color: "grey", fontWeight: 5 }}>
          Welcome, {name}
        </Typography>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
            selected={location.pathname.startsWith(item.path)}
            sx={{
              color: "white",
              "& .MuiListItemIcon-root": {
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "#1f2937",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#1f2937",
              },
              "&:hover": {
                backgroundColor: "#111827",
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
      }}
    >
      <CssBaseline />

      {/* TOP NAV */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#020617",
        }}
      >
        <Toolbar className="flex justify-between">
          <Typography variant="h5" fontWeight={'bold'} sx={{ color: "white", fontWeight: 5, }}>
            PayServiceNotice Task
          </Typography>

          <Typography variant="h6" sx={{ color: "white", fontWeight: 5 }}>
            Welcome, {name}
          </Typography>

          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR DESKTOP */}
      <Drawer
        variant="permanent"
        className="hidden md:block"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#020617",
            color: "white",
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* SIDEBAR MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="md:hidden"
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#020617",
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          mr: 1,
          borderLeft: 2
        }}
      >
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
