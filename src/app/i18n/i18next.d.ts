import common from './locales/en/common.json';
import footer from './locales/en/footer.json';
import homePage from './locales/en/home-page.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resources = {
  common,
  footer,
  'home-page': homePage,
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources;
    returnNull: false;
  }
}
