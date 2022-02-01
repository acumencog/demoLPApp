import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {TransitionPresets} from 'react-navigation-stack';
import {Easing} from 'react-native';
import {ROUTES} from './Routes';
import DashboardContainer from '../features/dashboard/views/DashboardContainer';
import ProfileViewContainer from '../features/profile/views/ProfileViewContainer';

const transitionConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};
//navigator files
DashboardContainer.navigationOptions = ({navigation}) => {
  return {
    header: () => null,
  };
};

ProfileViewContainer.navigationOptions = ({navigation}) => {
  return {
    header: () => null,
  };
};

//Dashboard navigator
const DashboardStackNavigator = createSharedElementStackNavigator(
  {
    [ROUTES.DASHBORD.id]: {
      screen: DashboardContainer,
    },

    [ROUTES.PROFILE.id]: {
      screen: ProfileViewContainer,
    },
  },
  {
    initialRouteName: ROUTES.DASHBORD.id,
    headerMode: 'screen',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      transitionSpec: {
        open: transitionConfig,
        close: transitionConfig,
      },
      gestureEnabled: false,
    },
  },
);

export default DashboardStackNavigator;
