import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';
import PROFILE_STATICS_DE from './ProfileStatics_de';
import PROFILE_STATICS_EN from './ProfileStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const PROFILE_STATICS =
  lang === LOCALE.GERMAN ? PROFILE_STATICS_DE.HOME : PROFILE_STATICS_EN.HOME;

const EDIT_PROFILE_STATICS =
  lang === LOCALE.GERMAN
    ? PROFILE_STATICS_DE.EDIT_PROFILE_STATICS
    : PROFILE_STATICS_EN.EDIT_PROFILE_STATICS;

const PROFILE_UPDATE_PASS_STATICS =
  lang === LOCALE.GERMAN
    ? PROFILE_STATICS_DE.PROFILE_UPDATE_PASS_STATICS
    : PROFILE_STATICS_EN.PROFILE_UPDATE_PASS_STATICS;

const PROFILE_COMPONENTS = {
  USER_PROFILE: {
    id: 'profile__userProfile',
  },
  POINTS: {
    id: 'profile__points',
  },
  TOKENS: {
    id: 'profile__tokens',
  },
};

export {
  PROFILE_STATICS,
  EDIT_PROFILE_STATICS,
  PROFILE_UPDATE_PASS_STATICS,
  PROFILE_COMPONENTS,
};
