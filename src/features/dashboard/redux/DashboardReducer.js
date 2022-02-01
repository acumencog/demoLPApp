import DashbaordActionTypes from './DashbaordActionTypes';

const initialState = {
  controls: {
    dynamicDataApiStatus: {},
  },
  dynamicData: {},
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashbaordActionTypes.SET_DYNAMIC_DATA_API_STATUS:
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

    case DashbaordActionTypes.SET_COMPONENT_DATA:
      return {
        ...state,
        dynamicData: {
          ...state.dynamicData,
          [action.payload.componentId]: action.payload.data,
        },
      };

    case DashbaordActionTypes.RESET_DATA:
      return initialState;

    default:
      return state;
  }
};

export default DashboardReducer;
