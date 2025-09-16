import { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useUserProfile } from "../hooks/useUserProfile";
import { useCalorieCalculator } from "../hooks/useCalorieCalculator";
import UserProfileForm from "../components/ui/UserProfileForm";
import CalorieResults from "../components/ui/CalorieResults";
import WorkoutCard from "../components/ui/WorkoutCard";
import QuickActions from "../components/ui/QuickActions";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const { userProfile, updateProfile, isProfileComplete, validateProfile } =
    useUserProfile();
  const { calculationResults, calculateAll, getNutritionRecommendations } =
    useCalorieCalculator();

  const [validationErrors, setValidationErrors] = useState({});
  const [nutritionGoal, setNutritionGoal] = useState("maintain");

  const handleCalculateCalories = () => {
    const validation = validateProfile();
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      return;
    }
    setValidationErrors({});
    calculateAll(userProfile, nutritionGoal);
  };

  const handleNavigate = (path) => navigate(path);
  const handleAddWorkout = () => navigate("/workouts");
  const handleStartWorkout = (workout) => console.log("Start workout", workout);

  const nutritionRecommendations = calculationResults.isCalculated
    ? getNutritionRecommendations(nutritionGoal)
    : null;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <UserProfileForm
            userProfile={userProfile}
            onUpdateProfile={updateProfile}
            onCalculate={handleCalculateCalories}
            isProfileComplete={isProfileComplete}
            validationErrors={validationErrors}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CalorieResults
            calculationResults={calculationResults}
            recommendations={nutritionRecommendations}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkoutCard
            onAddWorkout={handleAddWorkout}
            onStartWorkout={handleStartWorkout}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <QuickActions onNavigate={handleNavigate} />
        </Grid>
      </Grid>
    </Box>
  );
}
