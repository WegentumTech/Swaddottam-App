import {View, Text,ScrollView} from 'react-native';
import React from 'react';
import MyOrders from '../components/Profile/MyOrders';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
const Orders = () => {
  return (
    <ScrollView>
      <PressBackWithTitle title="My Orders" />
      <View style={{marginVertical: 15}}></View>
      <MyOrders />
    </ScrollView>
  );
};

export default Orders;
