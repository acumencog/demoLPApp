import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';
import USER_BAR_STATICS_EN from './UserBarStatics_en';
import USER_BAR_STATICS_DE from './UserBarStatics_de';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const USER_BAR_STATICS =
  lang === LOCALE.GERMAN ? USER_BAR_STATICS_DE : USER_BAR_STATICS_EN;

export {USER_BAR_STATICS};
