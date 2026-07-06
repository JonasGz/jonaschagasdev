import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { detectLanguage, SUPPORTED_LANGUAGES } from "./detectLanguage";
import { en } from "./locales/en";
import { ptBR } from "./locales/pt-BR";
import { ptPT } from "./locales/pt-PT";
import { es } from "./locales/es";

export const resources = {
  en: { translation: en },
  "pt-BR": { translation: ptBR },
  "pt-PT": { translation: ptPT },
  es: { translation: es },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: "en",
  supportedLngs: [...SUPPORTED_LANGUAGES],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
