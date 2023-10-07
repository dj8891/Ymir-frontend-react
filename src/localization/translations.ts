// In the future this can potentially be managed in a UI:
//   https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui

import navigation from "./translation-categories/navigation";
import basePage from "./translation-categories/base-page";
import errorPage from "./translation-categories/error-page";

const translations: {} = {
  resources: {
    en: {
      translation: {
        navigation: navigation.en,
        basePage: basePage.en,
        errorPage: errorPage.en,
      },
    },
    de: {
      translation: {
        navigation: navigation.de,
        basePage: basePage.de,
        errorPage: errorPage.de,
      },
    },
  },
  //lng: "de", // We can manually toggle the language here until we configure a language detector, en for English, de for German
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
};

export default translations;
