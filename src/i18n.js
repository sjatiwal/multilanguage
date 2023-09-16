import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHRBackend from "i18next-xhr-backend";

i18n
  .use(XHRBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "false",
    lng: "en",
    debug: true,

    ns: ["translation", "hi"],
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/languages/{{lng}}.json",
    },
  });

export default i18n;
