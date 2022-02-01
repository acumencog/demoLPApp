import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';
import CONTACTS_STATICS_DE from './ContactsStatics_de';
import CONTACTS_STATICS_EN from './ContactsStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;
const CONTACTS_STATICS =
  lang === LOCALE.GERMAN ? CONTACTS_STATICS_DE : CONTACTS_STATICS_EN;

export {CONTACTS_STATICS};
