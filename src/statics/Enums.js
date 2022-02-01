import Toast from 'react-native-root-toast';
import COLORS from './colors';

const OS = {
  IOS: 'ios',
  ANDROID: 'android',
};

const LOADING_STATUS = {
  NOT_YET_STARTED: 'NOT_YET_STARTED',
  LOADING: 'LOADING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
};

const RESPONSE_STATUS = {
  SUCCESS: 'SUCCESS',
};

const SAVED_CREDS_KEYS = {
  USER_NAME: 'username',
  PASSWORD: 'password',
};

const BASE_IMAGE_DATA_PREFIX = {
  JPEG: 'data:image/jpeg;base64,',
  PNG: 'data:image/png;base64,',
};

const TOAST_DEFAULT_STYLE = {
  backgroundColor: COLORS.ALTO,
  textColor: COLORS.BLACK,
  opacity: 0.8,
  position: -50,
  duration: Toast.durations.LONG,
};

const OTP_GEN_MODE = {
  FROM_REGISTER: 'FROM_REGISTER',
  FROM_LOGIN: 'FROM_LOGIN',
  FROM_FORGOT_PASS: 'FROM_FORGOT_PASS',
};

const INPUT_KEYBOARD_TYPE = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
  NUMERIC: 'numeric',
  PHONE_PAD: 'phone-pad',
};

const INPUT_TYPE_AUTO_CAPITALIZE = {
  NONE: 'none',
  SENTENCES: 'sentences',
};

const SHOP_ITEMS_TYPES = {
  LARGE: 'Large',
  SQUARE: 'Square',
};

const NEWS_TYPES = {
  PRIMARY: 'ADVERTISEMENT',
  SECONDARY: 'SOCIAL',
  COMMUNITY: 'COMMUNITY',
};

const LEDGER_UPDATE_TYPE = {
  LIKE: 'Like',
  VIDEO: 'Video',
  DISLIKE: 'Dislike',
  SHOP: 'Shop',
};

const PROFILE_IMAGE_PICKER_CONFIGS = {
  WIDTH: 300,
  HEIGHT: 300,
};

const VALUE_FONT_SIZE_MAP = [
  {
    maxValue: 100,
    fontSize: 30,
  },
  {
    maxValue: 999,
    fontSize: 25,
  },
  {
    maxValue: 9999,
    fontSize: 20,
  },
  {
    maxValue: 99999,
    fontSize: 18,
  },
  {
    maxValue: 999999,
    fontSize: 16,
  },
  {
    maxValue: 9999999,
    fontSize: 14,
  },
];

const DATE_FORMATS = {
  DATE: 'DD.MM.YYYY',
  TIME: 'HH:MM',
};

const LOCALE = {
  ENGLISH: 'en',
  GERMAN: 'de',
};

export {
  OS,
  LOADING_STATUS,
  RESPONSE_STATUS,
  SAVED_CREDS_KEYS,
  BASE_IMAGE_DATA_PREFIX,
  TOAST_DEFAULT_STYLE,
  OTP_GEN_MODE,
  INPUT_KEYBOARD_TYPE,
  SHOP_ITEMS_TYPES,
  NEWS_TYPES,
  LEDGER_UPDATE_TYPE,
  INPUT_TYPE_AUTO_CAPITALIZE,
  PROFILE_IMAGE_PICKER_CONFIGS,
  VALUE_FONT_SIZE_MAP,
  DATE_FORMATS,
  LOCALE,
};
