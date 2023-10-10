import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./localization/translations";
import Routes from "./Routes";
import { createTheme, ThemeProvider } from "@mui/material";

i18n.use(initReactI18next).init(translations);

const router = createBrowserRouter(Routes());

const theme = createTheme({
  typography: {
    fontFamily: "Albert Sans, sans-serif",
  },
});

const App: React.FC = () => {
  return (
    <div className="ymir-app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};

export default App;
