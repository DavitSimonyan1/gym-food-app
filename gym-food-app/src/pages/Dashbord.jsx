// 📊 Overview Page
// This page is a simple dashboard-style layout.
// - Uses MUI Grid for responsive layout
// - Displays data inside MUI Card components
// - Designed to show high-level overview cards (e.g., stats, metrics, shortcuts)
//
// Future: can expand with charts, tables, or interactive elements.

import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { FitnessCenter, Restaurant } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <FitnessCenter sx={{ mr: 1 }} />
                <Typography variant="h6">Today's Workout</Typography>
              </Box>
              <Typography>No workout planned yet</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Restaurant sx={{ mr: 1 }} />
                <Typography variant="h6">Nutrition</Typography>
              </Box>
              <Typography>Track your meals here</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
