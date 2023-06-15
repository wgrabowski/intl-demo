// return country name in given language
export const getCountryName = (code: string, lang: string): string => {
  return new Intl.DisplayNames(lang, {
    type: 'region',
  }).of(code);
};
