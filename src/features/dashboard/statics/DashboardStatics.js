import Config from 'react-native-config';
import {LOCALE} from '../../../statics/Enums';
import DASHBOARD_STATICS_DE from './DashboardStatics_de';
import DASHBOARD_STATICS_EN from './DashboardStatics_en';

const lang = Config.LOCALE || LOCALE.ENGLISH;

const DASHBOARD_STATICS =
  lang === LOCALE.GERMAN ? DASHBOARD_STATICS_DE : DASHBOARD_STATICS_EN;

const NEWS_STATICS = {
  TOASTS: {},
};

const DASHBOARD_COMPONENTS = {
  NEWS_DATA: {
    id: 'dashboard__newsData',
  },
};

export {DASHBOARD_STATICS, DASHBOARD_COMPONENTS, NEWS_STATICS};
