import moment from 'moment';
import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import deTranslation from './de.json';
import zhTranslation from './zh.json';

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_NAMESPACE = 'translation';
const STORAGE_KEY = 'i18nextLng';
const STORAGE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;

const resources = {
  en: { translation: enTranslation },
  de: { translation: deTranslation },
  zh: { translation: zhTranslation },
};

export default () => {
  i18n
    .use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
      resources,
      interpolation: { escapeValue: false },
      fallbackLng: DEFAULT_LANGUAGE,
      lng: localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE,
      ns: [DEFAULT_NAMESPACE],
      defaultNS: DEFAULT_NAMESPACE,
      keySeparator: false,
      lowerCaseLng: true,
      backend: {
        backends: [LocalStorageBackend],
        backendOptions: [{
          expirationTime: STORAGE_EXPIRATION_TIME,
          store: window.localStorage,
        }, {
          loadPath: '/i18n/{{lng}}.json',
        }],
      },
    });

  i18n.on('languageChanged', moment.locale);
  return i18n;
};
