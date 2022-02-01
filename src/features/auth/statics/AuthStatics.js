import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';

import AuthStatics_DE from './AuthStatics_de';
import AuthStatics_EN from './AuthStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const LOGIN_STATICS =
  lang === LOCALE.GERMAN
    ? AuthStatics_DE.LOGIN_STATICS
    : AuthStatics_EN.LOGIN_STATICS;

const CREATE_ACCOUNT_STATICS =
  lang === LOCALE.GERMAN
    ? AuthStatics_DE.CREATE_ACCOUNT_STATICS
    : AuthStatics_EN.CREATE_ACCOUNT_STATICS;

const OTP_STATICS =
  lang === LOCALE.GERMAN
    ? AuthStatics_DE.OTP_STATICS
    : AuthStatics_EN.OTP_STATICS;

const FORGOT_PASS_STATICS =
  lang === LOCALE.GERMAN
    ? AuthStatics_DE.FORGOT_PASS_STATICS
    : AuthStatics_EN.FORGOT_PASS_STATICS;

const UPDATE_PASS_STATICS =
  lang === LOCALE.GERMAN
    ? AuthStatics_DE.UPDATE_PASS_STATICS
    : AuthStatics_EN.UPDATE_PASS_STATICS;

const API_STATICS =
  lang === LOCALE.GERMAN
    ? AuthStatics_DE.API_STATICS
    : AuthStatics_EN.API_STATICS;

export {
  LOGIN_STATICS,
  CREATE_ACCOUNT_STATICS,
  OTP_STATICS,
  FORGOT_PASS_STATICS,
  UPDATE_PASS_STATICS,
  API_STATICS,
};
