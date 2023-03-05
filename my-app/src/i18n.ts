import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          header: {
            profile: 'PROFILE',
            posts: 'POSTS',
            home: 'HOME',
            logIn: 'SIGN IN',
            logOut: 'SIGN OUT',
          },
          footer: {
            copyright: 'All rights reserved.',
          },
        },
      },
      uk: {
        translation: {
          header: {
            profile: 'ПРОФІЛЬ',
            posts: 'ПОСТИ',
            home: 'ГОЛОВНА',
            logIn: 'УВІЙТИ',
            logOut: 'ВЙИТИ',
          },
          footer: {
            copyright: 'Всі права захищені.',
          },
        },
      },
    },
  });

export default i18n;
