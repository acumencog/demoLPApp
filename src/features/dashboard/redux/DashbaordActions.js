import DashbaordActionTypes from './DashbaordActionTypes';

const DashboardActions = {
  setComponentData: payload => ({
    type: DashbaordActionTypes.SET_COMPONENT_DATA,
    payload,
  }),

  setDynamicDataApiStatus: payload => ({
    type: DashbaordActionTypes.SET_DYNAMIC_DATA_API_STATUS,
    payload,
  }),

  resetData: payload => ({
    type: DashbaordActionTypes.RESET_DATA,
    payload,
  }),
};

export default DashboardActions;
