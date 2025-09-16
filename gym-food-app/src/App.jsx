import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Страницы
import Dashboard from "./pages/Dashbord";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import StoreLocator from "./pages/StoreLocator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/store" element={<StoreLocator />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
