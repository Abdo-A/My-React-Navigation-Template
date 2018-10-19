import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      //--specific navigationOptions for each tab
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    //--routes config
    initialRouteName: "Home",
    order: ["Home", "Settings"],

    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey"
    }
  }
);
