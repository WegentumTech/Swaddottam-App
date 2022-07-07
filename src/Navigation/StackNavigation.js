import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import VerifyEmail from '../screens/Authentication/VerifyEmail';
import VerifyOTP from '../screens/Authentication/VerifyOTP';
import DrawerNavigation from "./DrawerNavigation";
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
