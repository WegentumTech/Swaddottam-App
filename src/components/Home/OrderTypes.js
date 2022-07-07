import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const OrderTypes = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 10, flexDirection: 'row'}}>
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
              color:"white"
            
            }}>
            LUNCH
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
              color:"white"
            
            }}>
            DINNER
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
              color:"white"
            
            }}>
            BULK
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderTypes;
