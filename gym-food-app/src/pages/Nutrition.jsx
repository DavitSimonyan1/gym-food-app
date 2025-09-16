import { Typography, Box } from "@mui/material";

export default function Nutrition() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Nutrition
      </Typography>
      <Typography>Here you'll track your meals and calories.</Typography>
    </Box>
  );
}
