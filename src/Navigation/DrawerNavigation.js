import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator  screenOptions={{headerShown:false}} >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={Profile} />
      
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
