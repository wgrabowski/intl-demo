// return country/region name in given language

export const getNameByCode = (
  type: Intl.DisplayNamesType,
  code: string,
  lang: string
) => {
  if (!code) {
    return '';
  }
  return new Intl.DisplayNames(lang, {
    type: type,
  }).of(code);
};
