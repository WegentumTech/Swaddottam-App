import {View, Text, TextInput, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import PressBackWithTitle from '../components/Reusable/PressBackWithTitle';
import styles from '../Styles/GloablStyles';
const Checkout = () => {
  return (
    <ScrollView>
      <PressBackWithTitle title="Billing Address" />
      <View style={{marginHorizontal: 20, marginTop: 25}}>
        <Text
          style={{marginHorizontal: 10, color: 'black', fontWeight: 'bold'}}>
          Name
        </Text>
        <TextInput style={styles.input} />
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Contact Number
        </Text>
        <TextInput style={styles.input} />
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Address
        </Text>
        <TextInput style={styles.input} />
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Area Code
        </Text>
        <TextInput style={styles.input} />
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Landmark
        </Text>
        <TextInput style={styles.input} />
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Remark ( optional )
        </Text>
        <TextInput style={styles.input} />
        <Text
          style={{
            marginHorizontal: 10,
            marginTop: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Referal Code ( optional )
        </Text>
        <TextInput style={styles.input} />
          <TouchableOpacity activeOpacity={1} >

        <Text
          style={{
              marginVertical: 10,
              textAlign: 'center',
              backgroundColor: '#FDB416',
              marginHorizontal: 100,
              padding: 10,
              marginBottom: 40,
              borderRadius: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
          Pay ₹ 300
        </Text>
              </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Checkout;
