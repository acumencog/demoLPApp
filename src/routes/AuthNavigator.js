import {createStackNavigator} from 'react-navigation-stack';
import {ROUTES} from './Routes';
import LoginView from '../features/auth/views/LoginView';
import RegistrationContainer from '../features/auth/views/RegistrationContainer';

/**
 * This method will create the stack navigator at the app level
 * Default screen of login view will be shown and decide weather to show it or not
 */
const AuthNavigator = createStackNavigator(
  {
    [ROUTES.AUTH_LOGIN.id]: {
      screen: LoginView,
    },
    [ROUTES.AUTH_REGISTRATION.id]: {
      screen: RegistrationContainer,
    },
  },
  {
    initialRouteName: ROUTES.AUTH_LOGIN.id,
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

export default AuthNavigator;
