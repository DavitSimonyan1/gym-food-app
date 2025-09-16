import { Typography, Box } from "@mui/material";

export default function Workouts() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Workouts
      </Typography>
      <Typography>
        Here you'll track your gym workouts and exercises.
      </Typography>
    </Box>
  );
}
