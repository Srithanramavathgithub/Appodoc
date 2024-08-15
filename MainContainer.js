
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screens
import Login from './Login'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';
import TabNavigation from './TabNavigator';
import StackNavigation from './StackNavigator';
//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const loginName = "Login";
// const tabName = "TabNavigation";
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

export default MainContainer;