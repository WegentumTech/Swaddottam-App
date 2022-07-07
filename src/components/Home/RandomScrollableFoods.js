import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const RandomScrollableFoods = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 15,marginBottom:15}}>
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
      <Image
        style={styles.randomFoods}
        source={require('../../assets/img/food2.jpg')}
      />
    </ScrollView>
  );
};

export default RandomScrollableFoods;
