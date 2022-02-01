import {
  LOADING_STATUS,
  VALUE_FONT_SIZE_MAP,
  DATE_FORMATS,
} from '../statics/Enums';
import DateTime from 'date-and-time';
import moment from 'moment';
import {PermissionsAndroid} from 'react-native';
import {COMMON_UTILS_STATICS} from './statics/CommonUtilsStatics';

/**
 * This function will
 * @param {Number} value as number
 * @returns padding as string
 */
const addZeroPadding = value => {
  if (value <= 0) {
    return '00';
  }
  if (value < 10) {
    return `0${value}`;
  }
  return value;
};

/**
 * This function will convert second to minuts with formate
 * @param {Number} totalSeconds  total Seconds
 * @returns will return convert second to minuts with formate as string
 */
const secondsToTimeString = totalSeconds => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes ? minutes : 0}:${addZeroPadding(seconds)}`;
};

/**
 * This function will convert random int from interval
 * @param {Number} min min value
 * @param {Number} max max value
 * @returns This will return random int
 */
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * This function will check value is null or empty
 * @param {String} value any value as string or string
 * @returns return true or false
 */
const isNullOrEmpty = value => {
  if (typeof value !== 'undefined' && value && value !== 'null') {
    if (Object.keys(value).length !== 0) {
      return false;
    }
    if (typeof value === 'number' || typeof value === 'string') {
      return false;
    }
  }
  return true;
};

/**
 * This function will convert a json object to query as string.
 * @param {Object} values json object as key value
 * @returns will return query as string
 */
const queryStringGenerator = values => {
  if (isNullOrEmpty(values)) {
    return '';
  }
  let queryString = '';
  Object.keys(values).forEach((key, index) => {
    if (index !== 0) {
      queryString += '&';
    }
    queryString += `${key}=${values[key]}`;
  });
  return queryString;
};

/**
 * This function will check status of loading
 * @param {String} status status as string
 * @returns will return true or false
 */
const isCompletedOrLoading = status =>
  status === LOADING_STATUS.COMPLETED || status === LOADING_STATUS.LOADING;

const isCompletedOrLoadingOrFailed = status =>
  status === LOADING_STATUS.COMPLETED ||
  status === LOADING_STATUS.LOADING ||
  status === LOADING_STATUS.FAILED;

const isCompleted = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== LOADING_STATUS.COMPLETED) {
      return false;
    }
  }
  return true;
};

/**
 * This function will generate guid
 *
 * @returns will return generated guid
 */
const guidGenerator = () => {
  const S4 = () =>
    String.fromCharCode(Math.floor(((Math.random() * 100) % 26) + 97));
  return `${S4()}${S4()}${S4()}${S4()}-${S4()}${S4()}${S4()}${S4()}-${S4()}${S4()}${S4()}`;
};

/**
 * This function will return random number
 * @param {Number} value any number
 * @returns return random number for given number
 */
const roundOfNumber = value => Math.round(value);

/**
 * This function will return a path from url
 * @param {String} url url value
 * @returns return a path from url
 */
const getPathFromUrl = url => url.split('?')[0];

/**
 * This function will return a path from url
 * @param {String} url url value
 * @returns return a path from url
 */
const getExtensionFromUri = uri => uri.substr(uri.lastIndexOf('.') + 1);

/**
 * This function will return value font size
 * @param {Number} value value of fontsize
 * @param {Number} fontSizeMap font size map
 * @param {Number} defaultFontSize default font size
 * @returns  will return value font size
 */
const getValueFontSize = (
  value = '',
  fontSizeMap = VALUE_FONT_SIZE_MAP,
  defaultFontSize = 25,
) => {
  if (!value) {
    return defaultFontSize;
  }
  for (let i = 0; i < fontSizeMap.length; i++) {
    if (value <= fontSizeMap[i].maxValue) {
      return fontSizeMap[i].fontSize;
    }
  }
  return defaultFontSize;
};

/**
 * This function will convert date object to string format
 * @param {Object} dateObject date object
 * @returns will return formated date as string
 */
const dateFormatToString = dateObject => {
  if (!dateObject) {
    return '';
  }
  return DateTime.format(
    new Date(dateObject),
    DateTime.compile(DATE_FORMATS.DATE),
  );
};

/**
 * This function will convert string to date object
 * @param {*} dateTimeStr date time string
 * @param {*} comingFormat comming date formate
 * @returns will return an date object
 */
const stringToDateObj = (
  dateTimeStr,
  comingFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ',
) => {
  if (!dateTimeStr) {
    return null;
  }

  /**
   * This function will return dateTime as number
   */
  const dateTime = moment(dateTimeStr, comingFormat);
  return dateTime.valueOf();
};

/**
 * This function will return time difference in years
 * @param {Object} dateObject date object an object
 * @returns  will return time difference in years
 */
const getTimeDifferenceInYears = dateObject => {
  if (!dateObject) {
    return 0;
  }
  return DateTime.subtract(new Date(), new Date(dateObject)).toDays() / 365;
};

/**
 * This function will return time difference
 * @param {Number} current  current time as number
 * @param {Number} previous previous time as number
 * @returns This function will return time difference
 */
const timeDifference = (current, previous) => {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) > 1
      ? Math.round(elapsed / 1000) + ` ${COMMON_UTILS_STATICS.LABELS.SECONDS}`
      : COMMON_UTILS_STATICS.LABELS.NOW;
  } else if (elapsed < msPerHour) {
    return (
      Math.round(elapsed / msPerMinute) +
      ` ${COMMON_UTILS_STATICS.LABELS.MINUTES}`
    );
  } else if (elapsed < msPerDay) {
    return (
      Math.round(elapsed / msPerHour) + ` ${COMMON_UTILS_STATICS.LABELS.HOURS}`
    );
  } else if (elapsed < msPerMonth) {
    return (
      '' +
      Math.round(elapsed / msPerDay) +
      ` ${COMMON_UTILS_STATICS.LABELS.DAYS}`
    );
  } else if (elapsed < msPerYear) {
    return (
      '' +
      Math.round(elapsed / msPerMonth) +
      ` ${COMMON_UTILS_STATICS.LABELS.MONTHS}`
    );
  } else {
    return (
      '' +
      Math.round(elapsed / msPerYear) +
      ` ${COMMON_UTILS_STATICS.LABELS.YEARS}`
    );
  }
};

/**
 * This function will return permission android
 * @returns will return true or false
 */
async function getPermissionAndroid() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.log('err', err);
    return false;
  }
}

/**
 * This function will get random time
 * @returns return time as time stamp
 */
const getRandomTym = () => {
  return moment().valueOf();
};

/**
 * This function for get formated name
 * @param {String} firstName first name
 * @param {String} lastName  last name
 * @param {String} userName  user name
 * @returns this will return formated name
 */
const getFormatedName = (firstName, lastName, userName) => {
  let formatedName = '';
  console.log(
    'firstName: ',
    firstName,
    ' lastName: ',
    lastName,
    ' userName: ',
    userName,
  );
  if (!isNullOrEmpty(firstName)) {
    formatedName = firstName;
    if (!isNullOrEmpty(lastName)) {
      formatedName = `${formatedName} ${lastName}`;
    }
  } else {
    formatedName = userName;
  }
  return formatedName;
};

export {
  secondsToTimeString,
  randomIntFromInterval,
  isNullOrEmpty,
  queryStringGenerator,
  isCompletedOrLoading,
  isCompletedOrLoadingOrFailed,
  isCompleted,
  guidGenerator,
  roundOfNumber,
  getPathFromUrl,
  getExtensionFromUri,
  getValueFontSize,
  dateFormatToString,
  getTimeDifferenceInYears,
  stringToDateObj,
  timeDifference,
  getRandomTym,
  getFormatedName,
};
