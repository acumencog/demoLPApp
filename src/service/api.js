const axios = require('axios');
import Toast from 'react-native-root-toast';
import Config from 'react-native-config';

// import store from '../store/configureStore';
import {queryStringGenerator} from '../utils/CommonUtils';
import {RESPONSE_STATUS, TOAST_DEFAULT_STYLE} from '../statics/Enums';
import LPLogger from '../utils/LPLogger';
import API_URLS from './apiUrls';
import {API_STATICS} from '../features/auth/statics/AuthStatics';

const MOCK_DATA_DELAY = 1000;

const TOKEN_EXPIRES_STATUS_CODE = 401;

let currentRefreshToken = '';

//base api
const api = axios.create({
  baseURL: Config.BASE_URL,
  headers: {},
});

//exclude path
const isExcludedPaths = currentPath => {
  if (currentPath.indexOf(API_URLS.AUTH.VALIDATE_SESSION) !== -1) {
    return true;
  }
  if (currentPath.indexOf(API_URLS.AUTH.LOGIN) !== -1) {
    return true;
  }
  return false;
};

//interceptors request
api.interceptors.request.use(
  config => {
    console.log('INTERCEPTING', config);
    config.meta = {startTime: new Date()};
    return config;
  },
  () => {},
);

//interceptors reponse
api.interceptors.response.use(
  response => {
    console.log('API RESPONSE', response.data);
    response.config.meta.endtime = new Date();
    const duration =
      response.config.meta.endtime - response.config.meta.startTime;
    LPLogger.logResponseTime(response.config.url, duration);
    if (response.data.responseStatus === RESPONSE_STATUS.SUCCESS) {
      if (response.data.responseMessage) {
        Toast.show(response.data.responseMessage, TOAST_DEFAULT_STYLE);
      }
      return response;
    } else if (response.data.responseMessage) {
      Toast.show(response.data.responseMessage, TOAST_DEFAULT_STYLE);
      LPLogger.warn(
        `API INTERCEPTOR ERROR request ${response.config.method} ${
          response.config.url
        } with data ${response.config.data} failed with status ${
          response.status
        } response ${
          response.data
            ? JSON.stringify(response.data)
            : JSON.stringify(response)
        }`,
        'API',
      );
    } else {
      LPLogger.warn(
        `API INTERCEPTOR ERROR request ${response.config.method} ${
          response.config.url
        } with data ${response.config.data} failed with status ${
          response.status
        } response ${
          response.data
            ? JSON.stringify(response.data)
            : JSON.stringify(response)
        }`,
        'API',
      );
    }
    const returnError = new Error(response);
    returnError.response = response.data;
    returnError.isHandled = true;
    return Promise.reject(returnError);
  },
  async error => {
    // if access token is expired
    if (
      error.response &&
      error.response.status === TOKEN_EXPIRES_STATUS_CODE &&
      error.response.config.url !== API_URLS.AUTH.LOGIN
    ) {
      if (error.response.config.isTokenRefreshed) {
        LPLogger.error(
          //Unauthorized client error status
          `API INTERCEPTOR ERROR 401 for second time url ${
            error.response.config.url
          }, response ${JSON.stringify(error.response)}`,
          'API',
        );
      } else {
        LPLogger.info(
          `API INTERCEPTOR ERROR 401 for first time url ${
            error.response.config.url
          }. Getting new access token`,
          'API',
        );
        try {
          const newToken = await getNewAcceesToken();
          if (isExcludedPaths(error.response.config.url)) {
            return Promise.resolve();
          }
          LPLogger.info(
            `API INTERCEPTOR ERROR Got new access token. Calling ${
              error.response.config.url
            } again`,
            'API',
          );
          // for the same call, add token manually
          return api({
            ...error.response.config,
            meta: {startTime: new Date()},
            headers: {
              ...error.response.config.headers,
              Authorization: `Bearer ${newToken}`,
            },
            isTokenRefreshed: true,
          });
        } catch (e) {
          LPLogger.info(
            `API INTERCEPTOR ERROR: cant get refresh token, with status Code: ${
              e.response.status
            }`,
            'API',
          );
          return Promise.reject(e);
          // onSessionExpired();
        }
      }
    } else if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // or 401 for login
      Toast.show(API_STATICS.GENERIC_ERROR_MESSAGE, TOAST_DEFAULT_STYLE);

      LPLogger.error(
        `API INTERCEPTOR ERROR request ${error.response.config.method} ${
          error.response.config.url
        } with data ${error.response.config.data} failed with status ${
          error.response.status
        } response ${error.message ? error.message : JSON.stringify(error)}`,
        'API',
      );
    } else if (error.request) {
      // The request was made but no response was received
      LPLogger.error(
        `API INTERCEPTOR ERROR no response ${JSON.stringify(error.request)}`,
        'API',
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      LPLogger.error(
        `API INTERCEPTOR ERROR external error ${
          error.message ? error.message : JSON.stringify(error)
        }`,
        'API',
      );
    }
    const returnError = new Error(error);
    returnError.isHandled = true;
    return Promise.reject(returnError);
  },
);

const getNewAcceesToken = async () => {
  const startTime = new Date();
  if (!currentRefreshToken) {
    LPLogger.error(
      'API INTERCEPTOR ERROR getNewAcceesToken: no refresh token present',
      'API',
    );
    return Promise.reject();
  }
  const refreshResponse = await axios.post(
    `${Config.BASE_URL}${API_URLS.AUTH.REFRESH_TOKEN}`,
    {refreshToken: currentRefreshToken},
  );
  const duration = new Date() - startTime;
  if (refreshResponse.status === 200) {
    addAccessToken(
      refreshResponse.data.accessToken,
      refreshResponse.data.refreshToken,
    );
    LPLogger.logResponseTime(API_URLS.AUTH.REFRESH_TOKEN, duration);
    return Promise.resolve(refreshResponse.data.accessToken);
  } else {
    return Promise.reject();
  }
};

const addAccessToken = (accessToken = '', refreshToken = '') => {
  if (accessToken) {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    currentRefreshToken = refreshToken;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

const apiGet = (url, qParams) => {
  const fullUrl = `${url}?${queryStringGenerator(qParams)}`;
  return api.get(fullUrl);
};

const apiPost = (url, qParams, data) => {
  const fullUrl = `${url}?${queryStringGenerator(qParams)}`;
  return api.post(fullUrl, data);
};

const apiPut = (url, qParams, data) => {
  const fullUrl = `${url}?${queryStringGenerator(qParams)}`;
  return api.put(fullUrl, data);
};

const apiDelete = (url, qParams, data) => {
  const fullUrl = `${url}?${queryStringGenerator(qParams)}`;
  return api.delete(fullUrl, data);
};

const apiMock = (url, qParams, data, mockData) => {
  console.log(
    `Mocking ${url} with qParams: ${JSON.stringify(
      qParams,
    )} and body ${JSON.stringify(data)}`,
  );
  return new Promise(resolve => {
    setTimeout(() => resolve({data: mockData}), MOCK_DATA_DELAY);
  });
};

export {apiGet, apiPost, apiPut, apiDelete, apiMock, addAccessToken};
