"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        background: {
          default: "#F4F6F8", // Light background
          paper: "#FFFFFF", // White cards
        },
        text: {
          primary: "#0A0F1C", // Dark text
          secondary: "#475467",
        },
        primary: {
          main: "#007BFF",
        },
        secondary: {
          main: "#6C757D",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        background: {
          default: "#0A0F1C", // Dark theme background
          paper: "#121826", // Card background
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
        },
        primary: {
          main: "#36D399", // Green for highlights
        },
        secondary: {
          main: "#4A5568",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: { fontSize: "2rem", fontWeight: "bold" },
    h2: { fontSize: "1.5rem", fontWeight: "bold" },
    body1: { fontSize: "1rem" },
  },
});

export default theme;
