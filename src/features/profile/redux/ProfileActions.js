import ProfileActionTypes from './ProfileActionTypes';
import {getData} from '../service/ProfileService';
import API_URLS from '../../../service/apiUrls';
import {PROFILE_COMPONENTS} from '../statics/ProfileStatics';
import {LOADING_STATUS} from '../../../statics/Enums';
import LPLogger from '../../../utils/LPLogger';
import {parseUserPoints} from '../../../utils/DataUtils';
import DashbaordActions from '../../dashboard/redux/DashbaordActions';

const ProfileActions = {
  setComponentData: payload => ({
    type: ProfileActionTypes.SET_COMPONENT_DATA,
    payload,
  }),

  setDynamicDataApiStatus: payload => ({
    type: ProfileActionTypes.SET_DYNAMIC_DATA_API_STATUS,
    payload,
  }),

  updatePoints: payload => dispatch => {
    getData(API_URLS.USER_DATA.POINTS)
      .then(pointsResponse => {
        dispatch(
          ProfileActions.setComponentData({
            componentId: [PROFILE_COMPONENTS.POINTS.id],
            data: parseUserPoints(pointsResponse.data.messageBody.ranking[0]),
          }),
        );
        dispatch(
          ProfileActions.setDynamicDataApiStatus({
            [PROFILE_COMPONENTS.POINTS.id]: LOADING_STATUS.COMPLETED,
          }),
        );
      })
      .catch(e => {
        LPLogger.error(e, 'ProfileActions updatePoints');
        dispatch(
          ProfileActions.setDynamicDataApiStatus({
            [PROFILE_COMPONENTS.POINTS.id]: LOADING_STATUS.FAILED,
          }),
        );
      });
  },
  resetData: payload => ({
    type: ProfileActionTypes.RESET_DATA,
    payload,
  }),

  resetApplicationData: payload => dispatch => {
    dispatch(DashbaordActions.resetData());
    dispatch(ProfileActions.resetData());
  },
};

export default ProfileActions;
