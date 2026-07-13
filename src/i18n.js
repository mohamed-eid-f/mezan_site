import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; // تأكد أنها مصححة إلى 'react-i18next' كما مررنا بالخطوة السابقة
import ar from './locales/ar.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';
import de from './locales/de.json'; // 1. استيراد الملف الألماني

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
      fr: { translation: fr },
      ru: { translation: ru },
      zh: { translation: zh },
      de: { translation: de } // 2. إضافة حزمة اللغة هنا
    },
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;