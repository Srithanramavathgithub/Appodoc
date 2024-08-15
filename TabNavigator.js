
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Screens
import Login from './Login'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';
import PharmacyScreen from './PharmacyScreen';
import History from './History';
//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "More";
const hisName = "Medical History";
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'hospital-box' : 'hospital';

            } else if (rn === detailsName) {
              iconName = focused ? 'account' : 'account';

            } else if (rn === hisName) {
              iconName = focused ? 'history' : 'history';
            } else if (rn === settingsName) {
              iconName = focused ? 'view-list' : 'view-list-outline';
            }
             
          
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          headerShown: false
        })}
        tabBarOptions={{
          activeTintColor: '#cd5e77',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 3, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={hisName} component={History} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
       

      </Tab.Navigator>
  );
}

export default TabNavigation;