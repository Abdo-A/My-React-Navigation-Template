import { createStackNavigator } from "react-navigation";
import { Text, TouchableOpacity } from "react-native";
import React from "react";

import BottomTabNavigator from "./BottomTabNavigator";
import HomePartialScreen from "../screens/HomeScreen/HomePartialScreen/HomePartialScreen";
import SettingsPartialScreen from "../screens/SettingsScreen/SettingsPartialScreen/SettingsPartialScreen";

export default createStackNavigator(
  {
    Tab: BottomTabNavigator,
    HomePartial: HomePartialScreen,
    SettingsPartial: SettingsPartialScreen
  },
  {
    initialRouteName: "Tab",

    //--navigationOptions for each screen:
    navigationOptions: ({ navigation }) => {
      //--first, we check which screen it is:
      let screen = navigation.state.routeName;

      //values we will modify then return:
      let headerTitle = "";
      let headerRight = "";
      let headerLeft = "";
      let headerStyle = {
        backgroundColor: colors.primary
      };
      let headerTitleStyle = {
        color: colors.white
      };
      //and so on...

      //For each screen:
      if (screen === "Tab") {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        //for each tab screen

        //Home tab screen
        if (tabScreen === "Home") {
          headerTitle = "Home";
          headerStyle = {
            backgroundColor: "red"
          };
        }

        //Settings tab screen
        if (tabScreen === "Settings") {
          headerTitle = "Settings";
          headerStyle = {
            backgroundColor: "blue"
          };
        }
      }

      if (screen === "HomePartial") {
        headerTitle = "HomePartial";
        headerRight = (
          <TouchableOpacity
            style={{ paddingRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        );
      }

      if (screen === "SettingsPartial") {
        headerTitle = "SettingsPartial";
        headerRight = (
          <TouchableOpacity
            style={{ paddingRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        );
      }

      return {
        tabBarVisible,
        headerStyle,
        headerTitle,
        headerRight
        // and so on..
      };
    }
  }
);
