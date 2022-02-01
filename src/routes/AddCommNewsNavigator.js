import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from 'react-navigation-stack';
import {ROUTES} from './Routes';
import PickImage from '../features/addCommunityNews/views/PickImage';
import ProfileViewContainer from '../features/profile/views/ProfileViewContainer';

PickImage.navigationOptions = ({navigation}) => {
  return {
    header: () => null,
  };
};

ProfileViewContainer.navigationOptions = ({navigation}) => {
  return {
    header: () => null,
  };
};

//add routes
const AddCommNewsNavigator = createStackNavigator(
  {
    [ROUTES.PICK_IMAGE.id]: {
      screen: PickImage,
    },
    [ROUTES.PROFILE_COMMUNITY_NEWS_TAB.id]: {
      screen: ProfileViewContainer,
    },
  },
  {
    initialRouteName: ROUTES.PICK_IMAGE.id,
    headerMode: 'screen',
    defaultNavigationOptions: {
      ...TransitionPresets.TransitionIOSSpec,
      cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
    },
  },
);

export default AddCommNewsNavigator;
