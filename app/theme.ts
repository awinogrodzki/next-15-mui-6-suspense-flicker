"use client";
import { Roboto } from "next/font/google";
import { extendTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
  colorSchemeSelector: "[data-scheme-%s]",
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
