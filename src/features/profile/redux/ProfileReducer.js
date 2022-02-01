import ProfileActionTypes from './ProfileActionTypes';

const initialState = {
  controls: {
    dynamicDataApiStatus: {},
  },
  dynamicData: {},
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProfileActionTypes.SET_DYNAMIC_DATA_API_STATUS:
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

    case ProfileActionTypes.SET_COMPONENT_DATA:
      return {
        ...state,
        dynamicData: {
          ...state.dynamicData,
          [action.payload.componentId]: action.payload.data,
        },
      };

    case ProfileActionTypes.RESET_DATA:
      return initialState;

    default:
      return state;
  }
};

export default ProfileReducer;
