import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';
import NEWS_STATICS_DE from './NewsStatics_de';
import NEWS_STATICS_EN from './NewsStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;
const NEWS_STATICS = lang === LOCALE.GERMAN ? NEWS_STATICS_DE : NEWS_STATICS_EN;

export {NEWS_STATICS};
