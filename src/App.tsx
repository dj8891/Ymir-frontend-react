import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./localization/translations";
import Routes from "./routes";

i18n.use(initReactI18next).init(translations);

const router = createBrowserRouter(Routes());

const App: React.FC = () => {
  return (
    <div className="ymir-app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
