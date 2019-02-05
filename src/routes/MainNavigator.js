import { createStackNavigator, createAppContainer } from 'react-navigation';

import { colors } from '../assets/base';
import BottomTabNavigator from './BottomTabNavigator';
import HomePartialScreen from '../screens/HomeScreen/HomePartialScreen/HomePartialScreen';
import SettingsPartialScreen from '../screens/SettingsScreen/SettingsPartialScreen/SettingsPartialScreen';

const RootNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    HomePartial: HomePartialScreen,
    SettingsPartial: SettingsPartialScreen
  },
  {
    initialRouteName: 'Tab',

    // We only need to configure the header options only for the 'tab' screens here
    // But for other screens (like homePartial and settingsPartial) we do that in their own components

    defaultNavigationOptions: ({ navigation }) => {
      //--first, we check which screen it is:
      let screen = navigation.state.routeName;

      //values we will modify then return:
      let headerTitle = '';
      let headerRight = '';
      let headerLeft = '';
      let headerStyle = {
        backgroundColor: colors.secondary
      };
      let headerTitleStyle = {
        color: colors.white
      };
      let tabBarVisible = true;
      //and so on...

      //For each screen:
      if (screen === 'Tab') {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        //Home tab screen
        if (tabScreen === 'Home') {
          headerTitle = 'Home';
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        //Settings tab screen
        if (tabScreen === 'Settings') {
          headerTitle = 'Settings';
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        // Return these in case of tab screens
        return {
          tabBarVisible,
          headerStyle,
          headerTitle,
          headerRight,
          headerLeft,
          headerTitleStyle
          // and so on..
        };
      }

      // Return these for other screens (could just return {})
      return {
        headerStyle,
        headerTitleStyle
      };
    }
  }
);

export default createAppContainer(RootNavigator);
