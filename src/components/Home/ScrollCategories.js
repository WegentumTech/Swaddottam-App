import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../Styles/GloablStyles';

const ScrollCategories = () => {
  return (
    <View style={{ marginTop: 20,marginBottom:20}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
        <Image
          style={styles.slideProduct}
          source={require('../../assets/img/thali.png')}
        />
      </ScrollView>
    </View>
  );
};

export default ScrollCategories;
