import {NavigationActions} from 'react-navigation';
import {ROUTES} from './Routes';

let navigator = null;

const setRootNavigator = navRef => {
  navigator = navRef;
};

const navigateToLoginPage = () => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: ROUTES.AUTH_LOGIN.id,
    }),
  );
};

const getRootNavigationRoute = () => {
  return navigator.state.nav.routes[navigator.state.nav.index].key;
};

export default {
  setRootNavigator,
  navigateToLoginPage,
  getRootNavigationRoute,
};
