import {
  Card,
  CardContent,
  Box,
  Typography,
  Alert,
  Grid,
  Chip,
  Divider,
} from "@mui/material";
import { Restaurant, TrendingUp, Timeline } from "@mui/icons-material";

export default function CalorieResults({
  calculationResults,
  recommendations,
}) {
  const { bmr, tdee, protein, carbs, fats, isCalculated } = calculationResults;

  if (!isCalculated) {
    return (
      <Card>
        <CardContent>
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Restaurant sx={{ fontSize: 48, color: "grey.400", mb: 2 }} />
            <Typography color="text.secondary">
              Complete your profile to get personalized nutrition
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Alert severity="success" icon={<TrendingUp />} sx={{ mb: 3 }}>
          <Typography>
            Daily calorie needs: <strong>{tdee} kcal</strong>
          </Typography>
          <Typography>BMR: {bmr} kcal</Typography>
        </Alert>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={4}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "primary.light",
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" color="primary.contrastText">
                {protein}g
              </Typography>
              <Typography variant="body2" color="primary.contrastText">
                Protein
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "secondary.light",
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" color="secondary.contrastText">
                {carbs}g
              </Typography>
              <Typography variant="body2" color="secondary.contrastText">
                Carbs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "info.light",
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" color="info.contrastText">
                {fats}g
              </Typography>
              <Typography variant="body2" color="info.contrastText">
                Fats
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {recommendations && (
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Timeline sx={{ mr: 1, color: "info.main" }} />
              <Typography variant="subtitle1">
                {recommendations.title}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {recommendations.description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {recommendations.tips.map((tip, i) => (
                <Chip key={i} label={tip} size="small" color="info" />
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
