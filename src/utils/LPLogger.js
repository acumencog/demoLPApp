import Config from 'react-native-config';
import Axios from 'axios';
import VersionNumber from 'react-native-version-number';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  getUniqueId,
  getSystemVersion,
  getDeviceId,
} from 'react-native-device-info';
import {getPathFromUrl} from './CommonUtils';

const LOGDNA_ENDPOINT = 'https://testnet/logs/ingest';
const SECONDARY_LOG_URL = `${Config.BASE_URL}/logger/createlog`;
const LOGDNA_PASSPHRASE = Config.LOGDNA_PASSPHRASE;
const ENVIRONMENT = Config.ENV;
const HOSTNAME = 'LifePoints';
const APPNAME = 'LifePointsApp';

const LOG_STORE_KEY = 'savedLogs';

const LOGGER_URL = `${LOGDNA_ENDPOINT}?hostname=${HOSTNAME}`;
const LOG_META = {
  appVersion: VersionNumber.appVersion,
  buildVersion: VersionNumber.buildVersion,
  platform: Platform.OS,
  systemVersion: getSystemVersion(),
  deviceId: getDeviceId(),
};

const LOG_TYPES = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  NOTICE: 'NOTICE',
};

const loggerApi = Axios.create({
  headers: {
    apikey: LOGDNA_PASSPHRASE,
  },
});

const secondaryLogApi = Axios.create({});

class LPLogger {
  userId = '';
  userName = '';
  userString = `device=${getUniqueId()}`;
  constructor() {
    // this.userId = 'initialId';
    // this.userName = 'initialUserName';
  }

  setUserData = (userId, userName) => {
    this.userId = userId;
    this.userName = userName;
    // this.userString = this.userId ? `user=${this.userId}:${this.userName}` : '';
    this.userString = this.userId
      ? `${this.userId}:${this.userName}`
      : `device=${getUniqueId()}`;
  };

  saveLogsToStore = async logsArray => {
    await AsyncStorage.setItem(LOG_STORE_KEY, JSON.stringify(logsArray));
  };

  getSavedLogsFromStore = async () => {
    const savedLogs = await AsyncStorage.getItem(LOG_STORE_KEY);
    if (savedLogs) {
      return JSON.parse(savedLogs);
    }
    return [];
  };

  sendLog = async logObject => {
    // return;
    // passphrase not added
    if (!LOGDNA_PASSPHRASE) {
      console.log('LOGGING', logObject);
      return;
    }
    const savedLogs = await this.getSavedLogsFromStore();
    await AsyncStorage.setItem(LOG_STORE_KEY, '[]');

    const newLogsArray = [...savedLogs, logObject];
    loggerApi
      .post(LOGGER_URL, {
        lines: newLogsArray,
      })
      // .then(res => {
      //   console.log('Log posted:');
      // })
      .catch(e => {
        console.log('ERROR IN SENDING LOG', e.message);
        this.saveLogsToStore(newLogsArray);
      });

    secondaryLogApi
      .post(SECONDARY_LOG_URL, {
        lines: newLogsArray,
      })
      .then(response => {
        // console.log('SENT SECONDARY LOGS', response);
      })
      .catch(e => {
        console.log('ERROR IN SENDING SECONDARY LOGS', e.message);
        // do nothing
      });
  };

  info = message => {
    const log = {
      user: this.userString,
      message,
    };
    this.sendLog({
      timestamp: Date.now(),
      // line: `${this.userString} message=${message}`,
      line: JSON.stringify(log),
      app: APPNAME,
      level: LOG_TYPES.INFO,
      env: ENVIRONMENT,
      meta: LOG_META,
    });
  };

  warn = (message, fileName = '') => {
    const log = {
      user: this.userString,
      message,
      logSource: fileName,
    };
    this.sendLog({
      timestamp: Date.now(),
      // line: `${this.userString} message=${message} logSource=${fileName}`,
      line: JSON.stringify(log),
      app: APPNAME,
      level: LOG_TYPES.WARN,
      env: ENVIRONMENT,
      meta: LOG_META,
    });
  };

  error = (error, fileName = '') => {
    // console.log('LPLogger ERROR', fileName, JSON.stringify(message));
    if (error.isHandled) {
      return; // already handled
    } else if (error.message) {
      const log = {
        user: this.userString,
        message: error.message,
        logSource: fileName,
      };
      // internal js error
      this.sendLog({
        timestamp: Date.now(),
        // line: `${this.userString} message=${
        //   error.message
        // } logSource=${fileName}`,
        line: JSON.stringify(log),
        app: APPNAME,
        level: LOG_TYPES.ERROR,
        env: ENVIRONMENT,
        meta: LOG_META,
      });
    } else {
      const log = {
        user: this.userString,
        message: error,
        logSource: fileName,
      };
      // custom error
      this.sendLog({
        timestamp: Date.now(),
        // line: `${this.userString} message=${error} logSource=${fileName}`,
        line: JSON.stringify(log),
        app: APPNAME,
        level: LOG_TYPES.ERROR,
        env: ENVIRONMENT,
        meta: LOG_META,
      });
    }
  };

  logResponseTime = (url, duration) => {
    const log = {
      user: this.userString,
      message: `{"type": "API Response Time", "duration":${duration}}`,
      path: getPathFromUrl(url),
      duration,
    };
    this.sendLog({
      timestamp: Date.now(),
      // line: `${this.userString} message=${message}`,
      line: JSON.stringify(log),
      app: APPNAME,
      level: LOG_TYPES.NOTICE,
      env: ENVIRONMENT,
      meta: LOG_META,
    });
  };

  intialize = () => {
    // console.log('Logger initialized');
  };
}

module.exports = new LPLogger();
