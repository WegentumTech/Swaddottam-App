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
import PropularNow from '../screens/PopularNow';
import Categories from '../screens/Dynamic/Categories';
import EatWhatMakesYouHappy from '../screens/EatWhatMakesYouHappy';
import LocationSelect from '../screens/LocationSelect';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
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
      <Stack.Screen name="PropularNow" component={PropularNow} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="EatWhatMakesYouHappy" component={EatWhatMakesYouHappy} />
      <Stack.Screen name="LocationSelect" component={LocationSelect} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
