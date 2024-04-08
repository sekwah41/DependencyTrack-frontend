import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

async function loadLocaleMessages() {
  const localesContext = await import.meta.glob('./locales/*.json');
  const messages = {};
  for (const path in localesContext) {
    const matched = path.match(/\/locales\/(.*)\.json$/);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = localesContext[path].default;
    }
  }
  console.log(messages);
  return messages;
}

const i18n = new VueI18n({
  locale: process.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});

export default i18n;
