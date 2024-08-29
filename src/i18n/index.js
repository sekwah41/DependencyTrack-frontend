import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const locales = import.meta.glob('./locales/*.json', { eager: true });
  const messages = {};
  for (const [path, locale] of Object.entries(locales)) {
    const matched = path.match(/\/locales\/([A-Za-z0-9-_]+)\.json$/);
    if (matched && matched.length > 1) {
      const localeKey = matched[1];
      messages[localeKey] = locale;
    }
  }
  return messages;
}

const localeMessages = loadLocaleMessages();

function matchLocale(requestedLocale) {
  console.log(localeMessages);
  let exactMatch = Object.keys(localeMessages).find(
    (locale) => requestedLocale === locale,
  );
  if (exactMatch) {
    console.debug(`Matched exact locale ${requestedLocale}`);
    return exactMatch;
  }

  let localeParts = requestedLocale.split('-');
  if (localeParts.length !== 2) {
    console.debug(
      `Found no matching locale for ${requestedLocale}, falling back to en`,
    );
    return 'en';
  }

  let baseLocale = localeParts[0];
  let baseLocaleMatch = Object.keys(localeMessages).find(
    (locale) => baseLocale === locale,
  );
  if (baseLocaleMatch) {
    console.debug(`Matched base locale ${baseLocale} for ${requestedLocale}`);
    return baseLocaleMatch;
  }

  console.debug(
    `Found no matching locale for ${requestedLocale}, falling back to en`,
  );
  return 'en';
}

const i18n = createI18n({
  locale: matchLocale(
    (localStorage && localStorage.getItem('Locale')) ||
      navigator.language ||
      navigator.userLanguage,
  ),
  fallbackLocale: import.meta.env.VITE_VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: localeMessages,
});

export default i18n;
