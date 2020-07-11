import I18n from 'i18n-js';
import en from './en';
// import fr from './locales/fr';
import vi from './vi'

I18n.fallbacks = true;

I18n.translations = {
    vi,
    en,
//   fr,
    
};
export default I18n