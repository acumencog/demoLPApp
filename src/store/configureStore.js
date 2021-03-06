import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import ProfileReducer from '../features/profile/redux/ProfileReducer';
import LeaderboardReducer from '../features/leaderboard/redux/LeaderboardReducer';

import DashboardReducer from '../features/dashboard/redux/DashboardReducer';

/**
 * This method is used to create the root reducer which will have the combined information of
 * all the reducers in it like ProfileReducer, LeaderboardReducer, DashboardReducer
 */
const rootReducer = combineReducers({
  ProfileReducer,
  LeaderboardReducer,
  DashboardReducer,
});

const logger = createLogger({
  // ...options
});

const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunk, logger));

const store = configureStore();

export default store;
