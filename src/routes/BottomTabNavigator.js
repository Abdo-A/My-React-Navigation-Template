import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import { colors, sizes } from '../assets/base';

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      //--specific navigationOptions for each tab
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    // Config

    initialRouteName: 'Home',
    order: ['Home', 'Settings'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,

    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.secondary,

      style: {
        backgroundColor: colors.primary,
        height: sizes.bottomTabHeight,
        borderTopWidth: 0.5,
        borderTopColor: '#00000000'
      },
      labelStyle: {},
      iconStyle: {},
      indicatorStyle: {
        backgroundColor: colors.secondary
      }
    }
  }
);
