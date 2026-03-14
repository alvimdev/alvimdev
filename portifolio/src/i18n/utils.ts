import { en } from './en';
import { pt } from './pt';

export const translations = { en, pt };
export type Locale = keyof typeof translations;

export function useTranslations(locale: Locale) {
  return translations[locale];
}