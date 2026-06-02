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

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { dashboardStore } from "../pages/dashboard/services/dashboardStore";

const drawerWidth = 260;

const menuItems = [
  { label: "Home", icon: <Home />, path: "/admin/dashboard" },
  { label: "Tasks", icon: <Task />, path: "/admin/task-list" },
  { label: "Withdraw", icon: <Withdraw />, path: "/admin/withdraw-method" },
  { label: "Support", icon: <Support />, path: "/admin/support" },
  { label: "Logout", icon: <Logout />, path: "/logout" },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const user = dashboardStore((state) => state.user);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <>
      <Toolbar>
        <Typography
          sx={{
            color: "#94a3b8",
            fontWeight: 600,
          }}
        >
        {user.firstName}
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
                backgroundColor: "#1e293b",
              },

              "&.Mui-selected:hover": {
                backgroundColor: "#1e293b",
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
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* APP BAR */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#020617",
          borderBottom: "1px solid #1e293b",

          width: {
            md: `calc(100% - ${drawerWidth}px)`,
          },

          ml: {
            md: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            noWrap
            sx={{
              fontWeight: 600,
              color: "white",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.25rem",
              },
            }}
          >
            {user.firstName}
          </Typography>

          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#020617",
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* DESKTOP DRAWER */}
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },

          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#020617",
            color: "white",
            borderRight: "1px solid #1e293b",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "#020617",

          width: {
            md: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Toolbar />

        <Container
          maxWidth="xl"
          sx={{
            py: 3,
            px: {
              xs: 1,
              sm: 2,
              md: 3,
            },
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}