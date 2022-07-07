import {View, Text} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from '../../Styles/GloablStyles';
import TopHeader from '../DrawerContent/TopHeader';
import UserProfile from '../DrawerContent/UserProfile';
import Coins from '../DrawerContent/Coins';
const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <TopHeader/>
      <UserProfile/>
      <Coins/>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.drawerBar}>
        <Text style={{textAlign: 'center',fontWeight:"bold"}}>version 1.0.0</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
