import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton, // Add this
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

export default function MainLayout() {
  // State to control if drawer is open or closed
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Navigation menu items
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Workouts", icon: <FitnessCenter /> },
    { text: "Nutrition", icon: <Restaurant /> },
    { text: "Store Locator", icon: <Store /> },
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
                <ListItemButton>
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
        <Typography variant="h4">Welcome to your Gym App!</Typography>
        <Typography variant="body1">
          This is where different pages will show.
        </Typography>
      </Box>
    </Box>
  );
}
