// 🎨 Design System
// This file defines the global design system for the app:
// - Colors (dark theme with green/orange accents for gym style)
// - Typography (fonts, sizes, weights)
// - Spacing, radiuses, shadows
//
// All components should use variables from here instead of hardcoding styles.
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00E676",
    },

    secondary: {
      main: "#FF9800",
    },

    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },

    success: {
      main: "#4CAF50",
    },
    info: {
      main: "#03DAC6",
    },

    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },

  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 900,
      fontSize: "2.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    h2: {
      fontWeight: 800,
      fontSize: "2rem",
      textTransform: "uppercase",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    button: {
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#2d2d2d",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "10px 20px",
          fontWeight: "bold",
        },
      },
    },
  },
});
export default theme;
