import Config from 'react-native-config';
import {LOCALE} from '../../statics/Enums';
import COMMON_UTILS_STATICS_DE from '../statics/CommonUtilsStatics_de';
import COMMON_UTILS_STATICS_EN from '../statics/CommonUtilsStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const COMMON_UTILS_STATICS =
  lang === LOCALE.GERMAN ? COMMON_UTILS_STATICS_DE : COMMON_UTILS_STATICS_EN;

export {COMMON_UTILS_STATICS};
