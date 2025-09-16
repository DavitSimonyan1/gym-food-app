import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import {
  Dashboard,
  FitnessCenter,
  Restaurant,
  Store,
  Menu,
} from "@mui/icons-material";

import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/" }, // исправлено
  { text: "Workouts", icon: <FitnessCenter />, path: "/workouts" },
  { text: "Nutrition", icon: <Restaurant />, path: "/nutrition" },
  { text: "Store Locator", icon: <Store />, path: "/store" },
];


  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Bar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant="h6">GYM FOOD APP</Typography>
        </Toolbar>
      </AppBar>

      {/* Side Menu */}
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, mt: 8 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={toggleDrawer}
                  sx={{
                    "&.active": {
                      backgroundColor: "rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Space for top bar
        }}
      >
        <Outlet /> {/* Здесь будут отображаться страницы */}
      </Box>
    </Box>
  );
}
