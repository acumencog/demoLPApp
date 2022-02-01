//these files have not hold tabnavigator
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './TabNavigator';
import {ROUTES} from './Routes';

const AppNavigator = createStackNavigator(
  {
    [ROUTES.APP_TAB_NAV.id]: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: ROUTES.APP_TAB_NAV.id,
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

export default AppNavigator;
