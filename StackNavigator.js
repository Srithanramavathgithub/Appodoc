
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screens
import Login from './Login'
import TabNavigation from './TabNavigator'
import DA from './DA'
import DApp from './Dapp'
import SI from './SI'
import MedicalBook from './MedicalBook'
import SignIn from './SignInn'
import History from './History'
import PharmacyScreen from './PharmacyScreen'
import Reports from './Reports'
//Screen names


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'transparent' ,
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Login" component={Login} options={{headerLeft: (props) => null }}  />
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="SignUp" component={SignIn} />
      <Stack.Screen name="SI" component={SI} />
      <Stack.Screen name="DA" component={DA} />
      <Stack.Screen name="DApp" component={DApp} />
      <Stack.Screen name="MedicalBook" component={MedicalBook} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="PharmScreen" component={PharmacyScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;