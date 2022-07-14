import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const OurServices = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 15,marginBottom:23}}>
      <Text style={{fontWeight: 'bold', fontSize: 18,color:"black"}}>OurServices</Text>

      <View style={{marginTop: 10, flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.orderBack}>
            <Image
              style={styles.orderType}
              source={require('../../assets/img/pizza.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
              }}>
              Tiffin{'  '}Service
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.orderBack}>
            <Image
              style={styles.orderType}
              source={require('../../assets/img/pizza.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
              }}>
              Customized Order
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.orderBack}>
            <Image
              style={styles.orderType}
              source={require('../../assets/img/pizza.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
              }}>
              A-la-Carte Service
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OurServices;
