import API_URLS from '../../../service/apiUrls';
import getDashboardDataJSON from '../statics/getDashboardDataJSON';
import {
  apiMock,
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
} from '../../../service/api';
import LPLogger from '../../../utils/LPLogger';
const USE_MOCK_DATA = false;
const getData = (url, qParam) => {
  switch (url) {
    case API_URLS.DASHBOARD.PRIMARY_NEWS:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, getDashboardDataJSON.PRIMARY_NEWS)
        : apiGet(url, qParam);

    case API_URLS.DASHBOARD.SECONDARY_NEWS:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, getDashboardDataJSON.SECONDARY_NEWS)
        : apiGet(url, qParam);

    case API_URLS.NEWS.STATUS:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, getDashboardDataJSON.NEWS_STATUS)
        : apiGet(url, qParam);

    default:
      LPLogger.warn(`Unknown URL: ${url}`, 'DashbaordService getData');
      return apiGet(url, qParam);
  }
};

const postData = (url, qParam, data) => {
  switch (url) {
    default:
      LPLogger.warn(`Unknown URL: ${url}`, 'DashbaordService putData');
      return apiPost(url, qParam, data);
  }
};

const putData = (url, qParam, data) => {
  return apiPut(url, qParam, data);
};
const deleteData = (url, qParam, data) => {
  return apiDelete(url, qParam, data);
};

export {getData, postData, putData, deleteData};
