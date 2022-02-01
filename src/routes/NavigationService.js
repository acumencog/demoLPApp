import {NavigationActions} from 'react-navigation';
import {ROUTES} from './Routes';

let navigator = null;

const setRootNavigator = navRef => {
  navigator = navRef;
};

/**
 * This method will used to navigate user to guest user space and route the user
 * to login screen
 */
const navigateToLoginPage = () => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: ROUTES.AUTH_LOGIN.id,
    }),
  );
};

//Get the navigation routes
const getRootNavigationRoute = () => {
  return navigator.state.nav.routes[navigator.state.nav.index].key;
};

export default {
  setRootNavigator,
  navigateToLoginPage,
  getRootNavigationRoute,
};
