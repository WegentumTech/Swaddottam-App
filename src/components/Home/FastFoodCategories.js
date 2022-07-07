import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const FastFoodCategories = () => {
  return (
    <View style={{marginHorizontal: 15, marginTop: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 17}}>
          Eat What Makes You Happy
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          View All
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
        <Image
          style={styles.fastFoodProducts}
          source={require('../../assets/img/pizza.png')}
        />
      </View>
    </View>
  );
};

export default FastFoodCategories;
