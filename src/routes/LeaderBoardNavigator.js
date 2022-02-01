import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from 'react-navigation-stack';
import {ROUTES} from './Routes';
import ProfileViewContainer from '../features/profile/views/ProfileViewContainer';
import LeaderboardView from '../features/leaderboard/views/LeaderboardView';

LeaderboardView.navigationOptions = ({navigation}) => {
  return {
    header: () => null,
  };
};

ProfileViewContainer.navigationOptions = ({navigation}) => {
  return {
    header: () => null,
  };
};

/**
 * This method will create the stack navigator at the app level
 * Default screen Shop will be shown in this navigator
 */
const ShopNavigator = createStackNavigator(
  {
    [ROUTES.LEADERBOARD.id]: {
      screen: LeaderboardView,
    },

    [ROUTES.PROFILE_LEADER_BOARD_TAB.id]: {
      screen: ProfileViewContainer,
    },
  },
  {
    initialRouteName: ROUTES.LEADERBOARD.id,
    headerMode: 'screen',
    defaultNavigationOptions: {
      ...TransitionPresets.TransitionIOSSpec,
      cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
    },
  },
);

export default ShopNavigator;
