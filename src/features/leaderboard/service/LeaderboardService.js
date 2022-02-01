import {apiGet, apiMock} from '../../../service/api';
import API_URLS from '../../../service/apiUrls';
import getLeaderboardDataJSON from '../statics/getLeaderboardDataJSON';
import LPLogger from '../../../utils/LPLogger';

const USE_MOCK_DATA = false;

const getData = (url, qParam) => {
  switch (url) {
    case API_URLS.LEADERBOARD.GET_ALL_LEVELS:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, getLeaderboardDataJSON.ALL_LEVELS)
        : apiGet(url, qParam);

    case API_URLS.LEADERBOARD.YEARLY_RANKINGS:
      return USE_MOCK_DATA
        ? apiMock(url, qParam, {}, getLeaderboardDataJSON.YEARLY_RANKINGS)
        : apiGet(url, qParam);

    case API_URLS.LEADERBOARD.PRIZE:
      return apiGet(url, qParam);

    default:
      LPLogger.warn(`Unknown URL: ${url}`, 'LeaderboardService getData');
      return apiGet(url, qParam);
  }
};

export {getData};
