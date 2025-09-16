import { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { useQuickActionsStore } from "../store/quickActionsStore";
import axios from "axios";

export default function Nutrition() {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const addFood = useQuickActionsStore((state) => state.addFood);

  const SPOONACULAR_API_KEY = "a30e8c9c0dd44898b085588dbe6afa6a";

  const handleSearch = async () => {
    if (!query) return;

    try {
      // Поиск ингредиентов
      const res = await axios.get(
        `https://api.spoonacular.com/food/ingredients/search`,
        {
          params: {
            query,
            number: 6,
            apiKey: SPOONACULAR_API_KEY,
          },
        }
      );

      const items = await Promise.all(
        res.data.results.map(async (food) => {
          // Получение подробной информации о каждом ингредиенте
          const infoRes = await axios.get(
            `https://api.spoonacular.com/food/ingredients/${food.id}/information`,
            {
              params: {
                amount: 100, // граммы
                apiKey: SPOONACULAR_API_KEY,
              },
            }
          );

          const info = infoRes.data;

          return {
            id: food.id,
            name: food.name,
            calories:
              info.nutrition?.nutrients?.find((n) => n.name === "Calories")
                ?.amount || 0,
            protein:
              info.nutrition?.nutrients?.find((n) => n.name === "Protein")
                ?.amount || 0,
            carbs:
              info.nutrition?.nutrients?.find((n) => n.name === "Carbohydrates")
                ?.amount || 0,
            fats:
              info.nutrition?.nutrients?.find((n) => n.name === "Fat")
                ?.amount || 0,
            image: info.image
              ? `https://spoonacular.com/cdn/ingredients_250x250/${info.image}`
              : "",
          };
        })
      );

      setFoods(items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Nutrition
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Enter food name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Grid container spacing={2}>
        {foods.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food.id}>
            <Card
              sx={{
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              {food.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={food.image}
                  alt={food.name}
                  sx={{ objectFit: "cover" }}
                />
              )}
              <CardContent>
                <Typography variant="h6">{food.name}</Typography>
                <Typography variant="body2">
                  Calories: {food.calories}
                </Typography>
                <Typography variant="body2">
                  Protein: {food.protein} g
                </Typography>
                <Typography variant="body2">Carbs: {food.carbs} g</Typography>
                <Typography variant="body2">Fats: {food.fats} g</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => addFood(food)}
                >
                  Add
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
