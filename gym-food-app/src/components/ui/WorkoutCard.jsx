import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import { FitnessCenter, Add, PlayArrow } from "@mui/icons-material";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function WorkoutCard({ onAddWorkout, onStartWorkout }) {
  const [workouts] = useLocalStorage("workouts", []);
  const todayDate = new Date().toISOString().split("T")[0];
  const todaysWorkout = workouts.find((w) => w.date === todayDate) || null;

  if (!todaysWorkout) {
    return (
      <Card>
        <CardContent>
          <Box sx={{ textAlign: "center", py: 3 }}>
            <FitnessCenter sx={{ fontSize: 48, color: "grey.400", mb: 2 }} />
            <Typography>No workout planned today</Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={onAddWorkout}
              sx={{ mt: 2 }}
            >
              Schedule Workout
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{todaysWorkout.name}</Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <Chip label={`${todaysWorkout.duration} min`} size="small" />
          <Chip
            label={`${todaysWorkout.exercises?.length || 0} exercises`}
            size="small"
          />
        </Box>
        <Button
          variant="contained"
          startIcon={<PlayArrow />}
          onClick={() => onStartWorkout(todaysWorkout)}
        >
          Start Workout
        </Button>
      </CardContent>
    </Card>
  );
}
