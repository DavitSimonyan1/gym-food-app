import { useLocalStorage } from "./useLocalStorage";

export const useCalorieCalculator = () => {
  const [calculationResults, setCalculationResults] = useLocalStorage(
    "calculationResults",
    { bmr: 0, tdee: 0, protein: 0, carbs: 0, fats: 0, isCalculated: false }
  );

  const calculateAll = (profile, nutritionGoal = "maintain") => {
    if (!profile) return;

    const { age, gender, height, weight, activityLevel } = profile;

    // BMR — Harris-Benedict formula
    let bmr = 0;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    // TDEE — based on activity level
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };
    let tdee = bmr * (activityMultipliers[activityLevel] || 1.2);

    // Adjust for nutrition goal
    if (nutritionGoal === "lose") tdee -= 500;
    if (nutritionGoal === "gain") tdee += 500;

    // Macronutrients (25% protein, 50% carbs, 25% fats)
    const protein = Math.round((tdee * 0.25) / 4);
    const carbs = Math.round((tdee * 0.5) / 4);
    const fats = Math.round((tdee * 0.25) / 9);

    setCalculationResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      protein,
      carbs,
      fats,
      isCalculated: true,
    });
  };

  const getNutritionRecommendations = (nutritionGoal) => {
    const titles = {
      maintain: "Maintain your current weight",
      lose: "Calorie deficit for weight loss",
      gain: "Calorie surplus for weight gain",
    };

    return {
      title: titles[nutritionGoal] || titles.maintain,
      description:
        "Follow a balanced diet and track your calories and macronutrients daily.",
      tips: [
        "Eat protein with every meal",
        "Include vegetables",
        "Stay hydrated",
      ],
    };
  };

  return { calculationResults, calculateAll, getNutritionRecommendations };
};
