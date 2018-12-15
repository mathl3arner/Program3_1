import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SectionListScreen from '../screens/SectionListScreen';

const HomeStack = createStackNavigator(
  {
    Login: SectionListScreen,
    SectionList: LoginScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'TEST App',
      headerTintColor: '#0088FF',
      headerStyle: {
        backgroundColor: '#111111',
      },
    },
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  /*tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),*/
};

export default createBottomTabNavigator({
  LoginScreen,
  SectionListScreen,
});
