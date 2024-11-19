export const fallbackLng = 'en';
export const languages = [fallbackLng];
export const defaultNS = 'common';
export const cookieName = 'i18next';

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
