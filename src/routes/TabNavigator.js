import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ROUTES, ROUTES_NAME_MAPPING} from './Routes';
import DashboardStackNavigator from './DashboardStackNavigator';
import COLORS from '../statics/colors';

import ShopNavigator from './ShopNavigator';
import LeaderBoardNavigator from './LeaderBoardNavigator';
import AddCommNewsNavigator from './AddCommNewsNavigator';
import LPLogger from '../utils/LPLogger';
import {LPCustomIcon} from '../components';
import ChatNavigator from './ChatNavigator';

//Dashborad Tab
const TabNavigator = createBottomTabNavigator(
  {
    [ROUTES.DASHBORD_STACK_NAVIGATOR.id]: {
      screen: DashboardStackNavigator,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <LPCustomIcon
            iconName="DASHBOARD"
            size={25}
            color={focused ? COLORS.CERISE_RED : COLORS.ALTO}
          />
        ),
      },
    },

    //chat tab
    [ROUTES.CHAT_STACK_NAVIGATOR.id]: {
      screen: ChatNavigator,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarBadge: 5,
        tabBarIcon: ({focused}) => (
          <LPCustomIcon
            iconName="CHAT"
            size={25}
            color={focused ? COLORS.CERISE_RED : COLORS.ALTO}
          />
        ),
      },
    },

    //plus tab
    [ROUTES.PLUS.id]: {
      screen: AddCommNewsNavigator,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <LPCustomIcon
            iconName="PLUS"
            size={25}
            color={focused ? COLORS.CERISE_RED : COLORS.ALTO}
          />
        ),
      },
    },

    //leader tab
    [ROUTES.LEADER_NAVIGATOR.id]: {
      screen: LeaderBoardNavigator,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <LPCustomIcon
            iconName="LEADERBOARD"
            size={25}
            color={focused ? COLORS.CERISE_RED : COLORS.ALTO}
          />
        ),
      },
    },

    //shop tab
    [ROUTES.SHOP_NAVIGATOR.id]: {
      screen: ShopNavigator,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <LPCustomIcon
            iconName="SHOP"
            size={25}
            color={focused ? COLORS.CERISE_RED : COLORS.ALTO}
          />
        ),
      },
    },
  },
  {
    initialRouteName: ROUTES.DASHBORD_STACK_NAVIGATOR.id,
    barStyle: {backgroundColor: COLORS.BLACK_ROCK},
    resetOnBlur: true,
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: COLORS.BLACK_ROCK,
        borderTopWidth: 0,
        height: 60,
        position: 'absolute',
      },
      tabStyle: {
        paddingTop: 10,
      },
    },
    defaultNavigationOptions: {
      tabBarOnPress: ({navigation, defaultHandler}) => {
        global.selectedTab = navigation.state.routeName;
        console.log('navigation.state.routeName:  ', global.selectedTab);
        LPLogger.info(
          `Landed on ${ROUTES_NAME_MAPPING[navigation.state.routeName]} Page`,
        );
        defaultHandler();
      },
    },
  },
);

TabNavigator.navigationOptions = () => ({
  headerMode: 'none',
});

// hide tab navigator on adv details page
DashboardStackNavigator.navigationOptions = () => {
  let tabBarVisible = true;
  return {
    tabBarVisible,
  };
};

export default TabNavigator;
