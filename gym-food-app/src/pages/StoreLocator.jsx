import { Typography, Box } from "@mui/material";

export default function StoreLocator() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Store Locator
      </Typography>
      <Typography>Here you'll find healthy food stores near you.</Typography>
    </Box>
  );
}
