import LeaderboardActionTypes from './LeaderboardActionTypes';
import {getData} from '../service/LeaderboardService';
import API_URLS from '../../../service/apiUrls';
import {LEADERBOARD_COMPONENTS} from '../statics/LeaderboardStatics';
import {LOADING_STATUS} from '../../../statics/Enums';
import LPLogger from '../../../utils/LPLogger';
import {parseAllLevelsData} from '../../../utils/DataUtils';
import {isCompletedOrLoadingOrFailed} from '../../../utils/CommonUtils';

const LeaderboardActions = {
  setComponentData: payload => ({
    type: LeaderboardActionTypes.SET_COMPONENT_DATA,
    payload,
  }),

  setDynamicDataApiStatus: payload => ({
    type: LeaderboardActionTypes.SET_DYNAMIC_DATA_API_STATUS,
    payload,
  }),

  getAllLevelsData: payload => (dispatch, getState) => {
    if (
      isCompletedOrLoadingOrFailed(
        getState().LeaderboardReducer.controls.dynamicDataApiStatus[
          LEADERBOARD_COMPONENTS.ALL_LEVELS.id
        ],
      )
    ) {
      return;
    }
    dispatch(
      LeaderboardActions.setDynamicDataApiStatus({
        [LEADERBOARD_COMPONENTS.ALL_LEVELS.id]: LOADING_STATUS.LOADING,
      }),
    );
    getData(API_URLS.LEADERBOARD.GET_ALL_LEVELS, {})
      .then(allLevelsResponse => {
        dispatch(
          LeaderboardActions.setComponentData({
            componentId: LEADERBOARD_COMPONENTS.ALL_LEVELS.id,
            data: parseAllLevelsData(
              allLevelsResponse.data.messageBody.levelInfo,
            ),
          }),
        );
        dispatch(
          LeaderboardActions.setDynamicDataApiStatus({
            [LEADERBOARD_COMPONENTS.ALL_LEVELS.id]: LOADING_STATUS.COMPLETED,
          }),
        );
      })
      .catch(e => {
        LPLogger.error(e, 'LeaderboardActions getAllLevelsData');
        dispatch(
          LeaderboardActions.setDynamicDataApiStatus({
            [LEADERBOARD_COMPONENTS.ALL_LEVELS.id]: LOADING_STATUS.FAILED,
          }),
        );
      });
  },

  resetData: payload => ({
    type: LeaderboardActionTypes.RESET_DATA,
    payload,
  }),
};

export default LeaderboardActions;
