import { CustomTypeOptions, ParseKeys } from 'i18next';

export type TranslationPath<T extends keyof CustomTypeOptions['resources']> =
  ParseKeys<T, CustomTypeOptions['resources'][T], undefined>;
