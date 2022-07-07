import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/Reusable/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={Profile} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
