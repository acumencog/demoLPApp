import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from 'react-navigation-stack';
import {ROUTES} from './Routes';
import ShopHomeView from '../features/shop/views/ShopHomeView';
import ProfileViewContainer from '../features/profile/views/ProfileViewContainer';

ShopHomeView.navigationOptions = ({navigation}) => {
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
 * Default screen of Shop will be shown which should be configured
 */
const ShopNavigator = createStackNavigator(
  {
    [ROUTES.SHOP_HOME.id]: {
      screen: ShopHomeView,
    },
    [ROUTES.PROFILE_SHOAP_TAB.id]: {
      screen: ProfileViewContainer,
    },
  },
  {
    initialRouteName: ROUTES.SHOP_HOME.id,
    headerMode: 'screen',
    defaultNavigationOptions: {
      ...TransitionPresets.TransitionIOSSpec,
      cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
    },
  },
);

export default ShopNavigator;
