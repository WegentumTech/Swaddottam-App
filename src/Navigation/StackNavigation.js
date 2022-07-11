import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import VerifyEmail from '../screens/Authentication/VerifyEmail';
import VerifyOTP from '../screens/Authentication/VerifyOTP';
import DrawerNavigation from './DrawerNavigation';
import SearchScreen from '../screens/SearchScreen';
import SingleOrder from '../screens/Dynamic/SingleOrder';
import EditProfile from '../screens/EditProfile';
import SingleProduct from '../screens/Dynamic/SingleProduct';
import SingleMenuItems from '../screens/Dynamic/SingleMenuItems';
import Notifications from '../screens/Notifications';
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SingleOrderScreen" component={SingleOrder} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SingleProductScreen" component={SingleProduct} />
      <Stack.Screen name="SingleMenuItem" component={SingleMenuItems} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
