import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';
import REGISTRATION_STATICS_EN from './RegistrationStatics_en';
import REGISTRATION_STATICS_DE from './RegistrationStatics_de';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const REGISTRATION_PAGE_ORDER = [
  'WELCOME',
  'USERNAME',
  'EMAIL',
  'PASSWORD',
  'GENDER',
  'DOB',
  'ZIP_CODE',
  'PROFILE_IMAGE',
];

const REGISTRATION_PAGES = {
  WELCOME: {
    id: 'registration_welcome',
  },
  USERNAME: {
    id: 'registration_username',
  },
  EMAIL: {
    id: 'registration_email',
  },
  PASSWORD: {
    id: 'registration_password',
  },
  GENDER: {
    id: 'registration_gender',
  },
  DOB: {
    id: 'registration_dob',
  },
  ZIP_CODE: {
    id: 'registration_zipCode',
  },
  PROFILE_IMAGE: {
    id: 'registration_profileImage',
  },
};

const REGISTRATION_STATICS =
  lang === LOCALE.GERMAN ? REGISTRATION_STATICS_DE : REGISTRATION_STATICS_EN;

export {REGISTRATION_PAGES, REGISTRATION_STATICS, REGISTRATION_PAGE_ORDER};
