import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {ROUTES} from './Routes';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

/**
 * This method will create the root navigator with two child navigations
 * AuthNavigator and AppNavigator which will decide which one to show to the user
 */
const RootNavigator = createSwitchNavigator(
  {
    [ROUTES.AUTH_NAVIGATOR.id]: {
      screen: AuthNavigator,
    },
    [ROUTES.APP_NAV.id]: {
      screen: AppNavigator,
    },
  },
  {
    initialRouteName: ROUTES.AUTH_NAVIGATOR.id,
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

export default createAppContainer(RootNavigator);
