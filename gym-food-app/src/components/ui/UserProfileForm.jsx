import {
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import { Person, Calculate } from "@mui/icons-material";

export default function UserProfileForm({
  userProfile,
  onUpdateProfile,
  onCalculate,
  isProfileComplete,
  validationErrors,
}) {
  const handleInputChange = (field, value) => {
    onUpdateProfile(field, value);
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Person sx={{ mr: 1, color: "primary.main" }} />
          <Typography variant="h6">User Profile</Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Age"
              type="number"
              value={userProfile.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              error={!!validationErrors?.age}
              helperText={validationErrors?.age}
              inputProps={{ min: 10, max: 120 }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth error={!!validationErrors?.gender}>
              <InputLabel>Gender</InputLabel>
              <Select
                style={{ width: "150px" }}
                value={userProfile.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {validationErrors?.gender && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ ml: 2, mt: 0.5 }}
                >
                  {validationErrors.gender}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              style={{ width: "150px" }}
              fullWidth
              label="Height (cm)"
              type="number"
              value={userProfile.height}
              onChange={(e) => handleInputChange("height", e.target.value)}
              error={!!validationErrors?.height}
              helperText={validationErrors?.height}
              inputProps={{ min: 100, max: 250 }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              style={{ width: "150px" }}
              fullWidth
              label="Weight (kg)"
              type="number"
              value={userProfile.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
              error={!!validationErrors?.weight}
              helperText={validationErrors?.weight}
              inputProps={{ min: 20, max: 300, step: 0.1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth error={!!validationErrors?.activityLevel}>
              <InputLabel>Activity Level</InputLabel>
              <Select
                style={{ width: "150px" }}
                value={userProfile.activityLevel}
                onChange={(e) =>
                  handleInputChange("activityLevel", e.target.value)
                }
              >
                <MenuItem value="sedentary">
                  Sedentary (office job, no exercise)
                </MenuItem>
                <MenuItem value="light">
                  Light Activity (light exercise 1-3 days/week)
                </MenuItem>
                <MenuItem value="moderate">
                  Moderate Activity (moderate exercise 3-5 days/week)
                </MenuItem>
                <MenuItem value="active">
                  Very Active (hard exercise 6-7 days/week)
                </MenuItem>
                <MenuItem value="veryActive">
                  Extremely Active (very hard exercise, 2x/day)
                </MenuItem>
              </Select>
              {validationErrors?.activityLevel && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ ml: 2, mt: 0.5 }}
                >
                  {validationErrors.activityLevel}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              onClick={onCalculate}
              disabled={!isProfileComplete}
              sx={{ mt: 2 }}
            >
              <Calculate sx={{ mr: 1 }} />
              Calculate Calories & Macros
            </Button>
          </Grid>

          {!isProfileComplete && (
            <Grid item xs={12}>
              <Alert severity="info" sx={{ mt: 2 }}>
                Fill in all fields to calculate your calories
              </Alert>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
