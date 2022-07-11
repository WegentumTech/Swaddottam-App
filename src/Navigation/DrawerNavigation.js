import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/Reusable/CustomDrawer';
import Menu from '../screens/Menu';
import Orders from '../screens/Orders';
import Offers from '../screens/Offers';
import SavedAddress from '../screens/SavedAddress';
import TandC from '../screens/T&C';
import HelpAndSupport from '../screens/HelpAndSupport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: 'white',
        drawerAllowFontScaling: true,
        drawerLabelStyle: {
          marginLeft: -23,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Menu"
        component={Menu}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="restaurant-menu" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="shopping-bag" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Saved Address"
        component={SavedAddress}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="location" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="T&C"
        component={TandC}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help & Support"
        component={HelpAndSupport}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="help-center" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Refer & Earn"
        component={Offers}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="slideshare" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
