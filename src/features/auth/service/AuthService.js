import API_URLS from '../../../service/apiUrls';
import {apiPost, apiMock, apiGet} from '../../../service/api';
import * as GET_AUTH_DATA_JSON from '../statics/getAuthDataJSON';
import LPLogger from '../../../utils/LPLogger';

const USE_MOCK_DATA = false;
const postData = (url, qParam, body) => {
  switch (url) {
    case API_URLS.AUTH.LOGIN:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, body, GET_AUTH_DATA_JSON.ON_LOGIN)
        : apiPost(url, qParam, body);

    case API_URLS.AUTH.REGISTER:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, body, GET_AUTH_DATA_JSON.ON_REGISTER)
        : apiPost(url, qParam, body);

    case API_URLS.AUTH.VERIFY_OTP:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, body, GET_AUTH_DATA_JSON.VERIFY_OTP)
        : apiPost(url, qParam, body);

    case API_URLS.AUTH.UPDATE_PASS:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, body, GET_AUTH_DATA_JSON.UPDATE_PASS)
        : apiPost(url, qParam, body);

    case API_URLS.AUTH.CHECK_USER_EXIST:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, body, GET_AUTH_DATA_JSON.CHECK_USER_EXIST)
        : apiPost(url, qParam, body);

    case API_URLS.AUTH.VALIDATE_SESSION:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, body, GET_AUTH_DATA_JSON.VALIDATE_SESSION)
        : apiPost(url, qParam, body);

    default:
      LPLogger.warn(`Unknown URL: ${url}`, 'AuthService postData');
      return apiPost(url, qParam, body);
  }
};

const getData = (url, qParam) => {
  switch (url) {
    case API_URLS.AUTH.GEN_OTP:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, GET_AUTH_DATA_JSON.GEN_OTP)
        : apiGet(url, qParam);

    default:
      LPLogger.warn(`Unknown URL: ${url}`, 'AuthService getData');
      return apiGet(url, qParam);
  }
};

export {postData, getData};
