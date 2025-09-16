import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Add, FitnessCenter, Store, Timeline } from "@mui/icons-material";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function QuickActions({ onNavigate }) {
  const [foods] = useLocalStorage("foods", []);

  const actions = [
    {
      id: "add-meal",
      label: "Add Meal",
      icon: <Add />,
      color: "primary",
      onClick: () => onNavigate("/nutrition"),
    },
    {
      id: "add-workout",
      label: "Log Workout",
      icon: <FitnessCenter />,
      color: "secondary",
      onClick: () => onNavigate("/workouts"),
    },
    {
      id: "find-store",
      label: "Find Store",
      icon: <Store />,
      color: "info",
      onClick: () => onNavigate("/store"),
    },
    {
      id: "view-progress",
      label: "View Progress",
      icon: <Timeline />,
      color: "success",
      onClick: () => console.log("View progress"),
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          {actions.map((a) => (
            <Grid item xs={12} sm={6} key={a.id}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={a.icon}
                color={a.color}
                onClick={a.onClick}
              >
                {a.label}
              </Button>
            </Grid>
          ))}
        </Grid>

        {foods.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Added Foods:</Typography>
            <ul>
              {foods.map((food, i) => (
                <li key={i}>
                  {food.name} — {food.calories} kcal
                </li>
              ))}
            </ul>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
