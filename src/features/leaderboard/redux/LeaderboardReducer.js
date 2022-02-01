import LeaderboardActionTypes from './LeaderboardActionTypes';

const initialState = {
  controls: {
    dynamicDataApiStatus: {},
  },
  dynamicData: {},
};

const LeaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LeaderboardActionTypes.SET_DYNAMIC_DATA_API_STATUS:
      return {
        ...state,
        controls: {
          ...state.controls,
          dynamicDataApiStatus: {
            ...state.controls.dynamicDataApiStatus,
            ...action.payload,
          },
        },
      };

    case LeaderboardActionTypes.SET_COMPONENT_DATA:
      return {
        ...state,
        dynamicData: {
          ...state.dynamicData,
          [action.payload.componentId]: action.payload.data,
        },
      };

    case LeaderboardActionTypes.RESET_DATA:
      return initialState;

    default:
      return state;
  }
};

export default LeaderboardReducer;
