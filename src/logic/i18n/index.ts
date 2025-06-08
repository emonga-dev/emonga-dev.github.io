import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ['ko', 'en'];

const getLanugage = () => {
  const lang = navigator.language || 'ko-KR';
  const shortLang = lang.split('-')[0];

  return availableLanguages.includes(shortLang)
    ? shortLang
    : 'ko';
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: getLanugage(),
    fallbackLng: 'ko',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  });

export default i18n;
