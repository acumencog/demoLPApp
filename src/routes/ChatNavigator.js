import {createStackNavigator} from 'react-navigation-stack';
import {ROUTES} from './Routes';
import ProfileViewContainer from '../features/profile/views/ProfileViewContainer';
import RecentChat from '../features/contacts/views/RecentChat';

RecentChat.navigationOptions = () => {
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
 * to show the chat component with RecentChat shown as the default screen
 */
const ChatNavigator = createStackNavigator(
  {
    [ROUTES.CHAT.id]: {
      screen: RecentChat,
    },
    [ROUTES.PROFILE_CHAT_TAB.id]: {
      screen: ProfileViewContainer,
    },
  },

  {
    initialRouteName: ROUTES.CHAT.id,
    headerMode: 'screen',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

export default ChatNavigator;
