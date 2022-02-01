import LPLogger from '../../../utils/LPLogger';
import getProfileDataJSON from '../statics/getProfileDataJSON';

const {default: API_URLS} = require('../../../service/apiUrls');
const {apiMock, apiGet} = require('../../../service/api');
const USE_MOCK_DATA = false;

const getData = (url, qParam) => {
  switch (url) {
    //get points
    case API_URLS.USER_DATA.POINTS:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, getProfileDataJSON.USER_POINTS)
        : apiGet(url, qParam);
    //logout
    case API_URLS.USER_DATA.LOGOUT:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, getProfileDataJSON.LOGOUT)
        : apiGet(url, qParam);
    default:
      LPLogger.warn(`Unknown URL: ${url}`, 'ProfileService getData');
      return apiGet(url, qParam);
  }
};

export {getData};
