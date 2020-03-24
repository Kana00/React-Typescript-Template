import i18next, { InitOptions } from 'i18next';
// plugins
import { universalLanguageDetect } from '@unly/universal-language-detector';
// import language object
import en from './Lang_en';
import fr from './Lang_fr';
import es from './Lang_es';
import de from './Lang_de';
import zh from './Lang_zh';

const lang = universalLanguageDetect({
  supportedLanguages: new Array('en', 'fr', 'es', 'de', 'zh'),
  fallbackLanguage: 'en'
});

const i18nConfiguration: InitOptions = {
  lng: lang,
  debug: false,
  resources: { en, fr, es, de, zh }
}

i18next.init(i18nConfiguration);


// documentation: https://www.i18next.com/
// find the correct ISO 639-1 codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
